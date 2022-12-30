import React from "react";
import styled from "styled-components";
import Header from "./../../Components/Header/Header";
import SearchItem from "./../../Components/SearchItem/SearchItem";

export default function ChosenDrug() {
   return (
      <ChosenDrugWrapper>
         <Header />
         <SearchItem />
      </ChosenDrugWrapper>
   );
}

const ChosenDrugWrapper = styled.section``;
