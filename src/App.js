import { useState } from "react";

function App() {

  const [formula, setFormula] = useState("")
  const [output, setOutput] = useState("0")

  const clear = () =>{
    setOutput("0")
    setFormula("")
  }

  const add = () => {
    if(formula[formula.length - 1] === "/" || formula[formula.length - 1] === "*" || formula[formula.length - 1] === "-"){
      setFormula(formula.substring(0, formula.length - 1))
      setOutput("+")
    }
    if(formula[formula.length - 1] !== "+"){
      setOutput("+")
      setFormula(prev => prev = prev + "+")
    }
  }

  const remove = () => {
    if(formula[formula.length - 1] === "/" || formula[formula.length - 1] === "*" || formula[formula.length - 1] === "+"){
      setFormula(formula.substring(0, formula.length - 1))
      setOutput("-")
    }
    if(formula[formula.length - 1] !== "-"){
      setOutput("-")
      setFormula(prev => prev = prev + "-")
    }
  }

  const multiply = () => {
    if(formula[formula.length - 1] === "/" || formula[formula.length - 1] === "-" || formula[formula.length - 1] === "+"){
      setFormula(formula.substring(0, formula.length - 1))
      setOutput("x")
    }
    if(formula[formula.length - 1] !== "*"){
      setOutput("x")
      setFormula(prev => prev = prev + "*")
    }
  }

  const devide = () => {
    if(formula[formula.length - 1] === "*" || formula[formula.length - 1] === "-" || formula[formula.length - 1] === "+"){
      setFormula(formula.substring(0, formula.length - 1))
      setOutput("/")
    }
    if(formula[formula.length - 1] !== "/"){
      setOutput("/")
      setFormula(prev => prev = prev + "/")
    }
  }

  const point = () => {
    if(!output.includes(".")){
      setOutput(output + ".")
      setFormula(formula + ".")
    }
  }

  const calculate = () => {
    try {
      const result = eval(formula);
      setOutput(result.toString());
      setFormula(formula + "=" + result.toString()) ;
    } catch (error) {
      setOutput("Error");
      setFormula("");
    }
  };

  const handlClick = (v) => {
    if(output === "0"){
      setOutput("")
      setOutput(v)
      setFormula(v)
    }
    else{
      setOutput(prev => {
        return prev = prev + v
      })
      setFormula(prev => {
        return prev + v
      })
    }
    if(output === "+" || output === "-" || output === "/" || output === "x"){
      setOutput(v)
    }
  }

  
 
  return (
    <div>
      <div className="calculator">
      <div className="formulaScreen">{formula}</div>
      <div className="outputScreen" id="display">{output}</div>
      <div>
            <button onClick={clear} className="jumbo" id="clear" value="AC" style={ {background:"rgb(172, 57, 57)"} }>AC</button>
            <button onClick={devide} id="divide" value="/" style={ {background: "rgb(102, 102, 102)"} }>/</button>
            <button onClick={multiply} id="multiply" value="x" style={ {background: "rgb(102, 102, 102)"} }>x</button>
            <button onClick={() => {handlClick("7")}} id="seven" value="7">7</button>
            <button onClick={() => {handlClick("8")}} id="eight" value="8">8</button>
            <button onClick={() => {handlClick("9")}} id="nine" value="9">9</button>
            <button onClick={remove} id="subtract" value="-" style={ {background: "rgb(102, 102, 102)"} }>-</button>
            <button onClick={() => {handlClick("4")}} id="four" value="4">4</button>
            <button onClick={() => {handlClick("5")}} id="five" value="5">5</button>
            <button onClick={() => {handlClick("6")}} id="six" value="6">6</button>
            <button onClick={add} id="add" value="+" style={ {background: "rgb(102, 102, 102)"} }>+</button>
            <button onClick={() => {handlClick("1")}} id="one" value="1">1</button>
            <button onClick={() => {handlClick("2")}} id="two" value="2">2</button>
            <button onClick={() => {handlClick("3")}} id="three" value="3">3</button>
            <button onClick={() => {handlClick("0")}} className="jumbo" id="zero" value="0">0</button>
            <button onClick={point} id="decimal" value=".">.</button>
            <button onClick={calculate} id="equals" value="=" style={{background: "rgb(0, 68, 102)", position: "absolute", height: "130px", "bottom": "5px"}}>=</button>
        </div>
      </div>
      <div class="author">*
       Designed and Coded By <br />
       Aymen ben aziza
      </div>
      </div> 
  );
}

export default App;
