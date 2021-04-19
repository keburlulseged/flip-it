import React from "react";
import { useSelector } from "react-redux";

function NewHotel() {
  const {auth} = useSelector((state) => (
    {...state}
  ))
  return <div className="container-fluid h1 p-5 text-center">
    New Hotel
    </div>;
}

export default NewHotel;
