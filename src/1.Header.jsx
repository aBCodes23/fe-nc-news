import Heading from "./1a.Heading";
import NavBar from "./1b.NavBar";
import { useContext } from "react";
import { UserContext } from "./Context/userContext";

const Header = () => {
  const { user } = useContext(UserContext);
  return (
    <header>
      <Heading />
      <NavBar />
      <div className="Account">
      <span>{user}</span>
      </div>
    </header>
  );
};

export default Header;
