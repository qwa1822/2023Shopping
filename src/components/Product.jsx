import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/bazarSlice";
import { toast } from "react-toastify";
function Product() {
  const location = useLocation();

  const dispatch = useDispatch();
  const [baseQty, setBaseQty] = useState(1);
  const [User, setUser] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    const { item } = location.state;

    setUser({ ...item });
  }, []);

  const { price } = User;
  return (
    <div>
      <div className="max-w-screen-xl mx-auto my-10 flex gap-10">
        <div className="w-2/5 relative">
          <img
            src={User.image}
            className="w-full h-[550px] object-cover"
            alt="productImage"
          />
        </div>
        <div className="w-3/5 flex flex-col justify-center gap-12">
          <div>
            <h2 className="text-4xl font-semibold">{User.title}</h2>
            <div className="padding-[8px] mt-4">
              <p className="line-through text-gray-400">
                oldPrice: {price * 2}$
              </p>
              <p className=" text-gray-500">Price {User.price}$</p>
            </div>
          </div>

          <div className="flex gap-3 items-center text-base">
            <div className="flex gap-3">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p className="text-gray-400 text-xs">1 Customer Review</p>
          </div>
          <p className="text-gray-400 text-sm">{User.description}</p>

          <div>
            <div className="flex gap-4">
              <p className="text-sm">Quantity</p>
              <div className="flex gap-4 items-center text-sm font-semibold">
                <button
                  onClick={() => setBaseQty(baseQty === 1 ? 1 : baseQty - 1)}
                  className="hover:bg-gray-700 rounded-xl hover:text-white cursor:pointer duration-300 text-lg flex items-center border h-5 font-normal active:bg-black"
                >
                  -
                </button>
                <span>{baseQty}</span>
                <button
                  onClick={() => setBaseQty(baseQty + 1)}
                  className="hover:bg-gray-700 rounded-xl hover:text-white text-lg cursor:pointer duration-300 flex items-center border-[1px] h-5 active:bg-black "
                >
                  +
                </button>
              </div>
            </div>
            <button
              onClick={() =>
                dispatch(
                  addToCart({
                    id: User.id,
                    title: User.title,
                    description: User.description,
                    price: User.price,
                    image: User.image,
                  }),
                  navigate("/"),
                  toast.success(`${User.title}을 담았습니다! `)
                )
              }
              className="bg-black text-white w-[130px] justify-center items-center flex rounded-xl mt-5"
            >
              add To Cart
            </button>
          </div>
          <p className="text-gray-400 text-base">Category: {User?.category}</p>
        </div>
      </div>
    </div>
  );
}

export default Product;
