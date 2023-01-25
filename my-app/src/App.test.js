import { render, screen, fireEvent } from '@testing-library/react';
import App, { replaceCamelWithSpaces } from './App';

test('button has correct initial color', () => {
    render(<App />);

    // find an element with a role of button and text of "Change to Blue"
    const colorButton = screen.getByRole('button', { name: 'Change to blue'});

    // expect the background color to be red
    expect(colorButton).toHaveStyle({ backgroundColor: 'red'}); 

    // click button
    fireEvent.click(colorButton);

    // expect the background color to blue
    expect(colorButton).toHaveStyle({ backgroundColor: 'blue' });

    // expect the button text to be 'Change to red'
    expect(colorButton).toHaveTextContent('Change to red');
});


test('initial conditions', ()=>{
    render(<App />);

    // check that the button starts out enabled
    const colorButton = screen.getByRole('button', { name: `Change to blue`});
    expect(colorButton).toBeEnabled();

    // check that the checkbox starts out unchecked
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).not.toBeChecked();
})

test('Checkbox disable button on first click and enables on second ckick', () => {
    render(<App/>);
    const checkbox = screen.getByRole('checkbox', { name : 'Disable button' });
    const colorButton = screen.getByRole('button', { name :'Change to blue' });

    fireEvent.click(checkbox);
    expect(colorButton).toBeDisabled();

    fireEvent.click(checkbox);
    expect(colorButton).toBeEnabled();
});


test('Disabled button has gray background color and reverts to red', () => {
    render(<App />);
    const checkbox = screen.getByRole('checkbox', { name : 'Disable button'});
    const colorButton = screen.getByRole('button', { name : "Change to blue"});

    //disable button 
    fireEvent.click(checkbox);
    expect(colorButton).toHaveStyle('background-color: gray');

    // re-enable button
    fireEvent.click(checkbox);
    expect(colorButton).toHaveStyle('background-color: red');
});


test('Clicked disabled button has gray background and reverts to blue', ()=> {
    render(<App />);
    const checkbox = screen.getByRole('checkbox', { name : 'Disable button'});
    const colorButton = screen.getByRole('button', { name : "Change to blue"});

    // clicked button
    fireEvent.click(colorButton);

    // disable button 
    fireEvent.click(checkbox);
    expect(colorButton).toHaveStyle('background-color: gray');

    // re-enable button 
    fireEvent.click(checkbox);
    expect(colorButton).toHaveStyle('background-color: blue');
});

describe('spaces before camel-case capital letters', () => {
    test('Works for no inner capital letter', ()=> {
        expect(replaceCamelWithSpaces('Red')).toBe('Red'); 
    });
    test('Works for one inner capital letter', () => {
        expect(replaceCamelWithSpaces('MidnightBlue')).toBe('Midnight Blue');
    });
    test('Works for multiple inner capital letters', () => {
        expect(replaceCamelWithSpaces('MediumVioletRed')).toBe('Medium Violet Red');
    });
});

