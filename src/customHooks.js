import { useState } from "react";


export function useFormInput(initialValue){
    const [value,setValue]=useState(initialValue);

    function handleInputOnchange(e){
        //console.log(e.target.value)
        setValue(e.target.value);
    }

    return {
        value,
        onChange:handleInputOnchange
    }

};