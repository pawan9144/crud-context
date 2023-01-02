import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/button";
import Context from "../context";

const Userlist = () => {
  const navigate = useNavigate();
  const { val, setVal } = useContext(Context);
  const handleRemoveUser = (index) => {
    const Updateditem = val.filter((element) => {
      return index != element.id;
    });

    setVal(Updateditem);
  };

  return (
    <div>
      <Link to="/adduser">
        <Button>Add User</Button>
      </Link>
      <div>
        {val.length ? (
          val.map((user) => {
            return (
              <div key={user.id}>
                <div>
                  <h3>{user.data.name}</h3>
                  <p>{user.data.title}</p>
                  <p>{user.data.description}</p>
                </div>
                <div>
                  <Link to={`adduser/${user.id}`}>
                    <button>edit</button>
                  </Link>
                  <button onClick={() => handleRemoveUser(user.id)}>
                    delete
                  </button>
                </div>
              </div>
            );
          })
        ) : (
          <p className="text-center col-span-2 text-gray-700 font-semibold">
            No User
          </p>
        )}
      </div>
    </div>
  );
};

export default Userlist;
