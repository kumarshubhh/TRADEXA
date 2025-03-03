import React, { useState, useEffect } from "react";
import axios from "axios";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  // Fetch all orders on component mount
  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const response = await axios.get("https://tradexabackend.onrender.com/orders",{
        headers: {
          "Content-Type": "application/json"
        },
        withCredentials: true // ✅ Agar backend cookies ya auth tokens bhej raha hai
      
      });
      setOrders(response.data); // Save orders to state
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  return (
    <div className="orders">
      {orders.length === 0 ? (
        <div className="no-orders">
          <p>No orders placed yet.</p>
        </div>
      ) : (
        <div className="order-table">
          <table>
            <thead>
              <tr>
                <th>Instrument</th>
                <th>Qty.</th>
                <th>Price</th>
                <th>Action</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
                <tr key={index}>
                  <td>{order.name}</td>
                  <td>{order.qty}</td>
                  <td>₹{order.price.toFixed(2)}</td>
                  <td>{order.action}</td>
                  <td>{new Date(order.date).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Orders;
