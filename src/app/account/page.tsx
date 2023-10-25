"use client";
import BackBtn from "@/utils/backBtn";
import { styled, keyframes } from "styled-components";



const Conteiner = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
`;
const MainConteiner = styled.div`
  width: ${(props) => props.theme.length};
  height: 100vh;
  background-color: gray;
`;
const BtnCase = styled.div`
  width: 100%;
  height: 30px;
  padding: 15px 0 0 15px;
`;

export default function Account() {
    
  return (
    <>
      <main>
        <Conteiner>
          <MainConteiner>
            <BtnCase>
              <BackBtn />
            </BtnCase>
          </MainConteiner>
        </Conteiner>
      </main>
    </>
  );
}
