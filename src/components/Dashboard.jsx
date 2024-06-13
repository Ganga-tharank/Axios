import React, { useState, useEffect } from "react";
import Topbar from "./Topbar";
import axios from "axios";
import { API_URL } from '../App'
import { toast } from "react-toastify";
import Table from "react-bootstrap/Table";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Dashboard() {
    const [userData, setUserData] = useState([]);
  let navigate = useNavigate();

   const getUserData = async () => {
     try {
       let res = await axios.get(API_URL);
       if (res.status === 200) {
         toast.success("Data Fetched Successfully");
         setUserData(res.data);
       }
     } catch (error) {
       toast.error("Data Fetch Failed");
     }
  };

   const handleToggle = async (e) => {
     try {
       e.status = !e.status;
       let res = await axios.put(`${API_URL}/${e.id}`, e);
       if (res.status === 200) {
         toast.success("Toggle success");
         getUserData();
       }
     } catch (error) {
       toast.error("Toggle failed");
     }
  };
  
  const handleDelete = async (id) => {
    try {
      let res = await axios.delete(`${API_URL}/${id}`);
      if (res.status === 200) {
        toast.success("Data removal success");
        getUserData();
      }
    } catch (error) {
      toast.error("Data removal failed");
    }
  };
  
  useEffect(() => {
    getUserData();
  }, []);
  return (
    <>
      <Topbar /> <br/>
      <div>
        <Table striped bordered hover>
          <thead>
            <tr className="text-center">
              <th>S.No</th>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Website</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {userData.map((e, i) => {
              return (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{e.name}</td>
                  <td>{e.username}</td>
                  <td>{e.email}</td>
                  <td>{e.phone}</td>
                  <td>{e.website}</td>
                  <td>
                    <label className="switch">
                      <input
                        type="checkbox"
                        defaultChecked={e.status}
                        onClick={() => handleToggle(e)}
                      />
                      <span className="slider round"></span>
                    </label>
                  </td>
                  <td>
                    <Button
                      variant="secondary"
                      onClick={() => navigate(`/edit/${e.id}`)}
                    >
                      Edit
                    </Button>
                    &nbsp;
                    <Button variant="danger" onClick={() => handleDelete(e.id)}>
                      Delete
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default Dashboard