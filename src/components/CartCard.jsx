
import { IoClose } from "react-icons/io5";
export default function CartCard({ item, removeItemFromCart }) {
  return (
    <li className="flex w-full py-3  px-4">
      <div className="flex items-center justify-center w-20 h-20 rounded-md border border-gray-200  ">
        <img
          src={item.url}
          alt=""
          className=" items-center w-20 h-20 object-cover object-center  rounded-md"
        />
      </div>

      <div className="ml-4 flex w-full flex-col ">
        <div>
          <div className="flex justify-between text-base font-medium capitalize text-gray-700">
            <h3>{item.name}</h3>

            <button
              onClick={() =>
                removeItemFromCart({
                  id: item.id,
                })
              }
              className="font-medium text-gray-700 text-lg"
            >
              <IoClose />
            </button>
          </div>

        </div>
        <div className="flex  items-end justify-between text-sm">

          <div className="flex w-fit">
            <p>₹ {item.price}</p>
          </div>
        </div>
      </div>
    </li>

  )
}