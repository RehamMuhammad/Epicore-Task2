import React from 'react';
import { render} from '@testing-library/react';
import Contact from './components/Contact';


//Here i test if my input(email) element is rendering Correctly by its Placeholder Name

it("renders correctly", () =>{
    const {queryByPlaceholderText} = render (<Contact />)

    expect(queryByPlaceholderText("Enter your email here")).toBeTruthy()
})