import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Illustration from "./../../assets/Images/Illustration.png";
import { CgSearch } from "react-icons/cg";

export default function Home() {
   return (
      <HomeWrapper>
         <Image src={Illustration}></Image>
         <Title>نام داروی مورد نظرتون چیه ؟</Title>
         <Describtion>نام داروی مورد نظر خودتون رو در بخش پایین بنویسید و سپس دکمه جست و جو را بزنید</Describtion>
         <SearchBox>
            <Input placeholder="نام دارو برای مثال آنتی هیستامین" />
            <SearchButtun to="/">
               جست و جو
               <Icon />
            </SearchButtun>
         </SearchBox>
      </HomeWrapper>
   );
}

const HomeWrapper = styled.section`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
`;

const Image = styled.img`
   margin-top: 5rem;
`;

const Title = styled.h2`
   font-size: 2.8rem;
   color: #0abead;
   margin-top: 3rem;
   font-weight: 700;
`;

const Describtion = styled.p`
   margin-top: 3rem;
`;

const SearchBox = styled.div`
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

const SearchButtun = styled(Link)`
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
`;

const Icon = styled(CgSearch)`
   font-size: 2rem;
`;
