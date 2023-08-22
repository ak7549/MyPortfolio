import React, { useEffect, useState } from "react";
import { FormControlLabel, Radio, TextField } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import "./Crudd.css";
// import Radio from '@mui/material/Radio';
import RadioGroup from "@mui/material/RadioGroup";
// import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

const CrudUpdate = () => {
  const read = useNavigate();
  const [id, setId] = useState();
  const [name, setName] = useState();
  const [gender,setGender]=useState()
  const [email, setEmail] = useState();
  const [address, setAddress] = useState();
  const [phone, setPhone] = useState();
  //   console.log(name)

  const getData = () => {
    setId(localStorage.getItem("id"));
    setName(localStorage.getItem("name"));
    setGender(localStorage.getItem("gender"))
    setEmail(localStorage.getItem("email"));
    setAddress(localStorage.getItem("address"));
    setPhone(localStorage.getItem("phone"));
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    if (!name) {
      swal("Opps! Empty name", "All fields are mandatory", "error");
    }
    else if(!gender)
    {
        swal("Opps! Empty Gender", "All fields are mandatory", "error");
    }
    
    else if (!email) {
      swal("Opps! Empty Email", "All fields are mandatory", "error");
    } else if (!address) {
      swal("Opps! Empty address", "All fields are mandatory", "error");
    } else if (!phone) {
      swal("Opps! Empty phone", "All fields are mandatory", "error");
    } else {
      fetch(`https://64d1484cff953154bb7a3851.mockapi.io/portfolio/${id}`, {
        method: "put",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: id,
          name: name,
          gender:gender,
          email: email,
          address: address,
          phone: phone,
        }),
      })
        .then(() => {
          swal("Form updated successfully", "", "success");
        })
        .then(() => {
          read("/crudRead");
        });
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="crudMain container mt-5">
        <div class="form">
          <form>
            <TextField
              id="standard-basic"
              label="Name"
              fullWidth
              variant="standard"
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />{" "}
            <br /> <br />
            <TextField
              id="standard-basic"
              label="Email"
              fullWidth
              variant="standard"
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
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
                  onChange={(e)=>
                setGender(e.target.value)}
                 
                />
                <FormControlLabel
                  value="Female"
                  name="gender"
                  control={<Radio />}
                  label="Female"
                  onChange={(e)=>
                    setGender(e.target.value)}
                 
                />

                <FormControlLabel
                  value="Other"
                  name="gender"
                  control={<Radio />}
                  label="Other"
                  onChange={(e)=>
                setGender(e.target.value)}
                  
                />
                <FormControlLabel
                  value="disabled"
                  disabled
                  control={<Radio />}
                  label="other"
                />
              </RadioGroup>
            </FormControl>
            <br /> <br />
            <TextField
              id="standard-basic"
              label="Address"
              multiline
              rows={3}
              fullWidth
              variant="standard"
              type="text"
              name="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <br /> <br />
            <TextField
              id="standard-basic"
              label="Phone"
              fullWidth
              variant="standard"
              type="number"
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <br />
            <br />
            <button className="btn btn-success w-100" onClick={handleUpdate}>
              Update
            </button>
            <ToastContainer />
          </form>
        </div>
      </div>
    </>
  );
};

export default CrudUpdate;
