import React from "react";

const step4:React.FC = () =>{
    return(
        <div>
            <h1 className="text-2xl font-bold mb-4">Powerful Filtering Tools </h1>
            <p className="text-gray-300 mb-6">
                Once your data is loaded, you can filter transactions in multiple ways:
            </p>
            <p>
                <strong>Category:</strong>Filter by Money In, Money Out or Other
            </p>
        </div>

        {/*Date Range Filter*/}
        <div className="bg-[#244b4c] rounded-xl p-4 flex items-start space-x-2">
                    <div className="bg-orange-400 w-3 h-3 mt-1 rounded-full">
                    <p>
                        <strong>Date Range:</strong>Select specific date ranges
                    </p>
        </div>

        {/*Tip Box*/}
        <div className="bg-[#163738] border border-blue-800 rounded-xl p-4">
            <p className="text-blue-300">
                <strong>Pro Tip:</strong>Combine multiple filters for precise results!
            </p>
        </div>
</div>


    );

};

export default step4;
