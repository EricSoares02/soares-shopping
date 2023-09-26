import styled from "styled-components";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Btn = styled.button`
  background-color: transparent;
  border: none;
  width: 40px;
  height: 40px;
  &:hover {
   cursor: pointer;
  }
`;

export default function BackBtn() {
  const router = useRouter();
  return (
    <Btn onClick={() => router.back()}>
      <Image src="back-btn.svg" alt="img" width={40} height={40} priority />
    </Btn>
  );
}
