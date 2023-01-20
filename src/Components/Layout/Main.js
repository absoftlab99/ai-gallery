import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import { AuthContext } from "../../Context/UserContext";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Main = () => {
  const { loading } = useContext(AuthContext);
  return (
    <>
      {loading ? (
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <progress className="progress w-56"></progress>
            </div>
          </div>
        </div>
      ) : (
        <>
          <Header></Header>
          <div className="outlet">
            <Outlet></Outlet>
          </div>
          <Footer></Footer>
        </>
      )}
    </>
  );
};

export default Main;
