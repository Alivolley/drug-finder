import React, { useState } from "react";
import { CgSearch } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function SearchInput() {
   const [inputValue, setInputValue] = useState("");
   const navigate = useNavigate();

   // console.log(inputValue);

   const searchTheWord = (e) => {
      e.preventDefault();
      inputValue && navigate(`/search/${inputValue}`);
   };

   return (
      <SearchBox onSubmit={searchTheWord}>
         <Input placeholder="نام دارو برای مثال آنتی هیستامین" onChange={(e) => setInputValue(e.target.value)} value={inputValue} />
         <SearchButtun type="submit">
            جست و جو
            <Icon />
         </SearchButtun>
      </SearchBox>
   );
}

const SearchBox = styled.form`
   margin-top: 3rem;
   direction: rtl;
   width: 50rem;
   display: flex;
   align-items: center;
   height: 5rem;
   border-radius: 5rem;
   overflow: hidden;
`;

const Input = styled.input`
   width: 75%;
   height: 100%;
   border: none;
   background-color: #efefef;
   padding-right: 2rem;
   outline: none;
`;

const SearchButtun = styled.button`
   background-color: #0d6efd;
   color: white;
   text-decoration: none;
   display: flex;
   align-items: center;
   justify-content: center;
   height: 100%;
   width: 25%;
   gap: 1rem;
   font-size: 1.5rem;
   border: none;
`;

const Icon = styled(CgSearch)`
   font-size: 2rem;
`;
