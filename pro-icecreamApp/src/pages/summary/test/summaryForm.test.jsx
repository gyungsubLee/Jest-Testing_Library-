import {render, fireEvent, screen} from '@testing-library/react'
import  userEvent  from '@testing-library/user-event';
import SummaryForm from '../summaryForm';

test('init codition', ()=>{
  render(<SummaryForm />);

  const checkbox = screen.getByRole('checkbox', {name: /terms and conditions/i});
  expect(checkbox).not.toBeChecked();

  const confirmButton = screen.getByRole('button', {name: /confirm order/i});
  expect(confirmButton).toBeDisabled();
});



test('Checkbox enables button on first click and disabbles on second click', async ()=>{
  const user = userEvent.setup();

  render(<SummaryForm />);

  const checkbox = screen.getByRole('checkbox', {name: /terms and conditions/i});

  await user.click(checkbox);

  expect(checkbox).toBeChecked();

  const confirmButton = screen.getByRole('button', {name: /confirm order/i});
  expect(confirmButton).toBeEnabled();

  await user.click(checkbox);
  expect(confirmButton).toBeDisabled();
})