import { FormControlLabel, Radio, TextField } from "@mui/material";
import React, { useState } from "react";
import "./Crudd.css";
import crudpic from "../images/crudLeft.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import swal from "sweetalert";
// import Radio from '@mui/material/Radio';
import RadioGroup from "@mui/material/RadioGroup";
// import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { useNavigate } from "react-router-dom";

const Crud = () => {
  const crudRead = useNavigate();
  const [data, setData] = useState({
    name: "",
    gender: "",
    email: "",
    address: "",
    phone: "",
  });

  const inputData = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitData = async (e) => {
    e.preventDefault();
    console.log(data);
    if (!data.name) {
      swal("Opps! Empty name", "All fields are mandatory", "error");
    } else if (!data.email) {
      swal("Opps! Empty Email", "All fields are mandatory", "error");
    } else if (!data.address) {
      swal("Opps! Empty address", "All fields are mandatory", "error");
    } else if (!data.phone) {
      swal("Opps! Empty phone", "All fields are mandatory", "error");
    } else {
      await fetch(`https://64d1484cff953154bb7a3851.mockapi.io/portfolio`, {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.name,
          gender: data.gender,
          email: data.email,

          address: data.address,
          phone: data.phone,
        }),
      })
        .then(() => {
          swal("Form submitted successfully", "", "success");
        })
        .then(() => {
          crudRead("/crudRead");
        });
    }

    // console.log(data);
  };
  return (
    <>
      <div className="crudMain  mt-5">
        <div class="form">
          <form>
            <TextField
              id="standard-basic"
              label="Name"
              fullWidth
              variant="standard"
              type="text"
              onChange={inputData}
              value={data.name}
              name="name"
            />{" "}
            <br /> <br />
            <FormControl>
              <FormLabel id="demo-row-radio-buttons-group-label">
                Gender
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <FormControlLabel
                  value="Male"
                  name="gender"
                  control={<Radio />}
                  label="Male"
                  onChange={inputData}
                />
                <FormControlLabel
                  value="Female"
                  name="gender"
                  control={<Radio />}
                  label="Female"
                  onChange={inputData}
                />

                <FormControlLabel
                  value="Other"
                  name="gender"
                  control={<Radio />}
                  label="Other"
                  onChange={inputData}
                />
                <FormControlLabel
                  value="disabled"
                  disabled
                  control={<Radio />}
                  label="other"
                />
              </RadioGroup>
            </FormControl>
            <br />
            <br />
            <TextField
              id="standard-basic"
              label="Email"
              fullWidth
              variant="standard"
              type="email"
              onChange={inputData}
              value={data.email}
              name="email"
            />
            <br /> <br />
            <TextField
              id="standard-basic"
              label="Address"
              multiline
              rows={3}
              fullWidth
              variant="standard"
              type="text"
              onChange={inputData}
              value={data.address}
              name="address"
            />
            <br /> <br />
            <TextField
              id="standard-basic"
              label="Phone"
              fullWidth
              variant="standard"
              type="number"
              onChange={inputData}
              value={data.phone}
              name="phone"
            />
            <br />
            <br />
            <button className="btn btn-success w-100" onClick={submitData}>
              Submit
            </button>
          </form>
        </div>

        <ToastContainer />
      </div>
    </>
  );
};

export default Crud;
