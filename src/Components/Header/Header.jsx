import React from "react";
import styled from "styled-components";
import SearchInput from "../SearchInput/SearchInput";
import SectionTitle from "../SectionTitle/SectionTitle";

export default function Header() {
   return (
      <HeaderWrapper>
         <SectionTitle />
         <SearchInput />
      </HeaderWrapper>
   );
}

const HeaderWrapper = styled.header`
   direction: rtl;
   display: flex;
   background-color: whitesmoke;
`;
