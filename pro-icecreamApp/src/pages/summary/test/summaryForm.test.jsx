import { render, fireEvent, screen } from "@testing-library/react";
import SummaryForm from "../summaryForm";
import userEvent from "@testing-library/user-event";

test("init condittion", () => {
  render(<SummaryForm />);

  const checkbox = screen.getByRole("checkbox", {
    name: /terms and conditions/i,
  });
  expect(checkbox).not.toBeChecked();

  const confrimButton = screen.getByRole("button", { name: /confirm order/i });
  expect(confrimButton).toBeDisabled();
});

test("Checkbox enables button on first click and disables on second click", async () => {
  const user = userEvent.setup();

  render(<SummaryForm />);

  const checkbox = screen.getByRole("checkbox", {
    name: /terms and conditions/i,
  });
  const confrimButton = screen.getByRole("button", { name: /confirm order/i });

  // first click
  await user.click(checkbox);
  expect(confrimButton).toBeEnabled();

  // second click
  await user.click(checkbox);
  expect(checkbox).not.toBeChecked();
  expect(confrimButton).toBeDisabled();
});

test("popover responds to hover", async () => {
  render(<SummaryForm />);

  // popover starts out hidden
  const nullPopover = screen.queryByText(
    /no ice cream will actually be delivered/i
  );

  expect(nullPopover).not.toBeInTheDocument();

  // popover appears on mouseover of checkbox label
  const termsAndConditions = screen.getByText(/terms and conditions/i);
  await userEvent.hover(termsAndConditions);

  const popover = screen.getByText(/no ice cream will actually be delivered/i);
  expect(popover).toBeInTheDocument();

  // popover disappears when we mouse out
  await userEvent.unhover(termsAndConditions);
  expect(popover).not.toBeInTheDocument();
});
