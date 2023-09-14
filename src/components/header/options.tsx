import styled from "styled-components";
import Link from "next/link";


const DivOptions = styled.div`
width: 300px;
height: 100%;
display: flex;
gap: 32px;
align-items: center;
justify-content: center;
`;

const ImageOptions = styled.img`
width: 25px;
height: 25px;
`

export default function Options() {
    return (
      <DivOptions>
        <Link href={'/account'}><ImageOptions src="/user.svg"></ImageOptions></Link>
        <Link href={'/cart'}><ImageOptions src="/bag.svg"></ImageOptions></Link>
      </DivOptions>
    );
  }