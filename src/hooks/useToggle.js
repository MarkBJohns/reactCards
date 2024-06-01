import React, { useState } from "react";

const useToggle = (initialState = true) => {
    const [state, setState] = useState(initialState);
    
    const toggleState = () => {
        setState(!state);
    }
    
    return [state, toggleState]
}
    
export default useToggle;