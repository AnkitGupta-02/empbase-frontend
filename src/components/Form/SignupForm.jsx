import {React, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import Button from "../Button/Button";
import Input from "../Input/Input";
import Loading from "../Loading.jsx";
import useLoadingContext from "../../hooks/use-LoadingContext.jsx";

import { createAdmin } from "../../Services/admin-api";


function SignupForm() {
  const navigate = useNavigate();
  const {isLoading,setIsLoading} = useLoadingContext();
  const [value, setValue] = useState({ name: "", username: "", password: "" });

  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    try {
      const response = await createAdmin(value);
      if (response.status === 201) {
        toast.success("Created Sucessfully", { autoClose: 2000 });
      }
      navigate("/login");
      setValue({ name: "", username: "", password: "" });
    } catch (err) {
      toast.error(err?.response?.data?.message);
    }finally{
      setIsLoading(false);
    }
  };
  return (
    <div className="flex items-center justify-center w-full h-screen border border-black">
      <div className="flex items-center justify-center w-full bg-center bg-cover border border-blue-400 shadow-2xl h-xs:h-full bg-signupBG md:w-4/6 md:h-full h-3/6 lg:w-5/12 lg:h-3/5 rounded-2xl">
        <div className="flex flex-col justify-center w-5/6 lg:h-4/6 h-5/6 md:w-4/6 h-xs:w-3/5 backdrop-blur-md gap-y-4">
          <div className="flex justify-center ">
            <h1 className="w-11/12 px-2 py-1 text-2xl font-bold text-white md:w-9/12">
              Sign Up
            </h1>
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex items-center justify-center"
          >
            <div className="w-11/12 md:w-9/12">
              <Input
                type="text"
                name="name"
                value={value.name}
                onChange={handleChange}
                placeholder="Enter your Name"
                className=""
              />
              <Input
                type="text"
                name="username"
                value={value.username}
                onChange={handleChange}
                placeholder="Enter your username"
                className=""
              />
              <Input
                type="password"
                name="password"
                value={value.password}
                onChange={handleChange}
                placeholder="Enter password"
                className=""
              />
              <Button className={`bg-[#2A2D34] text-white border-none rounded-md text-lg flex items-center justify-center ${isLoading ? "cursor-not-allowed " : ""}`} disabled={isLoading}>
                {isLoading ? <Loading /> : "SIGN UP"}
              </Button>

              <div className="flex px-4 text-base font-semibold gap-x-2">
                <h3 className="text-white ">Have an account ?</h3>
                <Link to="/login" className="text-blue-500">
                  Login
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignupForm;
