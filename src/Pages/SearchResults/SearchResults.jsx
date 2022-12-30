import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Header from "../../Components/Header/Header";
import SearchItem from "../../Components/SearchItem/SearchItem";
import axiosConfig from "./../../lib/axiosConfig";

export default function SearchResults() {
   const [result, setResult] = useState();
   const { word } = useParams();

   useEffect(() => {
      axiosConfig
         .get(`drug/filter/?persian_title=${word}`)
         .then((res) => setResult(res.data))
         .catch((err) => console.log(err));
   }, [word]);

   return (
      <SearchResultsWrapper>
         <Header />
         {result ? (
            result.results.length ? (
               result.results.map((item) => <SearchItem key={item.persian_title} perTitle={item.persian_title} engTilte={item.english_title} avalible={item.is_active} />)
            ) : (
               <NotFound>محصولی با این نام یافت نشد.</NotFound>
            )
         ) : (
            <Loading>Loading ...</Loading>
         )}
      </SearchResultsWrapper>
   );
}

const SearchResultsWrapper = styled.section``;

const Loading = styled.p`
   font-size: 3rem;
   text-align: center;
   margin-top: 5rem;
`;

const NotFound = styled.p`
   direction: rtl;
   font-size: 3rem;
   text-align: center;
   margin-top: 5rem;
   background-color: #e7e6e7dd;
   padding: 5rem 1.5rem;
   border-radius: 2rem;
`;
