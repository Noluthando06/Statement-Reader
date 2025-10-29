// src/App.tsx
import { RouterProvider } from "react-router-dom";
import { router } from "./app/router";

export default function App() {
  return <RouterProvider router={router} />;
}

import React {useState} from "react";
import Step3 from ".Step3";
import step4 from ".step4";
import ProgressBar from ".ProgressBar";

const App:React.FC = () => {
  const[step,setStep]=useState(3);

  const nextStep = () => setStep((prev) => Math.min(prev + 1,6));
  const prevStep = () => setStep((prev) => Math.max(prev - 1,3));

  return(
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#0f2e2f] text-white px-4">

      {/*Logo*/}
      <div className="flex items-center mb-6 mt-4">
        <div className="bg-white text-blue-600 font-bold px-3 py-1 rounded-full">
          Finlytics
        </div>
      </div>

      {/*Progress Bar*/}

    <ProgressBar step={step}/>
    
    {/*Render step content*/}
    <div className="w-full max-w-2xl bg-[#1e3d3e] p-8 rounded-2xl shadow-lg">
      {step === 3 && <Step3/>}
      {step === 4 && <step4/>}

      {/*Navigation Buttons*/}
      <div className="flex justify-between mt-6">
        <button onClick={prevStep}
        disabled={step === 3}
        className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg">Back</button>

        <button onClick={nextStep}
        className="bg-green-600 hover:bg-green-500 px-4 py-2 rounded-lg">Next</button>

      </div>

      <p className="text-sm text-gray-300 mt-4 text-right">Step {step} - 6</p>

    </div>
    </div>
  );
};

export default App;
