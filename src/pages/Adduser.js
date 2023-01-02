import React, { useContext, useEffect, useState } from "react";
import Button from "../components/button";
import TextField from "../components/Textfield";
import { v4 as uuidv4 } from "uuid";
import Contexts from "../context";
import { useNavigate, useParams } from "react-router-dom";

const Adduser = () => {
  const navigate = useNavigate();
  const params = useParams();
  console.log("🚀 ~ file: Adduser.js:11 ~ Adduser ~ params", params);
  const [data, setData] = useState({
    name: "",
    title: "",
    description: "",
  });
  const { val, setVal } = useContext(Contexts);

  const Handlechange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  const HandleSubmit = (e) => {
    e.preventDefault();
    const AllinputData = {
      id: new Date().getTime().toString(),
      _id: uuidv4(),
      data,
    };
    // setitems([...items, AllinputData]);
    setVal([...val, AllinputData]);
    navigate("/");
  };

  const handleUpdateUser = (id) => {
    let newEditItem = val.find((elem) => {
      return elem.id == id;
    });
    setVal(newEditItem);
    navigate("/adduser");
  };
  return (
    <>
      <div>
        <form>
          <TextField
            label="Name"
            value={data.name}
            name="name"
            onChange={Handlechange}
            inputProps={{
              type: "text",
              placeholder: "Pawan Kumar",
            }}
          />
          <br />
          <TextField
            label="Title"
            value={data.title}
            name="title"
            onChange={Handlechange}
            inputProps={{ type: "text", placeholder: "xyz" }}
          />
          <br />
          <TextField
            label="Description"
            value={data.description}
            name="description"
            onChange={Handlechange}
            inputProps={{ type: "text", placeholder: "xyz......." }}
          />
          <br />
          <Button onClick={HandleSubmit}>Submit</Button>
        </form>
      </div>
    </>
  );
};

export default Adduser;
