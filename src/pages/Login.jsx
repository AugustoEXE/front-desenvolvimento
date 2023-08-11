import { useState } from "react"
import { sendLoginData } from "../services/login";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../components/global/AuthProvider";

const Login = () => {
  const navigate = useNavigate()
  const {setAuth} = useAuth()
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const handleData = (event) => {
    const { name, value } = event.target;

    setUserData((originalData) => ({
      ...originalData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(userData)
    sendLoginData({ ...userData })
      .then(() => setAuth(true),navigate('/user'))
      .catch(err => console.error(err))

  };





return (
  <>
    <div className="h-screen absolute bottom-0 right-0 w-1/2 bg-laranjinha flex ">
      <div className="bg-verdinho w-3/4 h-3/4 mx-auto my-auto rounded-3xl shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]">
        <h2 className="text-6xl text-zinc-300 font-bold text-center mt-10">
          login
        </h2>
        <div className="text-center ">
          <form onSubmit={handleSubmit}>
            <div className="mt-10">
              <label
                htmlFor=""
                className="block text-left w-3/4 m-auto text-creminho text-xl"
              >
                E-mail:
              </label>
              <input
                type="email"
                name="email"
                className="bg-verdinho-escurinho rounded-full text-creminho text-center p-1 h-9 w-3/4"
                value={userData.email}
                onChange={handleData}
              />
            </div>
            <div className="mt-10">
              <label
                htmlFor=""
                className="block text-left w-3/4 m-auto text-creminho text-xl"
              >
                Senha:
              </label>
              <input
                type="password"
                name="password"
                className="bg-verdinho-escurinho rounded-full text-creminho text-center p-1 h-9 w-3/4"
                value={userData.password}
                onChange={handleData}
              />
            </div>

            <div className="mt-10">
              <button className="rounded-full bg-laranjinha hover:bg-laranjinha-escurinho text-white w-4/6 py-2 ">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>

    <div className="h-screen absolute bg-verdinho bottom-0 left-0 w-1/2 flex align-middle justify-center">
      <div className="backdrop-blur-sm w-full flex align-middle text-center my-auto">
        <h1 className="text-8xl font-belanosima text-creminho  text-center font-bold border-dashed border-4 border-laranjinha p-3 shadow-md">
          Virtual Library System
        </h1>
      </div>
    </div>
  </>
);
};

export default Login;
