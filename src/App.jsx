
import { useState } from 'react'
import './App.css'

function App() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [bmivale, setBmivalue] = useState("");
  const [erorrmessage, setErorrMessage] = useState("");

  const calculateBmi = () => {
    const isvaildheight = /^\d+$/.test(height);
    const isvaildweight = /^\d+$/.test(weight);
    const heightinmeter = parseFloat(height) / 100;
    const weightinkg = parseFloat(weight);
    if (isvaildheight && isvaildweight) {
      const bmiresult = weightinkg/ (heightinmeter * heightinmeter);
      setBmi(bmiresult.toFixed(2));
      if (bmiresult < 18.5) {
        setBmivalue("UnderWeight");
      } else if (bmiresult >= 18.5 && bmiresult < 24.9) {
        setBmivalue("Normal Weight");
      } else if (bmiresult >= 25 && bmiresult < 29.9) {
        setBmivalue("Over Wight")
      }else{
        setBmivalue("Obese")
      }
      setErorrMessage("")
    }else{
      setBmi(null);
      setBmivalue("");
      setErorrMessage("Plese enter vaild numeric values for heigth and weight")
    }

  }

  const clearall = () => {
    setHeight("");
    setWeight("");
    setBmi(null);
    setBmivalue("");
  }

  return (
    <>
      <div className="bmi-calculator">
        <div className="box"></div>
        <div className="data">
          <h1>BMI CALCULATOR</h1>
          {erorrmessage && <p className="erorr">{erorrmessage}</p>}
          <div className="input-container">
            <label htmlFor="height" >Height (cm):</label>
            <input type="text" id='height' value={height}
             onChange={(e) => setHeight(e.target.value)
            }/>
          </div>
          <div className="input-container">
            <label htmlFor="Weight" >Weight (kh):</label>
            <input type="text" id='Weight' value={weight} 
            onChange={(e) => setWeight(e.target.value)
            } />
          </div>
          <button onClick={calculateBmi}>Calculate BMI</button>
          <button onClick={clearall}>Clear All</button>
          {bmi !== null && (<div className="resualt">
            <p>Your BMI is {bmi}</p>
            <p>Status : {bmivale}</p>
          </div>)}
        </div>
      </div>
    </>
  )
}

export default App
