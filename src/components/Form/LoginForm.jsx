import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import Input from "../Input/Input";
import Button from "../Button/Button";
import Loading from "../Loading";
import useLoadingContext from "../../hooks/use-LoadingContext";

import { loginAdmin } from "../../Services/admin-api";

function LoginForm() {
  const { isLoading, setIsLoading } = useLoadingContext();
  const [value, setValue] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    try {
      const response = await loginAdmin(value);
      if (response.status === 200) {
        toast.success("Login Successful", { autoClose: 2000 });
      }
      navigate("/");
      setValue({ username: "", password: "" });
    } catch (err) {
      toast.error(err?.response?.data?.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex items-center justify-center w-full bg-center bg-cover border border-blue-400 shadow-2xl bg-loginBG md:w-4/6 md:h-3/5 h-4/6 lg:w-2/5 h-sm:h-full rounded-2xl lg:h-3/5">
        <div className="flex flex-col w-11/12 justify-evenly h-sm:h-5/6 h-xs:w-6/12 h-4/6 md:w-4/5 lg:h-3/5 backdrop-blur-md">
          <div className="flex justify-center ">
            <h1 className="w-11/12 px-2 py-1 text-4xl font-bold text-white lg:w-9/12">
              Login
            </h1>
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex items-center justify-center"
          >
            <div className="w-11/12 lg:w-9/12">
              <Input
                type="text"
                name="username"
                value={value.username}
                onChange={handleChange}
                placeholder="Enter your username"
              />

              <Input
                type="password"
                name="password"
                value={value.password}
                onChange={handleChange}
                placeholder="Enter password"
              />
              <div className="flex items-center justify-between text-white">
                <div className="flex items-center justify-center ">
                  <Input type="checkbox" className="" />
                  <p>Remember me</p>
                </div>
                <Link className="pr-3">Forget?</Link>
              </div>
              <Button
                className={`text-lg border-none text-white rounded-md bg-[#2A2D34] flex items-center justify-center ${
                  isLoading ? "cursor-not-allowed" : ""
                }`}
                disabled={isLoading}
              >
                {isLoading ? <Loading /> : "LOGIN"}
              </Button>
              <div className="flex px-4 text-base font-semibold">
                <h3 className="text-white">Don't have an account?</h3>
                <Link to="/signup" className="text-blue-500 hover:underline">
                  Sign up now
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
