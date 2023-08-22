import React, { useState } from "react";
import "./Counter.css";
import AddBoxIcon from "@mui/icons-material/AddBox";
import RemoveIcon from "@mui/icons-material/Remove";
import Tooltip from "@mui/material/Tooltip";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Counter = () => {
  const [data, setData] = useState(0);

  const increment = () => {
    setData(data + 1);

    console.log("Clicked");
  };

  const decrement=()=>{
    if(data===0){
        toast.error("opps! limit exist 😄 ...",{
            position: "top-center",
            autoClose: 6000, // 3 seconds
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });

    }
    else{
        setData(data-1)

    }
   
  }
  return (
    <>
      <div className="counterMain">
        <div className="counterCenter">
          <div className="counterHeading">
            <h1>Counter</h1>
          </div>
          <div className="counterData">
            <h1>{data}</h1>
          </div>
          <div className="counterButton">
            <Tooltip title="Increment" placement="top">
              <button type="submit" onClick={increment}>
                <AddBoxIcon />
              </button>
            </Tooltip>

            <Tooltip title="Decrement" placement="top">
              <button type="submit" onClick={decrement}>
                <RemoveIcon />
              </button>
            </Tooltip>
          </div>
        </div>
        <ToastContainer />
      </div>
    </>
  );
};

export default Counter;
