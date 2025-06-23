import React from "react";
import { IoClose } from "react-icons/io5";
import { IoFilterSharp } from "react-icons/io5";

const ProductPageFilterBtn = () => {
  return (
    <>
      <div className="drawer drawer-end">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle " />
        <div className="drawer-content pl-7  ">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-4"
            className="drawer-button btn   text-md  bg-transparent font-bold  mt-5 "
          >
            <IoFilterSharp /> Filter
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-4"
            aria-label="close sidebar"
            className="drawer-overlay "
          ></label>
          <div className="p-4 w-80 min-h-full bg-base-200 text-base-content flex  justify-center glass-card">
            <div className="  absolute right-6 top-6 text-2xl  ">
              <p
                onClick={() => {
                  {
                    document.getElementById("my-drawer-4").click();
                  }
                }}
              >
                <IoClose />
              </p>
            </div>
            <div className="mt-10">
              {" "}
              <ul className="menu ">
                {/* Sidebar content here */}
                <li>
                  <a>Sidebar Item 1</a>
                </li>
                <li>
                  <a>Sidebar Item 2</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPageFilterBtn;
