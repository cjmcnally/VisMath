import React, {useEffect, useState} from "react";
import getAIExplanation from "./GetAIExplanation";

function Explanation({equation}) {
    // need an api
    const [explanation, setExplanation] = useState('');
    const [isLoading, setIsLoading] = useState(false);


    useEffect(() => {
        if (!equation) return;

        setIsLoading(true);

        (async () => {
            try {
                const result = await getAIExplanation(equation);

                if (result.choices && result.choices[0]?.message) {
                    //setExplanation(result.choices[0].message.content);
                    const formattedExplanation = result.choices[0].message.content.replace(/- /g, '\n- ');
                    setExplanation(formattedExplanation);
                } else {
                    setExplanation('Could not generate explanation. Please try again.');
                }
            } catch (error) {
                console.error("Error processing explanation:", error);
                setExplanation("Error generating explanation.");
            } finally {
                setIsLoading(false);
            }
        })();
    }, [equation]);

    return (
        <div className="explanation-box">
            <h3>About the function: {equation} </h3>
            {isLoading ? (
                <p>Generating Explanation...</p>
            ) : (
                <div>
                    {explanation.split('\n').map((line, index) =>
                        line.startsWith('- ') ? (
                            <li key={index}>{line.slice(2)}</li>
                        ) : (
                            <p key={index}>{line}</p>
                        )
                    )}
                </div>
            )}
        </div>
    );


    // return (
    //     <div className="explanation-box">
    //         <h3>About the function: {equation} </h3>
    //         {isLoading ? (
    //             <p>Generating Explanation...</p>
    //         ) : (
    //             <p>{explanation}</p>
    //         )}
    //     </div>
    // );
}

export default Explanation;