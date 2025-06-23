import React from "react";
import { Link, useLocation } from "react-router-dom";

const Breadcrumbs = () => {
  const currentPath = useLocation();
  const crumbsRaw = currentPath.pathname.split("/");
  const crumbs = crumbsRaw.filter((crumb) => {
    return crumb != "";
  });
  const crumbsLen = crumbs.length;

  return (
    <div className="breadcrumbs px-8 opacity-55 h-10 flex items-center ">
      <ul>
        <li>
          {crumbsLen !== 0 ? (
            <Link to={"/"}>home</Link>
          ) : (
            <p className="select-none">home</p>
          )}
        </li>
        {crumbs.map((crumb, index) => {
          return (
            <li key={index + crumb}>
              {crumbsLen - 1 !== index ? (
                <Link to={crumb}>{crumb}</Link>
              ) : (
                <p className="select-none">{crumb}</p>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Breadcrumbs;
 