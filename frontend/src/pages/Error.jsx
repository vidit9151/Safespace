import React from "react";
import { FaHome } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();
  const redirect = () => {
    setTimeout(() => {
      navigate("/");
    }, 5000);
  };
  redirect();
  return (
    <div>
      <div class="relative flex items-center justify-center min-h-screen bg-base-100 dark:bg-base-200 ">
        <div class="max-w-xl mx-auto sm:px-6 lg:px-8">
          <div class="flex items-center pt-8 sm:justify-start sm:pt-0">
            <div class="px-4 text-lg text-gray-500 border-r border-gray-400 tracking-wider">
              404
            </div>
            <div class="ml-4 text-lg text-gray-500 uppercase tracking-wider">
              Not Found
            </div>
          </div>{" "}
          <Link to={"/"}>
            <div className="flex gap-2 items-center justify-center btn btn-primary rounded-full m-8">
              <FaHome />
              Home
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error;
