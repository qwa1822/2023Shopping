import { githublogo, google } from "../assets";
import { toast, ToastContainer } from "react-toastify";
import {
  getAuth,
  signInWithPopup,
  GithubAuthProvider,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../redux/bazarSlice";
function Login() {
  const auth = getAuth();
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const GoogleLogin = e => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then(result => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        dispatch(
          addUser({
            id: user.id,
            name: user.displayName,
            email: user.email,
            image: user.photoURL,
          })
        );
        setTimeout(() => {
          navigate("/");
        }, 1000);
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(error);
        // ...
      });
  };

  const handleSignOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        toast.success("로그아웃완료!");
        dispatch(removeUser());
        navigate("/");
      })
      .catch(error => {
        console.log(error);
      });
  };

  const gitHubLogin = e => {
    const auth = getAuth();
    const provider = new GithubAuthProvider();

    signInWithPopup(auth, provider)
      .then(result => {
        // This gives you a GitHub Access Token. You can use it to access the GitHub API.
        const credential = GithubAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;

        const user = result.user;
        dispatch(
          addUser({
            id: user.id,
            name: user.displayName,
            email: user.email,
            image: user.photoURL,
          })
        );
        setTimeout(() => {
          navigate("/");
        }, 1000);
      })
      .catch(error => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GithubAuthProvider.credentialFromError(error);

        console.log(error);
        // ...
      });
  };
  return (
    <div className="w-full flex flex-col items-center justify-center gap-10 py-20">
      <div className="w-full  flex justify-center items-center gap-10 ">
        <div
          onClick={gitHubLogin}
          name="github"
          className="text-base w-60 h-12 tracking-wide border-[1px] cursor:pointer border-gary-400 rounded-md flex items-center justify-center gap-2 hover:borer-blue-500 cursor:pointer duration-300"
        >
          <img className="w-8" src={githublogo} alt="githubLogo" />
          <span className="text-base text-gray-800">Sign in With Github</span>
        </div>
        <button
          onClick={handleSignOut}
          className="bg-black text-white text-base rounded-md px-3 py-2 cursor:pointer duration-300 hover:bg-pink-500"
        >
          {" "}
          Sign Out
        </button>
      </div>
      <div className="w-full flex justify-center items-center gap-10">
        <div
          onClick={GoogleLogin}
          className="text-base w-60 h-12 tracking-wide border-[1px] border-gary-400 rounded-md flex items-center justify-center gap-2 hover:borer-blue-500 cursor:pointer duration-300"
        >
          <img className="w-8" src={google} alt="githubLogo" />
          <span className="text-base text-gray-800">Sign in With Google</span>
        </div>
        <button
          onClick={handleSignOut}
          className="bg-black text-white text-base rounded-md px-3 py-2 cursor:pointer duration-300 hover:bg-pink-500"
        >
          {" "}
          Sign Out
        </button>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
    </div>
  );
}

export default Login;
