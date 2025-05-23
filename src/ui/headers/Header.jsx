import { Link } from "react-router-dom";

const header = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/about">About us</Link>
      <Link to="/contact">Contacts</Link>
    </div>
  );
};

export default header;
