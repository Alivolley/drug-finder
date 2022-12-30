import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import axiosConfig from "../../lib/axiosConfig";
import Header from "./../../Components/Header/Header";
import SearchItem from "./../../Components/SearchItem/SearchItem";

export default function ChosenDrug() {
   const [result, setResult] = useState();
   const { id } = useParams();

   useEffect(() => {
      axiosConfig
         .get(`drug/filter/?persian_title=${id}`)
         .then((res) => setResult(res.data))
         .catch((err) => console.log(err));
   }, [id]);

   return (
      <ChosenDrugWrapper>
         <Header />

         {result ? (
            <SearchItem
               key={result.results[0].persian_title}
               perTitle={result.results[0].persian_title}
               engTilte={result.results[0].english_title}
               avalible={result.results[0].is_active}
            />
         ) : (
            <Loading>Loading ...</Loading>
         )}
      </ChosenDrugWrapper>
   );
}

const ChosenDrugWrapper = styled.section``;

const Loading = styled.p`
   font-size: 3rem;
   text-align: center;
   margin-top: 5rem;
`;
