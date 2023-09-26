import styled from "styled-components";

const Btn = styled.button`
  background-color: transparent;
  border: solid gray;
  border-radius: 9999px;
  width: 30px;
  height: 30px;
  z-index: 500;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: ${(props) => props.theme.transition.transition};
`;
const ImageBtn = styled.img`
  
  width: 20px;
  height: 20px;
`;

export default function AddBtnFavorite() {
    return (
    
        <Btn>
          <ImageBtn src="/heart.svg" />
        </Btn>
        
    );
  }