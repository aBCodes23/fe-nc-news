import { useEffect, useContext, useState } from "react";
import { UserContext } from "./Context/userContext";
import { getUsers } from "./ApiRequests";

const Users = () => {
  const { setUser } = useContext(UserContext);
  const [users, setUsers] = useState([])

  useEffect(() => {
    getUsers()
    .then((users) => {
      setUsers(users);
    });
  }, [setUser]);

  return (
  <ul className="userGrid">
  {users.map((user) => {
    return (
      <li className="user" key={user.username}>
        <h2>{user.name} ({user.username})</h2>
        <img className="userImage"
          onClick={() => {
            setUser(user.username);
          }}
          src={user.avatar_url}
        />
      </li>
    );
  })}
  </ul>
  )
};

export default Users;
