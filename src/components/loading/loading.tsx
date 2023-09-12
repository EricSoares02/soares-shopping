import styled, { keyframes } from "styled-components";

const rotate = keyframes`

  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Circle = styled.div`
  width: 100%;
  height: 100vh;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Gray = styled.div`
  border: 7px solid;
  border-color: #d9d9d9;
  border-radius: 9999px;
  width: 110px;
  height: 110px;
`;
//transparent #1e6fd9
const Blue = styled.div`
  border: 7px solid;
  border-color: transparent;
  border-top-color: #1e6fd9;
  border-radius: 9999px;
  width: 110px;
  height: 110px;
  translate: -7px -7px;
  animation: ${rotate} 2s linear infinite;
`;

export default function Load() {
  return (
    <Circle>
      <Gray>
        <Blue></Blue>
      </Gray>
    </Circle>
  );
}
