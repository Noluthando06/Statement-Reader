import React from "React";

const Step3:React.FC = () =>{
    return(
        <div>
            <h1 className="text-2xl font-bold mb-4">Understanding Categories</h1>
            <p className="text-gray-300 mb-6">
                Finlytics automatically categorizes your transactions into three types:
            </p>

            {/*Category cards*/}
            <div className="space-y-4">
                {/*Money in*/}
                <div className="bg-green-900 border border-green-700 rounded-xl p-4">
                    <h2 className="text-lg font-semibold text-green-300">Money In</h2>
                    <p>Positive amounts like salary,refunds and deposits</p>
                    <p className="text-green-400 text-sm mt-1">
                        Example: R15 000 (Salary)
                    </p>
                </div>

                {/*Money Out*/}
                <div className="bg-red-900 border border-red-700 rounded-xl p-4">
                    <h2 className="text-lg font-semibold text-red-300">Money Out</h2>
                    <p>Negative amounts like payments,purchases and withdrawals</p>
                    <p className="text-red-400 text-sm mt-1">
                        Example:R1 200 (Groceries)
                    </p>
                </div>

                {/*Other*/ }
                <div className="bg-yellow-900 border birder-yellow-700 rounded-xl p-4">
                    <h2 className="text-lg font-semibold text-yellow-300">Other</h2>
                    <p>Special transactions like bank fees and interest</p>
                    <p className="text-yellow-400 text-sm mt-1">
                        Example: R50 (Bank Fees)
                    </p>
                </div>
            </div>
        </div>
    );
};
export default Step3;
