import { render, screen } from "../../../test-utils/testing-library-utils";
import userEvent from "@testing-library/user-event";
import Options from "../Options";
import OrderEntry from "../OrderEntry";

// Test Options Scoops
test("update scoop subtotal when scoops change", async () => {
  const user = userEvent.setup();
  render(<Options optionType="scoops" />);

  // make sure total starts out $0.00
  const scoopsSubtotal = screen.getByText("Scoops total: $", { exact: false });
  expect(scoopsSubtotal).toHaveTextContent("0.00");

  // update vanilla scoops to 1 and check the subtotal
  const vanillaInput = await screen.findByRole("spinbutton", {
    name: "Vanilla",
  });
  await user.clear(vanillaInput);
  await user.type(vanillaInput, "1");
  expect(scoopsSubtotal).toHaveTextContent("2.00");

  // update chocolate scoops to 2 and check subtotal
  const chocolateInput = await screen.findByRole("spinbutton", {
    name: "Chocolate",
  });
  await user.clear(chocolateInput);
  await user.type(chocolateInput, "2");
  expect(scoopsSubtotal).toHaveTextContent("6.00");
});

// Test Options Toppings

test("update topping subtotal when toppings change", async () => {
  const user = userEvent.setup();
  render(<Options optionType="toppings" />);

  // make sure Toppings Total starts out $0.00
  const toppingsSubtotal = screen.getByText("Toppings total: $", {
    exact: false,
  });

  expect(toppingsSubtotal).toHaveTextContent("0.00");

  const cherriesCheckBox = await screen.findByRole("checkbox", {
    name: "Cherries",
  });

  // make sure TopingCheckbox starts unchecked.
  expect(cherriesCheckBox).not.toBeChecked();

  // when clicked checkbox,
  await user.click(cherriesCheckBox);
  expect(cherriesCheckBox).toBeChecked();
  expect(toppingsSubtotal).toHaveTextContent("1.50");

  // when user clicked CherrisCheckbox, CherriesCheckbox is unchecked and update total price
  await user.click(cherriesCheckBox);
  expect(cherriesCheckBox).toBeChecked();
  expect(cherriesCheckBox).toHaveTextContent("0.00");

  await user.click(cherriesCheckBox);

  const hotFugeCheckbox = await screen.findByRole("checkbox", {
    name: "Hot Fudge ",
  });

  // make sure TopingCheckbox starts unchecked.
  expect(hotFugCheckbox).not.toBeChecked();

  await user.click(hotFugeCheckbox);
  expect(hotFugeCheckbox).toBeChecked();
  expect(toppingsSubtotal).toHaveTextContent("3.00");
});
