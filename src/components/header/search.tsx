"use client";
import { devices, theme } from "@/app/global.style";
import styled from "styled-components";

const DivSearch = styled.div`
  width: 600px;
  height: 50px;
  display: flex;
  @media ${devices.sm} {
    display: none;
  }
`;

const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  border: transparent;
  border-radius: 24px;
  background-color: ${theme.colors.color};
  padding-left: 30px;
  outline: 0;
`;

export const ImageInput = styled.img`
  translate: -40px 15px;
  width: 20px;
  height: 20px;
  @media ${devices.sm} {
    translate: -40px 8px;
  }
`;

export default function Search() {
  return (
    <DivSearch>
      <SearchInput
        type="text"
        placeholder="Search your new style here ..."
      ></SearchInput>
    <ImageInput src="/lupa.svg"></ImageInput>
    </DivSearch>
  );
}
