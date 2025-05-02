import React, {useEffect, useState} from "react";

function Explanation({equation}) {
    // need an api
    const [explanation, setExplanation] = useState('');
    useEffect(() => {
        setExplanation(equation);
    }, [equation]);

    return (
        <div className="explanation-box">
            <h3>About the function: {equation} </h3>
            <p>{explanation}</p>
        </div>
    );


}

export default Explanation;