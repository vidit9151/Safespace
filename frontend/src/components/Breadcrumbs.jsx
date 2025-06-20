import React from "react";
import { Link, useLocation } from "react-router-dom";

const Breadcrumbs = () => {
  const currentPath = useLocation();
  const crumbsRaw = currentPath.pathname.split("/");
  const crumbs = crumbsRaw.filter((crumb) => {
    return crumb != "";
  });

  return (
    <div className="breadcrumbs px-8 opacity-55 h-10 flex items-center ">
      <ul>
        <li>
          <Link to={"/"}>home</Link>
        </li>
        {crumbs.map((crumb, index) => {
          return (
            <li key={index + crumb}>
              <Link to={crumb}>{crumb}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Breadcrumbs;
