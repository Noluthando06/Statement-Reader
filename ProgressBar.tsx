import React from "react";

interface ProgressProps{
    step:number;
}

const ProgressBar:React.FC<ProgressProps> = ({ step }) =>{
    const progressPercent  = ((step-3)/3)*100;

    return(
        <div className="w-full max-w-2xl bg-gray-800 h-2 rounded-full mb-6">
            <div className="bg-yellow-400 h-2 rounded-full transition-all duration-500" style={{width:${progressPercent}%}}>

            </div>
        </div>
    );
};

export default ProgressBar;
