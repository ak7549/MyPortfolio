import React, { useState } from "react";
import "./Contact.css";
import TextField from "@mui/material/TextField";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import SendIcon from "@mui/icons-material/Send";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

const Contact = () => {
  const history = useNavigate();

  const [data, setData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const inputData = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitData = async (e) => {
    e.preventDefault();

    if(!data.name)
    {
      swal("Opps!", "Name Empty!", "error");

    }
    else if(!data.email)
    {
      swal("Opps!", "Email Empty!", "error");
    }
    else if(!data.subject)
    {
      swal("Opps!", "Subject Empty!", "error");
    }

    else if(!data.message)
    {
      swal("Opps!", "Message Empty!", "error");
    }
    else{
      await fetch(`https://64d1484cff953154bb7a3851.mockapi.io/crud-users`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        subject: data.subject,
        message: data.message,
      }),
    }).then(() => {
      swal("Form submitted successfully!", "Thank for contacting me 💚 ", "success");
    });

    }

    
  };

  // console.log(`Name: ${name} Email: ${email} Subject: ${subject} Message: ${message}`)

  return (
    <>
      <div className="contactForm">
        <div className="formLeft">
          <h1>Send Us a Message</h1>
          <form>
            <TextField
              required
              id="standard-basic"
              name="name"
              type="text"
              label="Name"
              value={data.name}
              onChange={inputData}
              variant="standard"
              fullWidth
            />{" "}
            <br /> <br />
            <TextField
              required
              id="standard-basic"
              name="email"
              type="email"
              label="Email"
              value={data.email}
              onChange={inputData}
              variant="standard"
              fullWidth
            />{" "}
            <br /> <br />
            <TextField
              required
              id="standard-basic"
              name="subject"
              type="text"
              label="Subject"
              value={data.subject}
              onChange={inputData}
              variant="standard"
              fullWidth
            />{" "}
            <br /> <br />
            <TextField
              id="standard-basic"
              required
              name="message"
              type="text"
              label="Message"
              value={data.message}
              onChange={inputData}
              variant="standard"
              fullWidth
              multiline
              rows={7}
            />
            <button
              className="contactFormBtn"
              type="submit"
              onClick={submitData}
            >
              Submit
            </button>
            <ToastContainer />
          </form>
        </div>
        <div className="formRight">
          <h1>Contact us</h1>
          <h4>
            <span>
              <LocationOnIcon /> &nbsp;&nbsp; Address: &nbsp;
            </span>
            New Ashokh Nagar Noida Sec-14
          </h4>{" "}
          <br />
          <h4>
            <span>
              <PhoneIcon /> &nbsp;&nbsp; Phone: &nbsp;
            </span>
            +919065455197
          </h4>{" "}
          <br />
          <h4>
            <span>
              <SendIcon /> &nbsp; Email: &nbsp;
            </span>
            akhlakh7549@gmail.com
          </h4>
        </div>
      </div>
    </>
  );
};

export default Contact;
