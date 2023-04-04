import { createContext, useContext, useState } from "react";
import { pricePerItem } from "../constants/constants";

const OrderDetails = createContext();

export function useOrderDetails() {
  const contextValue = useContext(orderDetails);

  if (!contextValue) {
    throw new Error(
      "useOrderDetails must be called from within an OrderDetailsProvider"
    );
  }

  return contextValue;
}

export function OrderDetailsProvider(props) {
  const [optionCounts, setOptionCounts] = useState({
    scoops: {},
    toppings: {},
  });

  function resetOrder() {
    setOptionCounts({
      scoops: {},
      toppings: {},
    });
  }

  function updateOptionCounts({ itemName, newItemCount, optionType }) {
    setOptionCounts((previousOptionCounts) => ({
      ...previousOptionCounts,
      [optionType]: {
        ...previousOptionCounts[optionType],
        [itemName]: newItemCount,
      },
    }));
  }

  function calculate(optionType) {
    const countsArray = Object.keys(optionCounts[optionType]); // example) [1, 2]
    const totalCount = countsArray.reduce((total, value) => total + value, 0);
    return totalCount * pricePerItem[optionType];
  }

  const totals = {
    scoops: calculate("scoops"),
    toppings: calculate("toppings"),
  };

  const value = { optionCounts, totals, updateOptionCounts, resetOrder };

  return <OrderDetails value={value} {...props} />;
}
