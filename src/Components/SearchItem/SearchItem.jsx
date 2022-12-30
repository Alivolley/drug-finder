import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import pic from "./../../assets/Images/1.jpg";

export default function SearchItem({ perTitle, engTilte, avalible }) {
   return (
      <SearchItemWrapper to={`/chosen/${perTitle}`}>
         <Image src={pic} />
         <Describes>
            <Title>{perTitle.slice(2, perTitle.length - 1)}</Title>
            <Text>{engTilte.slice(2, engTilte.length - 1)}</Text>
            <Avalible>وضعیت موجودی : {avalible ? "موجود" : "به اتمام رسیده"}</Avalible>
         </Describes>
      </SearchItemWrapper>
   );
}

const SearchItemWrapper = styled(Link)`
   direction: rtl;
   display: flex;
   padding: 1.5rem;
   border: 0.1rem solid #c5c4c4;
   margin-top: 2rem;
   border-radius: 1rem;
   text-decoration: none;
   color: black;
   background-color: whitesmoke;
`;

const Image = styled.img`
   width: 15rem;
   height: 15rem;
`;

const Describes = styled.div`
   max-width: 70rem;
   padding: 0 1.5rem;
`;

const Title = styled.div`
   font-size: 2rem;
   font-weight: 700;
`;

const Text = styled.p`
   line-height: 2.8rem;
   font-size: 1.5rem;
   margin-top: 3rem;
`;

const Avalible = styled.p`
   font-size: 1.5rem;
   margin-top: 3rem;
   color: #0abead;
`;
