import React, { useState, useContext } from "react"; // Added useContext
import axios from "axios";

import GeneralContext from "./GeneralContext"; // Context import

import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid,mode, refreshOrders }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);

  // Accessing context
  const { closeBuyWindow } = useContext(GeneralContext);

  const handleBuyOrSellClick = async () => {
    try {
      const response = await axios.post("https://tradexabackend.onrender.com/newOrder", {
        name: uid, // Share name
        qty: stockQuantity, // Quantity
        price: stockPrice, // Price
        mode, // Action
      });
  
      if (response.status === 200) {
        console.log(`${mode} order placed successfully!`);
  
        // Optional: Refresh orders by fetching again or adding dynamically
        if (refreshOrders) {
          refreshOrders(response.data.order);
        }
  
        closeBuyWindow(); // Close Buy Window
      } else {
        console.error("Failed to place order:", response.data.message);
      }
    } catch (error) {
      console.error("Error while placing order:", error);
    }
  };
  

  const handleCancelClick = () => {
    // Close the Buy Window
    closeBuyWindow();
  };

  return (
    <div className="container" id="buy-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              onChange={(e) => setStockQuantity(Number(e.target.value))}
              value={stockQuantity}
              min="1" // Minimum quantity
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              onChange={(e) => setStockPrice(Number(e.target.value))}
              value={stockPrice}
              min="0" // Minimum price
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Margin required ₹{(stockQuantity * stockPrice).toFixed(2)}</span>
        <div>
        <button
            className={`btn ${mode === "BUY" ? "btn-blue" : "btn-red"}`}
            onClick={handleBuyOrSellClick}
          >
            {mode === "BUY" ? "Buy" : "Sell"}
          </button>
          <button className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;
