import { useContext } from "react";
import { UserContext } from "./Context/userContext";

const Heading = () => {
  const { user } = useContext(UserContext);
  return (
    <div>
      <h1>NC-News</h1>
      <span>Account: {user}</span>
    </div>
  );
};

export default Heading;
