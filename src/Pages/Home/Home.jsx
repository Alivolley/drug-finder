import React from "react";
import styled from "styled-components";
import Illustration from "./../../assets/Images/Illustration.png";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import SearchInput from "../../Components/SearchInput/SearchInput";

export default function Home() {
   return (
      <>
         <SectionTitle />
         <HomeWrapper>
            <Image src={Illustration}></Image>
            <Title>نام داروی مورد نظرتون چیه ؟</Title>
            <Describtion>نام داروی مورد نظر خودتون رو در بخش پایین بنویسید و سپس دکمه جست و جو را بزنید</Describtion>
            <SearchInput />
         </HomeWrapper>
      </>
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
