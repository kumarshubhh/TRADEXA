import React, { useState } from "react";
import BuyActionWindow from "./BuyActionWindow";

const GeneralContext = React.createContext({
  openBuyWindow: (uid, mode) => {},
  closeBuyWindow: () => {},
  holdings: [], // Added holdings to the context
  addHolding: (holding) => {}, // Function to add new holding
});

export const GeneralContextProvider = (props) => {
  const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
  const [selectedStockUID, setSelectedStockUID] = useState("");
  const [selectedMode, setSelectedMode] = useState("BUY"); // Add state for mode

  const [holdings, setHoldings] = useState([]); // State to maintain holdings

  // Function to open the Buy Window
  const handleOpenBuyWindow = (uid) => {
    setIsBuyWindowOpen(true);
    setSelectedStockUID(uid);

    setSelectedMode(mode);// Set the mode dynamically
  };

  // Function to close the Buy Window
  const handleCloseBuyWindow = () => {
    setIsBuyWindowOpen(false);
    setSelectedStockUID("");
    setSelectedMode("BUY"); // Reset to default mode
  };

  // Function to add new holding to the holdings list
  const handleAddHolding = (holding) => {
    setHoldings((prevHoldings) => [...prevHoldings, holding]);
  };

  return (
    <GeneralContext.Provider
      value={{
        openBuyWindow: handleOpenBuyWindow,
        closeBuyWindow: handleCloseBuyWindow,
        holdings: holdings, // Expose holdings to other components
        addHolding: (holding) =>
          setHoldings((prevHoldings) => [...prevHoldings, holding]), // Expose addHolding function
      }}
    >
      {props.children}
      {isBuyWindowOpen && <BuyActionWindow uid={selectedStockUID} mode={selectedMode}/>}
    </GeneralContext.Provider>
  );
};

export default GeneralContext;
