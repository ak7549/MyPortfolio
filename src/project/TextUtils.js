import React, { useState } from "react";
import "./TextUtils.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TextUtils = () => {
  const [inputData, setInputData] = useState("");

  //   For InputData
  const inputText = (e) => {
    setInputData(e.target.value);
  };

  // For UpperCase
  const upperCase = () => {
    let upper = inputData.toUpperCase();
    setInputData(upper);
    if (inputData === "") {
      toast.error("opps! no input...", {
        position: "top-center",
        autoClose: 6000, // 3 seconds
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } else {
      toast.success("Converted to uppercase successfully...", {
        position: "top-center",
        autoClose: 6000, // 3 seconds
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }

    console.log(upper);
  };

  //   For LoweCase
  const lowerCase = () => {
    let lower = inputData.toLowerCase();
    setInputData(lower);

    if (inputData === "") {
      toast.error("opps! no input...", {
        position: "top-center",
        autoClose: 6000, // 3 seconds
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } else {
      toast.success("Converted to lowerCase successfully...", {
        position: "top-center",
        autoClose: 6000, // 3 seconds
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  // For delete text
  const delteText = () => {
    setInputData("");
    if (inputData === "") {
      toast.error("opps! no data...", {
        position: "top-center",
        autoClose: 6000, // 3 seconds
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } else {
      toast.success("Clear successfully...", {
        position: "top-center",
        autoClose: 6000, // 3 seconds
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  const removeSpace = () => {
    
    const outputString = inputData.replace(/\s+/g, ' ').trim();
    setInputData(outputString)
  };

  return (
    <>
      <div className="textUtilsMain">
        <div className="textHeading">
          <h1>TextUtils</h1>
        </div>
        <div className="textInput">
          <textarea
            name="text"
            onChange={inputText}
            value={inputData}
            id=""
            cols="100"
            rows="15"
            placeholder="Enter text here......."
          ></textarea>
        </div>

        <div className="textUtilsButton">
          <button onClick={upperCase} type="submit">
            Convert to Uppercase
          </button>
          <button onClick={lowerCase} type="submit">
            Convert to Lowercase
          </button>
          <button onClick={delteText} type="submit">
            Clear Text
          </button>
          <button type="submit" onClick={removeSpace}>
            Remove Extra Space
          </button>
        </div>

        <div className="textSummary">
          <h4>Text Summary</h4>
          <p>{`${
            inputData
              ? inputData.split(" ").length
              : inputData.split(" ").length - 1
          } Words and ${inputData.length} Charectors`}</p>
          <p>
            {inputData ? 0.008 * inputData.split(" ").length : 0} Minutes read
          </p>
        </div>

        <div className="textPreview">
          <h4>Your Preview</h4>
          <p>{inputData ? inputData : "Nothing 😏"} </p>
        </div>
        <ToastContainer className="toasti" />
      </div>
    </>
  );
};

export default TextUtils;
