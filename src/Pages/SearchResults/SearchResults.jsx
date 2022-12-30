import React from "react";
import styled from "styled-components";
import Header from "../../Components/Header/Header";
import SearchItem from "../../Components/SearchItem/SearchItem";

export default function SearchResults() {
   return (
      <SearchResultsWrapper>
         <Header />
         <SearchItem />
         <SearchItem />
         <SearchItem />
         <SearchItem />
      </SearchResultsWrapper>
   );
}

const SearchResultsWrapper = styled.section``;
