import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../redux/bazarSlice";
import { toast, ToastContainer } from "react-toastify";
function ProductcratCard({ productItem }) {
  const {
    id,
    image,
    price,
    description,
    category,
    title,

    ...rating
  } = productItem;
  const dispatch = useDispatch();

  const _id = title;
  const idString = _id => {
    return String(_id).toLowerCase().split(" ").join("");
  };
  const rootId = idString(_id);

  const navigate = useNavigate();
  const handleDatails = () => {
    navigate(`/product/${rootId}`, {
      state: {
        item: productItem,
      },
    });
  };

  return (
    <div className="group ml-10">
      <div
        onClick={handleDatails}
        className="w-full h-96 cursor-pointer overflow-hidden"
      >
        <img
          className="w-full md:object-cover sm:object-none h-full group-hover:scale-110 duration-500"
          src={image}
          alt=""
        />
      </div>
      <div>
        <div className="w-full border-[1px] rounded-xl  px-2 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="font-titleFont text-base font-bold">
                {title?.length > 20 ? title.slice(0, 20) : title}
              </h2>
            </div>
            <div className="flex gap-2 relative overflow-hidden">
              <div className="text-sm relative w-28 gap-2 flex justify-end trasnform group-hover:translate-x-24 transitio-transform duration-500">
                <p className="line-through text-gray-500">{price * 2}$</p>
                <p className=" text-gray-500">{price}$</p>
              </div>
              <p
                onClick={() =>
                  dispatch(
                    addToCart({
                      id,
                      title,
                      image,
                      price,

                      description,
                    }),
                    toast.success(`${title}을 담았습니다!`)
                  )
                }
                className="absolute z-20 w-[100px] group-hover:translate-x-0 hover:text-gray-900 flex justify-center items-center gap-1 top-0 transform -translate-x-32 duration-500 cursor-pointer"
              >
                add To Cart
              </p>
            </div>
          </div>
          <div className="top-2 text-gray-400">{category}</div>
        </div>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}

export default ProductcratCard;
