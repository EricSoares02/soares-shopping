import { devices, theme } from "@/app/global.style";
import styled from "styled-components";

const DivLogo = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 30px;
 
`;
const LinkLogo = styled.a`
  text-decoration: none;
  color: ${theme.colors.headerBg};
  font-weight: bolder;
  cursor: pointer;
  font-size: 18px;
`;

export default function Logo() {
  return (
    <DivLogo>
      <LinkLogo href="/">Soares Shopping</LinkLogo>
    </DivLogo>
  );
}
