import React from "react";
import SummaryForm from "./summaryForm";
import { useOrderDetails } from "../../contexts/OrderDetails";
import { formCurrency } from "../../utilities";

export default function OrderSummary() {
  const { optionCounts, totals } = useOrderDetails();

  const scoopArray = Object.entries(optionCounts.scoops);
  const scoopList = scoopArray.map(([key, value]) => (
    <li key={key}>
      {value} {key}
    </li>
  ));

  const toppingArray = Object.keys(optionCounts.toppings);
  const toppingList = toppingArray.map((key) => <li key={key}>{key}</li>);

  return (
    <div>
      <h1>OrderSummary</h1>
      <h2>Scoops: {formCurrency(totals.scoops)}</h2>
      <ul>{scoopList}</ul>
      <h2>Toppings: {formCurrency(totals.toppings)}</h2>
      <ul>{toppingList}</ul>
      <SummaryForm />
    </div>
  );
}
