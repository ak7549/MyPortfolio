import React, { useEffect, useState } from "react";
import "./CrudDetails.css";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";


const CrudDetails = () => {
  const update = useNavigate();
  const [crudData, setCrudData] = useState([]);
  // console.log(crudData);

  const getData = async () => {
    let url = await fetch(
      `https://64d1484cff953154bb7a3851.mockapi.io/portfolio`
    );
    // console.log(url);
    let data = await url.json();
    // console.log(data);
    setCrudData(data);
  };

  const del = async (i) => {
    await fetch(`https://64d1484cff953154bb7a3851.mockapi.io/portfolio/${i}`, {
      method: "delete",
    }).then(() => {
     
      getData();
    });
  };

  const updateData = (id, name,gender, email, address, phone) => {
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("gender",gender)
    localStorage.setItem("email", email);
    localStorage.setItem("address", address);
    localStorage.setItem("phone", phone);
    update("/crudUpdate");
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="container-fluid mt-4 table-responsive">
        <table class="table table-dark table-striped ">
          <thead>
            <tr>
              <th scope="col">Sr-no</th>
              <th scope="col">Name</th>
              <th>Gender</th>
              <th scope="col">Email</th>
              <th scope="col">Adress</th>
              <th>Phone</th>
              <th>Action</th>
              
            </tr>
            
          </thead>
          <tbody>
            {crudData.map((element, i) => {
              let { id, name, email, address, phone,gender } = element;
              return (
                <tr>
                  <th scope="row">{i+1}</th>
                  <td>{name}</td>
                  <td>{gender}</td>
                  <td>{email}</td>
                  <td>{address}</td>
                  <td>{phone}</td>
                  <td>
                    <button
                      className="btn  curdBtn  btn-success mx-3"
                      onClick={() =>
                        updateData(id, name,gender, email, address, phone)
                      }
                    >
                      Update
                    </button>
                    <button
                      className="btn  curdBtn btn-danger mx-3"
                      onClick={() => swal({
                        title: "Are you sure?",
                        text: "Once deleted, you will not be able to recover this data!",
                        icon: "warning",
                        buttons: true,
                        dangerMode: true,
                      })
                      .then((willDelete) => {
                        if (willDelete) {
                          del(id)
                          swal(" Your data has been deleted!", {
                            icon: "success",
                          });
                        } else {
                          swal("Your data is safe!");
                        }
                      })}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default CrudDetails;
