import styled from "styled-components";

const Conteiner = styled.div`
display: flex;
flex-direction: row;
`
const Btn = styled.button`
  border: none;
  border-radius: 12px;
  font-weight: bolder;
  font-size: 14px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 450px;
  height: 65px;
  background-color: ${(props) => props.theme.colors.blackBlue};
  color: ${(props) => props.theme.colors.white};
  transition: ${(props) => props.theme.transition.transition};
 &:hover{
  background-color: ${(props) => props.theme.colors.headerBg2};
 }
`;
const ImageBtn = styled.img`
  translate: 80px 0px;
  width: 45px;
  height: 45px;
`;

export default function AddBtnCart() {
  
  return (
    <Conteiner>
      <Btn>
        ADD TO CART
        <ImageBtn src="/bag.svg"></ImageBtn>
      </Btn>
      
    </Conteiner>
  );
}
