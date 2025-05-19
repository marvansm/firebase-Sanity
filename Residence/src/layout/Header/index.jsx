import React, { useState } from "react";
import { navbar } from "../../constant/navbar";
import {
  UserCircle2Icon,
  LayoutPanelLeftIcon,
  XSquareIcon,
} from "lucide-react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../lib/firebase";
const Header = () => {
  const ValidationShcema = Yup.object().shape({
    username: Yup.string().required("Username is required"),
    password: Yup.string().required("Enter the password"),
    retypepassword: Yup.string()
      .required("Passwor must be same")
      .oneOf([Yup.ref("password"), null]),
    email: Yup.string()
      .required("You must Enter Email")
      .email("Email is invalid"),
  });
  const InitialValue = {
    username: "",
    password: "",
    email: "",
    retypepassword: "",
  };
  const [OpenModal, SetOpenModal] = useState(false);
  const [Type, SetType] = useState("login");
  const formik = useFormik({
    initialValues: InitialValue,
    validationSchema: ValidationShcema,
    onSubmit: (value) => {
      console.log(value);
      const Payload = {
        username: value.username,
        password: value.password,
        email: value.email,
        retypepassword: value.retypepassword,
      };
      createUserWithEmailAndPassword(
        auth,
        Payload.email,
        Payload.password,
        Payload.retypepassword,
        Payload.username
      ).then((res) => {
        console.log(res);
      });
      signInWithEmailAndPassword(auth, Payload.email, Payload.password).then(
        (res) => {
          sessionStorage.setItem("toke", res._tokenResponse.idToken);
        }
      );
    },
  });

  return (
    <div>
      <div className="container mx-auto px-7">
        <div className="nav flex items-center justify-between main-font">
          <div className="left">
            <img
              src="https://denver-residence.b-cdn.net/wp-content/uploads/2023/08/mont.png"
              alt=""
            />
          </div>
          <div className="mid">
            <ul className="flex items-center gap-10  ">
              {navbar &&
                navbar.map((item, index) => (
                  <li
                    key={index}
                    className="text-[#302f30] font-medium text-[15px] leading-[100px] hover:text-[#bc8664] transition duration-300 cursor-pointer ease-in-out"
                  >
                    {item.title}
                  </li>
                ))}
            </ul>
          </div>
          <div className="right">
            <ul className="flex items-center gap-5">
                <li className="text-[#302f30] font-medium text-[15px] leading-[100px] hover:text-[#bc8664] transition duration-300 cursor-pointer ease-in-out flex items-center gap-1.5">
                  Admin <LayoutPanelLeftIcon />
                </li>
              <li
                onClick={() => SetOpenModal(true)}
                className="text-[#302f30] font-medium text-[15px] leading-[100px] hover:text-[#bc8664] transition duration-300 cursor-pointer ease-in-out"
              >
                <UserCircle2Icon />
              </li>
            </ul>
          </div>
        </div>
      </div>
      {OpenModal && (
        <div className="w-full h-full fixed bg-[#00000085] z-[9999] inset-0 flex items-center justify-center ">
          <div className="bg-white w-[700px] h-[600px] rounded-2xl relative">
            <div className="icon absolute top-2.5 right-2.5">
              <XSquareIcon onClick={() => SetOpenModal(false)} />
            </div>
            {Type === "login" ? (
              <div className="grid grid-cols-2 h-full w-full  ">
                <div className="left relative  ">
                  <img
                    className="w-full h-full object-cover rounded-l-2xl"
                    src="https://denver-residence.b-cdn.net/wp-content/uploads/2023/05/home-section-2.jpeg"
                    alt=""
                  />
                  <div className="text absolute bottom-[45px] left-[45px] ">
                    <h2 className="text-[31px] font-medium leading-[39px] text-white w-[300px]">
                      Welcome to Denver Real Estate
                    </h2>
                  </div>
                </div>
                <div className="right mt-30">
                  <div className="max-w-xl p-8 bg-white rounded ">
                    <h2 className="text-[23px] font-medium leading-[30px]">
                      Sign into your account
                    </h2>
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        formik.handleSubmit();
                      }}
                      action=""
                    >
                      <div className="mb-3">
                        <input
                          value={formik.values.email}
                          onChange={formik.handleChange}
                          type="email"
                          name="email"
                          id="email"
                          placeholder="Email"
                          className="w-full border border-gray-300 py-2 pl-3 rounded-2xl mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600"
                        />
                        {formik.touched.email && formik.errors.email && (
                          <p className="text-red-500 text-sm mt-2">
                            {formik.errors.email}
                          </p>
                        )}
                      </div>
                      <div>
                        <input
                          value={formik.values.password}
                          onChange={formik.handleChange}
                          type="password"
                          name="password"
                          id="password"
                          placeholder="Password"
                          className="w-full border border-gray-300 py-2 pl-3 rounded-2xl mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600"
                        />
                        {formik.touched.password && formik.errors.password && (
                          <p className="text-red-500 text-sm mt-2">
                            {formik.errors.password}
                          </p>
                        )}
                      </div>
                      <button
                        type="submit"
                        className="cursor-pointer py-2 px-4 block mt-3 bg-[#bc8664] text-white font-bold w-full text-center rounded-2xl"
                      >
                        Login
                      </button>
                    </form>
                    <div className="mt-26">
                      <ul className="flex items-center justify-between font-medium text-[14px] cursor-pointer ">
                        <li
                          onClick={() => SetType("register")}
                          className="hover:text-[#bc8664] duration-300"
                        >
                          Register Here !
                        </li>
                        <li className="hover:text-[#bc8664] duration-300">
                          Forgot Password ?
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-2 h-full w-full  ">
                <div className="left relative  ">
                  <img
                    className="w-full h-full object-cover rounded-l-2xl"
                    src="https://denver-residence.b-cdn.net/wp-content/uploads/2023/05/home-section-2.jpeg"
                    alt=""
                  />
                  <div className="text absolute bottom-[45px] left-[45px] ">
                    <h2 className="text-[31px] font-medium leading-[39px] text-white w-[300px]">
                      Welcome to Denver Real Estate
                    </h2>
                  </div>
                </div>
                <div className="right mt-30">
                  <div className="max-w-xl p-8 bg-white rounded ">
                    <h2 className="text-[23px] font-medium leading-[30px]">
                      Create an account
                    </h2>
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        formik.handleSubmit();
                      }}
                      action=""
                    >
                      <div className="mb-3">
                        <input
                          value={formik.values.username}
                          onChange={formik.handleChange}
                          type="text"
                          name="username"
                          id="username"
                          placeholder="Username"
                          className="w-full border border-gray-300 py-2 pl-3 rounded-2xl mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600"
                        />
                        {formik.touched.username && formik.errors.username && (
                          <p className="text-red-500 text-sm mt-2">
                            {formik.errors.username}
                          </p>
                        )}
                      </div>
                      <div className="mb-3">
                        <input
                          value={formik.values.email}
                          onChange={formik.handleChange}
                          type="email"
                          name="email"
                          id="email"
                          placeholder="Email Address"
                          className="w-full border border-gray-300 py-2 pl-3 rounded-2xl mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600"
                        />
                        {formik.touched.email && formik.errors.email && (
                          <p className="text-red-500 text-sm mt-2">
                            {formik.errors.email}
                          </p>
                        )}
                      </div>
                      <div>
                        <input
                          value={formik.values.password}
                          onChange={formik.handleChange}
                          type="password"
                          name="password"
                          id="password"
                          placeholder="Password"
                          className="w-full border border-gray-300 py-2 pl-3 rounded-2xl mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600"
                        />
                        {formik.touched.password && formik.errors.password && (
                          <p className="text-red-500 text-sm mt-2">
                            {formik.errors.password}
                          </p>
                        )}
                      </div>
                      <div>
                        <input
                          value={formik.values.retypepassword}
                          onChange={formik.handleChange}
                          type="password"
                          name="retypepassword"
                          id="retypepassword"
                          placeholder="RetypePassword"
                          className="w-full border border-gray-300 py-2 pl-3 rounded-2xl mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600"
                        />
                        {formik.touched.retypepassword &&
                          formik.errors.retypepassword && (
                            <p className="text-red-500 text-sm mt-2">
                              {formik.errors.retypepassword}
                            </p>
                          )}
                      </div>
                      <button
                        type="submit"
                        className="cursor-pointer py-2 px-4 block mt-3 bg-[#bc8664] text-white font-bold w-full text-center rounded-2xl"
                      >
                        Register
                      </button>
                    </form>
                    <div className="mt-26">
                      <ul className="flex items-center justify-between font-medium text-[14px] cursor-pointer ">
                        <li
                          onClick={() => SetType("register")}
                          className="hover:text-[#bc8664] duration-300"
                        >
                          Register Here !
                        </li>
                        <li className="hover:text-[#bc8664] duration-300">
                          Forgot Password ?
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
