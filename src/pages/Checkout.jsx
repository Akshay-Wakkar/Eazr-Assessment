import { useEffect, useState } from "react";
import CartCard from "../components/CartCard"
import SummaryCard from "../components/SummaryCard"
import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

import {
  removeFromCart, selectItems, selectTotal
} from "../../redux/cartSlice"


export default function Checkout() {
  const cartitems = useSelector(selectItems);
  const total = useSelector(selectTotal);
  const [cartList, setCartList] = useState(cartitems);
  useEffect(() => {

    setCartList(cartitems);

  }, [cartitems]);

  const dispatch = useDispatch();
  const removeItemFromCart = (data) => {
    dispatch(removeFromCart({ id: data.id }));
  };

  return (
    <div className="flex flex-col md:flex-row w-full h-full justify-between p-4">
      <div className="flex flex-col md:w-full md:max-w-[70%] mt-6  py-1 rounded-md bg-white  shadow-md">
        <div className="flex-root overflow-y-scroll  h-96" id="journal-scroll">
          {cartList.length > 0 ?
            <ul role="list" className=" divide-y divide-gray-200 p-3">
              {cartList.map((item) => {
                return <CartCard item={item} key={item.id} removeItemFromCart={removeItemFromCart} />
              })}

            </ul> : <div className="flex h-full flex-col w-full justify-center items-center px-3"> <p className="text-center text-gray-600 font-md">Your Cart is empty try finding some new Dogs!</p>
              <Link to="/"><button type="button" className="m-1 h-10 transform cursor-pointer rounded-md bg-blue-500 px-4 py-2 text-white transition-colors duration-300 focus:outline-none"> Find Dogs</button></Link> </div>}

        </div>
      </div>

      <SummaryCard total={total} />
    </div>
  )
}