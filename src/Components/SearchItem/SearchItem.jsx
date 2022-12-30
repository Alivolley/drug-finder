import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import pic from "./../../assets/Images/1.jpg";

export default function SearchItem() {
   return (
      <SearchItemWrapper to="/">
         <Image src={pic} />
         <Describes>
            <Title>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</Title>
            <Text>
               لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که
               لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده،
               شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد
               کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی،
               و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
            </Text>
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

const Text = styled.div`
   line-height: 2.8rem;
   font-size: 1.5rem;
   margin-top: 3rem;
`;
