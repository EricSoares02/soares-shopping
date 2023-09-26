import styled from "styled-components";

const Btn = styled.button`
  border: solid 1px  ${props=> props.theme.colors.headerBg2};
  border-radius: 12px;
  font-weight: 400;
  font-size: 12px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 130px;
  height: 45px;
  background-color: transparent;
  color: black;
  transition: ${(props) => props.theme.transition.transition};
  margin:  0 0 0px 20px;
 &:hover{
  background-color: ${(props) => props.theme.colors.headerBg2};
  color: ${(props) => props.theme.colors.white};
 }
`;

export default function AddCart(){

return(<Btn>ADD TO CART</Btn>)
}