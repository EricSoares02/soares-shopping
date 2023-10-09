"use client";
import styled from "styled-components";
import { devices, theme } from "@/app/global.style";
import { FormEvent } from "react";
import { useRouter } from "next/navigation";

const DivSearch = styled.div`
  width: 600px;
  height: 50px;
  display: flex;
  @media ${devices.sm} {
    display: none;
  }
`;
const Form = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
`;
const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  border: transparent;
  border-radius: 24px;
  background-color: ${theme.colors.bg};
  padding-left: 30px;
  outline: 0;
`;

export const ImageInput = styled.img`
  translate: -40px 15px;
  width: 20px;
  height: 20px;
  @media ${devices.sm} {
    translate: -40px 12px;
  }
`;

const Submit = styled.input`
  width: 1px;
  height: 1px;
  background-color: transparent;
  border: none;
`;

export default function Search() {

  const router = useRouter();
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget);
    const data = formData.get('text')
    router.push(`/search?value=${data}`)
 
  }
  return (
    <DivSearch>
      <Form onSubmit={onSubmit}>
        <SearchInput
          type="text"
          name="text"
          placeholder="Search your new style here ..."
        />
        <Submit type="submit" />
      </Form>
      <ImageInput src="/lupa.svg"></ImageInput>
    </DivSearch>
  );
}
