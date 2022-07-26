import { connect, styled } from "frontity";

const RoundShape = ({ state }) => {
  return (
    <RdShape className="roundshape"></RdShape>
  );
};

// Connect the Header component to get access to the `state` in it's `props`
export default connect(RoundShape);


const RdShape = styled.span `
    position: absolute;
    width: 70px;
    height: 70px;
    left: -1%;
    bottom: -11%;
    border-radius: 100%;
    background: linear-gradient(45deg, #e1e1e1, #ffffff);

    @keyframes shapeRotate {
        0% {
            transform: rotate(-50deg);
        }
        100% {
            transform: rotate(330deg);
        }
    }
`;
