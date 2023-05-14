import React, { useEffect, useState } from "react";
import Bidder from "./Bidder"
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart, selectedId, selectItems
} from "../../redux/cartSlice";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { toast } from 'react-toastify';


export default function DogCard({ dogInfo, prevCount, goBack, goForward, dogList }) {
  const dispatch = useDispatch();
  const cartId = useSelector(selectedId)
  const cartItems = useSelector(selectItems)
  const [bidded, setBidded] = useState(false);
  const [loading, setLoading] = useState(false)

  function priceFinder() {
    if (bidded) {
      const prices = cartItems.filter((item) => {
        if (item.id == dogInfo.id) {
          return item
        }
      })
      return prices[0].price
    }
  }

  useEffect(() => {
    if (dogInfo) {
      setBidded(cartId.includes(dogInfo?.id))
    }
  }, [cartId])



  const addItemToCart = (price) => {
    if (price < 100 || price > 10000) {
      return toast.warn("Price must be within ₹100 to ₹10000")
    }
    setLoading(true)
    const dog = {
      id: dogInfo.id,
      name: dogInfo.name,
      price: price,
      url: dogInfo.url,
    };

    dispatch(addToCart(dog));
    setLoading(false)
  };

  return (<div className="flex  flex-col items-center  rounded-xl p-6  ">


    {dogList.length > 0 && dogInfo ? <>    <div className="flex w-full my-2 mx-1 justify-between">
      <div className="w-fit text-xl text-gray-600 font-medium">

        {prevCount < 1 ? null :
          <IoIosArrowBack onClick={() => goBack()} />
        }</div>
      <div className="w-fit text-xl text-gray-600 font-medium">

        {prevCount == dogList.length - 1 ? null :
          <IoIosArrowForward onClick={() => goForward()} />}
      </div>

    </div>  <img className="h-32 w-32 rounded-full object-cover ring-4 ring-gray-300" src={dogInfo.url} alt="" />

      <h1 className="mt-4 text-2xl font-semibold capitalize text-gray-700">{dogInfo.name}</h1>

      <p className="my-2 text-gray-500 ">Click on ₹ to set your Bid from ₹100 to ₹10000!</p>

      <Bidder key={dogInfo.id} handleBid={addItemToCart} loading={loading} bidded={bidded} priceFinder={priceFinder} />
    </> : <> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKnD6p0uP7Dhexd5qzP3jSRDXKFtpMQrXpOQ&usqp=CAU" className="w-full h-auto rounded-md shadow-md" /> <p className=" text-gray-500 mt-2">Let's find a pet for you!.</p> </>}

  </div>
  )
}