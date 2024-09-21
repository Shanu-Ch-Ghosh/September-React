import React, { useState } from "react";

const Calculator = () => {
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [calculation, setCalculation] = useState(null);
  const [validate, setValidate] = useState("");

  const handleValidation = () => {
    if (value1 === "" || value2 === "") {
      setValidate("Error!");
      setCalculation("Number cannot be empty!"); 
      return false;
    }
    if (isNaN(value1) || isNaN(value2)) {
      setValidate("Error!");
      setCalculation("Inputs must be valid numbers!");
      return false;
    }
    setValidate("Success!");
    return true;
  };

  const handleCalculation = (operation) => {
    if (!handleValidation()) return;

    let result;
    const num1 = parseFloat(value1);
    const num2 = parseFloat(value2);

    switch (operation) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        if (num2 === 0) {
          setValidate("Cannot divide by zero!");
          setCalculation(null); 
          return;
        }
        result = num1 / num2;
        break;
      default:
        return;
    }

    setCalculation("Your Result is " + result);
    setValue1("");
    setValue2("");
    setValidate("Success!");
  };

  return (
    <div className="w-3/12 m-auto border mt-[160px] text-center p-6 rounded-lg shadow-lg shadow-violet-700" >
      <h1 className="m-3 text-3xl font-bold">React Calculator</h1>
      <div className="flex flex-col space-y-4 justify-center items-center m-6">
        <input
          onChange={(e) => setValue1(e.target.value)}
          value={value1}
          className="border w-[300px] p-3 rounded-lg text-xl border-black border-2"
          type="text"
          placeholder="Enter Your Num1"
        />
        <input
          onChange={(e) => setValue2(e.target.value)}
          value={value2}
          className="border w-[300px] p-3 rounded-lg text-xl border-black border-2"
          type="text"
          placeholder="Enter Your Num2"
        />
      </div>
      <div className="flex justify-center m-4 justify-evenly space-x-2">
        {['+', '-', '*', '/'].map((op) => (
          <button
            key={op}
            onClick={() => handleCalculation(op)}
            className="border-2 border-sky w-16 h-14 text-2xl bg-stone-700 text-white rounded-lg"
          >
            {op}
          </button>
        ))}
      </div>
      <div className={`text-xl font-bold ${validate === "Error!" ? "text-red-600" : "text-blue-600"} m-3`}>{validate}</div>
      <div className="text-2xl font-bold m-4 text-stone-800">
        {calculation !== null ? calculation : null}
      </div>
    </div>
  );
};

export default Calculator;
