import { logolight, payment } from "../assets";

import {
  FaGithub,
  FaTwitterSquare,
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaHome,
  FaUserAlt,
  FaPaypal,
  FaFirstOrder,
} from "react-icons/fa";

function Footer() {
  return (
    <div className="bg-black  text-[#949494] py-20 font-titleFont">
      <div className="max-w-screen-xl mx-auto grid grid-cols-4">
        <div className="flex flex-col gap-7 ">
          <img className="w-16 bg-black" src={logolight} alt="" />
          <p className="text-white text-sm tracking-wide">@React</p>
          <img className="w-56" src={payment} alt="" />
          <div className="flex gap-3 text-lg text-gray-400">
            <FaGithub className="hover:text-white duration-300 cursor-pointer" />
            <FaTwitterSquare className="hover:text-white duration-300 cursor-pointer" />
            <FaFacebook className="hover:text-white duration-300 cursor-pointer" />
            <FaInstagram className="hover:text-white duration-300 cursor-pointer" />
            <FaYoutube className="hover:text-white duration-300 cursor-pointer" />
            <FaHome className="hover:text-white duration-300 cursor-pointer" />
          </div>
        </div>
        <div className="text-base flex flex-col gap-4">
          <h2 className="text-2xl font-semibold text-white mb-4">Locate use</h2>

          <p>Seoul</p>
          <p>Phone:010-3179-7004</p>
          <p>email:asdzxc1822@naver.com</p>
          <p>email:asdzxc1822@naver.com</p>
        </div>

        <div className>
          <h2 className="mb-4">Profile</h2>

          <p className="flex items-center gap-4 mb-4 cursor-pointer gap-4 hover:text-white duration-300">
            <span>
              <FaUserAlt />
            </span>
            My Account
          </p>
          <p className="flex items-center hover:text-white duration-300 cursor-pointer gap-4 mb-4">
            <span>
              <FaPaypal />
            </span>
            CheckOut
          </p>
          <p className="flex items-center gap-4 mb-4 cursor-pointer gap-4 hover:text-white duration-300">
            <span>
              <FaFirstOrder />
            </span>
            order Tracking
          </p>
          <p className="flex items-center gap-4 mb-4 cursor-pointer gap-4 hover:text-white duration-300">
            <span>
              <FaHome />
            </span>
            My Home
          </p>
        </div>
        <div className="flex flex-col justify-center">
          <input
            className="bg-transparent border px-4 py-2 text-sm"
            placeholder="e-mail"
            type="text"
          />
          <button>SubScribe</button>
        </div>
      </div>
    </div>
  );
}

export default Footer;
