import styled from "styled-components";

const Conteiner = styled.main`
  background-color: ${(props) => props.theme.colors.bg};
`;

export default function Main() {
  return <Conteiner></Conteiner>;
}
