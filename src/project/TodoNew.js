import React, { useState } from "react";
import "./TodoNew.css";
import TextField from "@mui/material/TextField";
import AddBoxIcon from "@mui/icons-material/AddBox";
import TodoList from "./TodoList";
import Tooltip from "@mui/material/Tooltip";
import { IconButton } from "@mui/material";

const TodoNew = () => {
  const [data, setData] = useState();
  const [storeData, setStoreData] = useState([]);

  const addItems = (e) => {
    setData(e.target.value);
    console.log(data);
  };

  const submitData = (e) => {
    e.preventDefault();

    setStoreData((oldItems) => {
      return [...oldItems, data];
    });
    setData("");
  };

  const erase = (id) => {
    setStoreData((oldItems) => {
      return oldItems.filter((cur, i) => {
        return i != id;
      });
    });
    console.log("cliked");
  };

  const deleteAll = () => {
    setStoreData([]);
    console.log("Cliced");
  };

  return (
    <>
      <div className="todoMain">
        <div className="center">
          <div className="todoheading">
            <h1>TodoList</h1>
          </div>
          <div className="input">
            <input
              type="text"
              name=""
              id=""
              placeholder="Enter Items here..."
              value={data}
              onChange={addItems}
            />

            <Tooltip title="Add"  placement="top-end">
              <button onClick={submitData}>
                <AddBoxIcon />
              </button>
            </Tooltip>
          </div>

          <div className="list">
            {storeData.map((elem, index) => {
              return (
                <TodoList key={index} id={index} text={elem} delete={erase} />
              );
            })}
          </div>
          <div className="deleteAll">

          <Tooltip title="Delete All" placement="top-end">
          <button onClick={deleteAll}>DeleteAll</button>
            
          </Tooltip>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoNew;
