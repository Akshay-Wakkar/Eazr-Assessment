import { Link } from "react-router-dom";
import { IoIosCart } from "react-icons/io";

import { selectItems } from "../../redux/cartSlice";
import { useSelector } from "react-redux";

export default function Header() {

  const cartList = useSelector(selectItems);

  return (
    <div className="flex justify-between items-center w-full h-20 px-5 py-3">
      <Link to="/">
        <div className="flex ">
          <img
            className="h-7 w-auto"
            src="https://www.seekpng.com/png/full/125-1256728_shop-domain-logo-shop-domain-logo.png"
            alt="logo"
          />
        </div>
      </Link>
      <div className="flex items-center w-fit justify-center space-x-4">
        <Link to="/checkout">
          <div className="relative flex w-fit  items-center justify-center">
            <div className="text-3xl text-gray-600 font-medium">
              <IoIosCart />
            </div>
            <p className="absolute top-0 -mt-0.5 left-4 bg-green-500 rounded-full px-1  text-center text-xs font-semibold   text-white ">
              {cartList.length}
            </p>

          </div>
        </Link>

      </div>
    </div>
  )
}