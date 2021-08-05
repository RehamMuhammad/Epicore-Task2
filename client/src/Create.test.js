import React from 'react';
import { render, fireEvent ,act} from '@testing-library/react';
import Create from './components/Create';


describe("Create component", () => {

   //Here i check for the existence of two buttons before clicking to login 

    it("Shows Only two Buttons", () =>{
        const {getAllByTestId} = render (<Create/>);
        const buttonList = getAllByTestId("button");
        expect(buttonList).toHaveLength(2);
    });


   //Here i check for the existence of only one button after clicking to move to login page 


    it(" Shows The login button after click only", async () =>{
    await act( async () => {
        const {getAllByTestId} = render (<Create/>);
        const buttonList = getAllByTestId("button");
        await fireEvent.click(buttonList[0]);
        expect(getAllByTestId("button")).toHaveLength(1);
    });
    });



});