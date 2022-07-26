import { connect, styled } from "frontity";
import Link from "./link";
import Nav from "./nav";
import MobileMenu from "./menu";

const Header = ({ state }) => {
  return (
    <>
      <Container>
        <StyledLink link="/">
          <Title>{state.frontity.title}<span>.</span></Title>
        </StyledLink>
        <Description>{state.frontity.description}</Description>
        <MobileMenu />
      </Container>
      <Nav />
    </>
  );
};

// Connect the Header component to get access to the `state` in it's `props`
export default connect(Header);

const Container = styled.div`
  width: 848px;
  max-width: 100%;
  box-sizing: border-box;
  padding: 40px 24px 35px 24px;
  // color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Title = styled.h2`
  margin: 0;
  margin-bottom: 10px;
  span {
    color: #f47e00;
  }
  font-family: cursive;
`;

const Description = styled.h4`
  margin: 0;
  color: #828282;
  font-weight: 300;
  font-size: 14px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;
