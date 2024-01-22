import { useSelector } from "react-redux";
import CartItem from "../components/cartItem";
import { useState, useEffect } from "react";
import StripeCheckout from "react-stripe-checkout";
import { payment } from "../assets";
const Cart = () => {
  const productDate = useSelector(state => state.bazar.productData);

  const newItem = productDate.map(item => item.quantity * item.price);
  // let userInfo = useSelector(state => state.bazar.userInfo);
  const [paynow, setNow] = useState(false);
  const handleCheckout = () => {
    setNow(prev => !prev);
  };
  const [totalAmt, setTotalAmt] = useState(0);
  useEffect(() => {
    let price = 0;
    productDate.map(item => {
      price += item.quantity * item.price;
      return price;
    });
    setTotalAmt(price);
  }, [productDate]);
  console.log(newItem);
  return (
    <div>
      <img
        className="w-full h-60 object-cover
      "
        src="data:image/jpeg;base64,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"
        alt=""
      />
      <div className="max-w-scrren-xl mx-auto py-20 flex">
        <CartItem />

        <div className="w-1/3 bg-[#fafafa] py-6 px-4">
          <div>
            <h2 className="text-2xl font-medium">Cart totals</h2>
            <p className="flex items-center gap-4 text-base">
              SubTotal
              <span className="font-titleFont font-bold text-lg">$200</span>
            </p>
            <p className="flex items-start gap-4 text-base">
              Shopping
              <span>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Officiis dolorum, laborum cupiditate cum soluta omnis aut
                voluptates necessitatibus temporibus, delectus dignissimos
                incidunt dolor iste odit. Libero eaque culpa commodi
                voluptatibus.
              </span>
            </p>
            <p className="flex  font-titleFont justify-between mt-6">
              Total{" "}
              <span className="text-2xl font-bold">
                {productDate?.length > 0 ? Math.floor(totalAmt) : ""}
              </span>
            </p>
            <button
              onClick={handleCheckout}
              className="border-[1px] flex justify-center rounded-xl p-4 bg-black mt-4 text-white w-full text-center"
            >
              proceed to checkout
            </button>
            {paynow && (
              <div className="mx-auto mt-10 w-[200px] flex justify-center items-center my-auto">
                <StripeCheckout
                  className="hover:bg-pink-500"
                  token={payment}
                  amount={totalAmt * 100}
                  label="결제하기"
                  stripeKey="pk_test_51OUjnOIcxDGZyAYmnP2nVGwPi8se4Kg38KClYMPFhMsDWfFBexr2hbXV2EruPpMoVExpQqKxGh2xRKMWkfQbzpzk00O3ZpvOfW"
                  name="Shopping Online Card"
                  description={`Your Payment amount is ${totalAmt}`}
                ></StripeCheckout>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
