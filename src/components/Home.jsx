import React, { useState, useEffect } from "react";
import Topbar from "./Topbar";
import BlogCard from "../common/BlogCard";
import { toast } from "react-toastify";
import { API_URL } from "../App";
import axios from "axios";

function Home() {
  let [datas, setDatas] = useState([]);

  const getDatas = async () => {
    try {
      let res = await axios.get(API_URL);
      if (res.status === 200) {
        setDatas(res.data.filter((e) => e.status));
      }
    } catch (error) {
      toast.error();
    }
  };

  useEffect(() => {
    getDatas();
  }, []);

  return (
    <div className="container-fluid">
      <Topbar />

      {datas.map((e) => {
        return (
          <BlogCard
            name={e.name}
            username={e.username}
            email={e.email}
            website={e.website}
            phone={e.phone}
            key={e.id}
          />
        );
      })}
    </div>
  );
}

export default Home;