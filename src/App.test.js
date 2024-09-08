import { render, screen, fireEvent } from '@testing-library/react';
import Button from './components/Button';

// jest will give us some global functions, one function is
test('render the button and handle click event',()=>{
    const handleClick = jest.fn(); // mock function : dummy finction


    render(<Button onClick={handleClick}>Click</Button>)

    const renderedButton = screen.getByText('Click')

    fireEvent.click(renderedButton);

    expect(handleClick).toHaveBeenCalledTimes(1);

})// will containe one logical unit test for our code

