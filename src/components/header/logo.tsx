import styled from "styled-components";

const DivLogo = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const LinkLogo = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.colors.white};
  font-weight: bolder;
  font-size: 18px;
  cursor: pointer;
`;

export default function Logo() {
  return (
    <DivLogo>
      <LinkLogo href="/">Soares Shopping</LinkLogo>
    </DivLogo>
  );
}
