// Code EyesOnMe Component Here
import React from "react";

function heandleFocus () {
    console.log("Good!")
}

function handleBlur () {
    console.log('Hey! Eyes on me!')
}

function EyesOnMe() {
    return(
        <button onFocus={heandleFocus} onBlur={handleBlur}> Eyes on me </button>
    )
}

export default EyesOnMe;