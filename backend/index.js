require("dotenv").config();

const express = require("express");
const app = express();
const flash = require("connect-flash")
const mongoose = require("mongoose");
const { HoldingModel } = require("./model/HoldingModel");
const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");
const bodyParser = require("body-parser");
const cors = require("cors");
const bcrypt = require("bcrypt"); // For password comparison
const jwt = require("jsonwebtoken"); // For generating tokens

const passport = require("passport");
const localStrategy = require("passport-local");
const User = require("./schemas/user");
const session = require("express-session");
const MongoStore = require("connect-mongo");

const PORT = process.env.PORT || 3001;
const uri = process.env.MONGO_URL;


app.use(bodyParser.json());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.use(
//   cors({
//       origin: ["http://localhost:5173","http://localhost:5174"],// Replace with your frontend's URL
//       credentials: true, // Allow cookies
//   })
// );
// app.use(cors());

const allowedOrigins = ['https://tradexafrontend.vercel.app/', 'https://tradexadashboard.vercel.app'];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    credentials: true, // This ensures cookies are allowed
  })
);







app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "https://tradexadashboard.vercel.app","https://tradexafrontend.vercel.app/"); // Frontend origin
  res.header("Access-Control-Allow-Credentials", "true"); // Allow cookies
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});


const JWT_SECRET = "Mysecretecode";

const sessionOptions = {
  secret: "Mysecretecode",
  resave: false,
  saveUninitialized: true,
  store: MongoStore.create({
    mongoUrl: uri,
    touchAfter: 24 * 3600, // Time period in seconds
  }),
  cookie: {
    secure: false,
    httpOnly: true,
    sameSite: "lax",
    expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
    maxAge: 7 * 24 * 60 * 60 * 1000,
    
  },
 cookie: { secure: false },
};

app.use(session(sessionOptions));
app.use(passport.initialize());
app.use(passport.session());



passport.use(User.createStrategy());

//passport.use(new localStrategy(User.authenticate()));

passport.use(
  new localStrategy(
      { usernameField: "email", passwordField: "password" }, // Use email as the username field
      async (email, password, done) => {
          try {
              console.log("Email provided:", email);
              console.log("Password provided:", password);

              // Find user by email
              const user = await User.findOne({ email });
              if (!user) {
                  return done(null, false, { message: "Invalid email or password" });
              }

              console.log("User from DB:", user);

              // Compare password
              if (!user.hash || !user.salt) {
                  return done(null, false, { message: "Password not set for this account" });
              }

              const isMatch = await bcrypt.compare(password, user.hash);
              if (!isMatch) {
                  return done(null, false, { message: "Invalid email or password" });
              }

              return done(null, user);
          } catch (err) {
              return done(err);
          }
      }
  )
);

 passport.serializeUser(User.serializeUser());
 passport.deserializeUser(User.deserializeUser());

// passport.serializeUser((user, done) => {
//   console.log("Serializing user:", user); // Debug
//   done(null, user.id);
// });


// passport.deserializeUser(async (id, done) => {
//   try {
//       const user = await User.findById(id);
//       console.log("Deserialized user:", user); // Debug
//       done(null, user);
//   } catch (err) {
//       console.error("Error during deserialization:", err);
//       done(err, null);
//   }
// });

app.use(flash());


mongoose
  .connect(uri)
  .then(() => console.log("DB Connected!"))
  .catch((err) => console.error("DB Connection Failed:", err));


  app.use((req, res, next) => {
    console.log("Session details:", req.session);
    console.log("Authenticated user:", req.user);
    next();
});


// SIGNUP ROUTE
app.post("/signup", async (req, res) => {
  try {
      const { name, email, password } = req.body;

      // Create user
      const newUser = new User({ name, email });
    const registeredUser=  await User.register(newUser, password);
    console.log("Hash:", registeredUser.hash); // Check if hash is generated
console.log("Salt:", registeredUser.salt); // Check if salt is generated

    

      // Manually authenticate the user after signup
      req.login(registeredUser, (err) => {
          if (err) {
              console.error("Login error after signup:", err);
              return res.status(500).json({ message: "Signup successful, but login failed" });
          }

          // Send user data to frontend
          res.status(200).json({
              message: "Signup successful",
              redirectUrl:"https://tradexadashboard.vercel.app",
              user: { name: registeredUser.name, email: registeredUser.email },
          });
      });
  } catch (err) {
      console.error("Signup error:", err);
      res.status(500).json({ message: "Signup failed", error: err.message });
  }
});



// app.post(
//   "/login",
//   passport.authenticate("local", {
//     failureRedirect: "/login",
//     failureFlash: true,
//   }),
//   async (req, res) => {
//     try {
//       // Redirect or send a success response after successful login
//       res.redirect("/dashboard"); // Or send a JSON response
//     } catch (err) {
//       console.error(err);
//       res.status(500).send("Server error");
//     }
//   }
// );


// Ensure correct path


