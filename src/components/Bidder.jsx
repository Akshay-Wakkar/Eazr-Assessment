import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Bidder({ handleBid, loading, bidded, priceFinder }) {
  const [open, setOpen] = useState(false);
  const [count, setCount] = useState(100)
  const transition = { type: "spring", stiffness: 2500, damping: 120, mass: 1 };
  const animations = { transition };



  return (
    <div

      className={`flex  w-fit items-center ${open ? 'bg-blue-400' : 'bg-transparent'} shadow-md rounded-full  justify-between`}
    >
      <motion.div
        layout
        {...animations}
        //animate={{ scaleY: open ? -1 : 1 }} 
        className=" flex w-14 h-12 rounded-full cursor-pointer"
      >
        <img
          onClick={() => setOpen(!open)}
          className=" rounded-full  w-14 h-12 object-cover object-center"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPOBEzLceSDTksfi51YfVYdU1AQc0_vsSctQ&usqp=CAU"
        />
      </motion.div>
      <div className="flex    w-fit text-white font-medium ">
        <motion.div
          className="flex items-center w-0 justify-between overflow-hidden"
          {...animations}
          animate={{ width: !open ? "0px" : "fit-content", }}
        >
          {bidded ? <div className="flex items-center justify-center w-full space-x-2 h-10 "><p className="text-sm w-full -ml-3">Bidded Successfully for ₹{priceFinder()}</p></div> :
            <div className="flex items-center justify-center w-fit space-x-2 h-10 ">

              <div className="flex py-0.5 flex-row h-10 w-3/5 rounded-lg relative bg-transparent">
                <button onClick={() => {
                  if (count > 100) {
                    setCount(count - 1)
                  }
                }} data-action="decrement" className=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-12 rounded-l cursor-pointer outline-none">
                  <span className="text-2xl font-thin">−</span>
                </button>

                <input type="number" className=" outline-none w-14 focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none" name="custom-input-number" onChange={(e) => setCount(parseInt(e.target.value))} value={count} />
                <button onClick={() => {
                  if (count < 10000) {


                    setCount(count + 1)
                  }
                }} data-action="increment" className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-12 rounded-r cursor-pointer">
                  <span className=" text-2xl font-thin">+</span>
                </button>
              </div>
              <button disabled={loading} onClick={() => handleBid(count)} className={`w-fit text-white text-sm font-semibold ${loading ? "bg-gray-700" : "bg-yellow-500"} cursor-pointer rounded-md py-1 px-3`}>Bid!
              </button>
            </div>}
        </motion.div>
      </div>
    </div>

  )
}