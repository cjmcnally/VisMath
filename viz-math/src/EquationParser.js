import React, {useEffect} from 'react';
import * as math from 'mathjs';

function EquationParser({equation, dataGenerated}) {
    useEffect(() => {
        if (!equation) return;
        try {
            // compile the expression entered
            const compiledExpression = math.compile(equation);

            // generate data points
            const xValues = Array.from({length: 100}, (_, i) => -10 + i * 0.2)
            const dataPoints = xValues.map(x => ({
                x, y: compiledExpression.evaluate({x})
            }))

            dataGenerated(dataPoints);

        } catch (error) {
            console.error("Error parsing the equation:", error);
            // print error in the UI/REACTJS as well
        }
    }, [equation, dataGenerated]);
    return null;
}

export default EquationParser;