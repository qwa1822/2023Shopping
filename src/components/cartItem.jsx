import { useDispatch, useSelector } from "react-redux";
import { FaWindowClose } from "react-icons/fa";
import {
  decrementQuantity,
  deleteItem,
  incrementQuantity,
  resetCart,
} from "../redux/bazarSlice";
import { toast, ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";
function CartItem() {
  const productData = useSelector(state => state.bazar.productData);
  const dispatch = useDispatch();

  return (
    <div className="w-2/3 px-10">
      <div className="w-full">
        <h2 className="font-titleFont text-base">Shopping Cart</h2>
      </div>
      <div>
        {productData.map(item => (
          <div
            key={item.id}
            className="flex items-center justify-between gap-6 mt-6"
          >
            <div className="flex items-center gap-2">
              <FaWindowClose
                onClick={() =>
                  dispatch(deleteItem(item)) &
                  toast.success(`${item.title} Deleted`)
                }
                className="hover:text-red-500 text-xl text-gray-500 cursor-pointer duration-300"
              />
              <img src={item.image} className="w-32 h-32 object-cover" alt="" />
            </div>
            <h2 className="w-52">{item.title}</h2>
            <p className="w-10">${item.price}</p>

            <div>
              <div className="flex gap-4">
                <p className="text-sm">Quantity</p>
                <div className="flex gap-4 items-center text-sm font-semibold">
                  <button
                    onClick={() => dispatch(decrementQuantity(item))}
                    className="hover:bg-gray-700 rounded-xl hover:text-white cursor:pointer duration-300 text-lg flex items-center border h-5 font-normal active:bg-black"
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => dispatch(incrementQuantity(item))}
                    className="hover:bg-gray-700 rounded-xl hover:text-white text-lg cursor:pointer duration-300 flex items-center border-[1px] h-5 active:bg-black "
                  >
                    +
                  </button>
                </div>
                <p>${Math.floor(item.quantity * item.price)}</p>
              </div>
            </div>

            <ToastContainer
              position="top-left"
              autoClose={1000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            />
          </div>
        ))}
      </div>
      <button
        onClick={() => dispatch(resetCart(productData))}
        className="mt-5 mx-auto hover:text-white-500 hover:bg-pink-500 duration-300 px-20 py-5 flex justify-center items-center border-[1px] cursor:pointer rounded-md bg-black text-white "
      >
        Reset
      </button>
      <Link to="/">
        <span className="mt-3 block ml-3 text-pink-500 duration-300 hover:text-black">
          &larr; go shopping
        </span>
      </Link>
    </div>
  );
}

export default CartItem;