app.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        console.log("Email from request:", email);
        console.log("Password from request:", password);

        // Find user by email
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(401).json({ message: "User not found!" });
        }

        // Manually verify password using Passport-Local-Mongoose method
        user.authenticate(password, (err, authenticatedUser, passwordError) => {
            if (err) {
                console.error("Error during authentication:", err);
                return res.status(500).json({ message: "Internal server error" });
            }
            if (!authenticatedUser) {
                console.log("Authentication failed:", passwordError);
                return res.status(401).json({ message: passwordError.message || "Invalid credentials" });
            }

            console.log("User authenticated successfully:", authenticatedUser);
            req.login(authenticatedUser, (err) => {
                if (err) {
                    console.error("Error during session login:", err);
                    return res.status(500).json({ message: "Login failed" });
                }

                // Send redirect URL to frontend
                return res.status(200).json({
                    message: "Login successful",
                    redirectUrl: "https://tradexadashboard.vercel.app", // Redirect to dashboard folder
                    user: { name: authenticatedUser.name, email: authenticatedUser.email }
                });
            });
        });

    } catch (err) {
        console.error("Login error:", err);
        res.status(500).json({ message: "Server error" });
    }
});


app.post("/logout", (req, res) => {
  req.logout((err) => {
      if (err) {
          return res.status(500).json({ message: "Logout failed" });
      }
      req.session.destroy((err) => {
          if (err) {
              return res.status(500).json({ message: "Error clearing session" });
          }
          res.clearCookie("connect.sid"); // Session cookie delete karega
          return res.status(200).json({ message: "Logout successful" });
      });
  });
});







// GET ALL HOLDINGS
app.get("/allHoldings", async (req, res) => {
  try {
    let allHoldings = await HoldingModel.find({});
    res.status(200).json(allHoldings);
  } catch (error) {
    console.error("Error fetching holdings:", error);
    res.status(500).json({ message: "Error fetching holdings", error });
  }
});

// GET ALL POSITIONS
app.get("/allPositions", async (req, res) => {
  try {
    let allPositions = await PositionsModel.find({});
    res.status(200).json(allPositions);
  } catch (error) {
    console.error("Error fetching positions:", error);
    res.status(500).json({ message: "Error fetching positions", error });
  }
});

// PLACE A NEW ORDER
app.post("/newOrder", async (req, res) => {
  try {
    const { name, qty, price, mode } = req.body; // mode can be "BUY" or "SELL"

    // Save the order in the orders collection
    const newOrder = new OrdersModel({
      name,
      qty,
      price,
      action: mode, // BUY or SELL
      date: new Date(),
    });
    await newOrder.save();

    // Update holdings based on mode
    if (mode === "BUY") {
      // Check if the stock is already in holdings
      const existingHolding = await HoldingModel.findOne({ name });
      if (existingHolding) {
        // Update existing holding
        const totalQty = existingHolding.qty + qty;
        const newAvgPrice =
          (existingHolding.avg * existingHolding.qty + price * qty) / totalQty;
        existingHolding.qty = totalQty;
        existingHolding.avg = newAvgPrice;
        await existingHolding.save();
      } else {
        // Create new holding
        const newHolding = new HoldingModel({
          name,
          qty,
          avg: price,
        });
        await newHolding.save();
      }
    } else if (mode === "SELL") {
      const existingHolding = await HoldingModel.findOne({ name });
      if (existingHolding) {
        existingHolding.qty -= qty;
        if (existingHolding.qty <= 0) {
          // Remove the holding if quantity becomes 0
          await HoldingModel.deleteOne({ name });
        } else {
          await existingHolding.save();
        }
      }
    }

    res.status(200).json({ message: "Order placed successfully!" });
  } catch (error) {
    console.error("Error placing order:", error);
    res.status(500).json({ message: "Error placing order", error });
  }
});

// DELETE A HOLDING
app.delete("/deleteHolding/:id", async (req, res) => {
  try {
    const holdingId = req.params.id;
    const deleted = await HoldingModel.findByIdAndDelete(holdingId);
    if (deleted) {
      res.status(200).json({ message: "Holding deleted successfully" });
    } else {
      res.status(404).json({ message: "Holding not found" });
    }
  } catch (error) {
    console.error("Error deleting holding:", error);
    res.status(500).json({ message: "Error deleting holding", error });
  }
});




app.get("/currentUser", (req, res) => {

  console.log("Session details:", req.session);
  console.log("Authenticated user:", req.user);


  if (req.isAuthenticated()) {
    const { name, email } = req.user
    res.status(200).json({ user: { name, email} });
  } else {
    res.status(401).json({ message: "User not authenticated" });
  }
});





// GET ALL ORDERS
app.get("/orders", async (req, res) => {
  try {
    const orders = await OrdersModel.find().sort({ date: -1 }); // Sort by latest order
    res.status(200).json(orders);
  } catch (error) {
    console.error("Error fetching orders:", error);
    res.status(500).json({ message: "Error fetching orders", error });
  }
});



app.get("/api/summary", (req, res) => {
  res.json({
    username: "Shubhanshu",
    marginAvailable: 3.74,
    marginsUsed: 0,
    openingBalance: 3.74,
    holdingsCount: 13,
    profitLoss: 1.55,
    profitPercentage: 5.2,
    currentValue: 31.43,
    investment: 29.88,
  });
});



app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});  