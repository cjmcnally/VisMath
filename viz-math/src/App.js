import logo from './logo.svg';
import './App.css';
import EquationParser from './EquationParser';
import Graph from './Graph';
import getExplanationAI from './GetAIExplanation';
import Explanation from './Explanation';
import React, {useEffect, useState} from "react";
import GetAIExplanation from "./GetAIExplanation";
import ExpandedGraph from "./ExpandedGraph";

function App() {

    const [equation, setEquation] = useState('');
    const [submittedEquation, setSubmittedEquation] = useState('');
    const [graphData, setGraphData] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmittedEquation(equation);
    }

    return (

        <div className="app-container">
            <div class="title">Vis-Math</div>

            <div className="input-container">
                <input type="text"
                       className="function-input"
                       id="function-input"
                       value={equation}
                       onChange={(e) => setEquation(e.target.value)}
                       placeholder="Enter an equation:"
                />
                <button onClick={handleSubmit} className="graph-button">Graph</button>
            </div>
            <div className="result-container">
                <div className="graph-container">
                    {submittedEquation && (
                        <EquationParser
                            equation={submittedEquation}
                            dataGenerated={setGraphData}
                        />
                    )}
                    <ExpandedGraph data={graphData}/>
                </div>
                <div className="explanation-container">
                    {/* Create an explanation file need to implement ai API */}
                    <Explanation equation={submittedEquation} />
                    <EquationParser equation={submittedEquation} dataGenerated={setGraphData} />
                    {/*<GetAIExplanation equation={submittedEquation} />*/}
                </div>
            </div>
        </div>
    );
}

export default App;
