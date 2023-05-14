import React from "react";

export default function SummaryCard({ total }) {




  return (
    <div className="flex md:mx-3 flex-col w-full md:w-[40%] pb-3">


      <div className="mt-6 mx-4 md:mr-4 md:ml-0 bg-white shadow-md  p-5 rounded-md ">
        <div className="flex flex-col w-full">
          <h3 className="text-xl  font-semibold leading-5 text-blue-400">
            Summary
          </h3>
          <div className="flex justify-center items-center w-full my-2 flex-col border-gray-200 border-b">
            <div className="flex justify-between w-full my-4">
              <p className="text-base  leading-4 text-gray-800">Subtotal</p>

              <p className="text-base  leading-4 text-gray-600">₹{total}.00</p>
            </div>
            <div className="flex justify-between items-center w-full mb-4">
              <p className="text-base  leading-4 text-gray-800">Service Tax</p>

              <p className="text-base  leading-4 text-gray-600">₹0.00</p>
            </div>
          </div>
          <div className="flex justify-between items-center w-full mt-2 mb-4">
            <p className="text-base  font-semibold leading-4 text-gray-800">
              Total
            </p>

            <p className="text-base  font-semibold leading-4 text-gray-600">
              ₹{total}.00
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}


