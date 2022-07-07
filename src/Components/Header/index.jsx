import { Container, Img, TextSection, Title, Summary } from "./index.style";
import Navbar from "../Navbar";
import { Button } from "../Navbar/index.style";

const Header = () => {
  return (
    <>
      <Container>
        <Img src="images/Hero.png" />
        <Navbar />
      </Container>
      <TextSection>
        <Title>PlayStation 5</Title>
        <Summary>
          lightning-fast download speed with super-fast ssd storage
        </Summary>
        <Button width="10px" padding="10px 40px" backGroundColor="#a9a9ac" marginTop="30px">
          Start Shopping
        </Button>
      </TextSection>
    </>
  );
};

export default Header;
