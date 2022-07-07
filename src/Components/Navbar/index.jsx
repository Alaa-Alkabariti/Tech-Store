import {
  Container,
  UlLeft,
  Logo,
  UlRight,
  MenuItem,
  Button,
  Nav,
} from "./index.style";

import { Link } from "react-router-dom";
import SignIn from "../../Pages/SignIn/index";

const Navbar = () => {
  return (
    <>
      <Container>
        <Nav>
          <UlLeft>
            <MenuItem activeClassName>Home</MenuItem>
            <MenuItem>NewArrival</MenuItem>
            <MenuItem>Laptops</MenuItem>
          </UlLeft>
          <Logo src="images/logo.png"></Logo>
          <UlRight>
            <MenuItem>Mobiles</MenuItem>
            <MenuItem>Headphones</MenuItem>
            <MenuItem>Accessories</MenuItem>
            <Button color="#FA7400" padding="10px 30px">
              <Link to="/SignIn">Login</Link>
            </Button>
          </UlRight>
        </Nav>
      </Container>
    </>
  );
};

export default Navbar;
