import { connect, styled } from "frontity";

const LineShape = ({ state }) => {
  return (
    <LnShape className="lineshape"></LnShape>
  );
};

// Connect the Header component to get access to the `state` in it's `props`
export default connect(LineShape);


const LnShape = styled.span `
    position: absolute;
    right: 10%;
    top: 15%;
    width: 30px;
    height: 100px;
    border-right: 1px solid #222;
    border-left: 1px solid #f47d00;
    transform: rotate(77deg) skewX(37deg);
    opacity: 0.2;
`;
