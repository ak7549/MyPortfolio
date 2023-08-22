import React, { useEffect, useState } from "react";

const ContactList = () => {
  const [contactData, setContactData] = useState([]);

  const getData = async () => {
    let url = await fetch(
      `https://64d1484cff953154bb7a3851.mockapi.io/crud-users`
    );
    let result = await url.json();
    //   console.log(result)
    setContactData(result);
  };

  useEffect(() => {
    getData();
  }, []);

  const del = async (id) => {
    await fetch(
      `https://64d1484cff953154bb7a3851.mockapi.io/crud-users/${id}`,
      {
        method: "delete",
      }
    );
   
    console.log(id);
    getData();
  };

  
  return (
    <>
      <div className="container-fluid mt-3">
        <table className="table table-dark table-striped">
          <thead>
            <tr>
              <th scope="col">Sr.no</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Subject</th>
              <th scope="col">Message</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {contactData.map((elem, i) => {
              return (
                <>
                  <tr>
                    <th>{i + 1}</th>
                    <td>{elem.name}</td>
                    <td>{elem.email}</td>
                    <td>{elem.subject}</td>
                    <td>{elem.message}</td>
                    <td>
                      <button className="btn btn-success mx-2">Update</button>
                      <button
                        className="btn btn-success"
                        onClick={() =>
                          window.confirm("do you want to delte")
                            ? del(elem.id)
                            : ""
                        }
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                 
                </>
              );
            })}
          </tbody>
        </table>
      
      </div>
    </>
  );
};

export default ContactList;
