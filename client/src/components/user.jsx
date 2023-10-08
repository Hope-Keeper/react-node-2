import axios from "axios";
import { useEffect, useState, useRef } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import queryString from "query-string";

const User = () => {
  const firstname = useRef(null);
  const [user, setuser] = useState({});
  //const [m , setm]=useState("")
  const { id } = useParams();
  const o = useLocation();
  const history = useNavigate();
  async function getUser() {
    const response = await axios.get(`https://reqres.in/api/users/${id}`);

    setuser(response.data.data);
  }

  useEffect(() => {
    getUser();
    console.log(history);
    console.log(firstname.current);
  }, []);

  return (
    <>
      <img
        src={user.avatar}
        style={{ borderRadius: "50%", width: "100px" }}
        alt=""
      />

      <h4 ref={firstname}>
        {user.first_name} {user.last_name}
      </h4>

      <h5>{user.email}</h5>
      <button
        onClick={() => history("/api/users", { replace: true })}
        className="btn btn-info mt-3"
      >
        users
      </button>
    </>
  );
};

export default User;
