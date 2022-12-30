import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function SectionTitle() {
   return <SectionTitleWrapper to="/">Pilliverse</SectionTitleWrapper>;
}

const SectionTitleWrapper = styled(Link)`
   direction: rtl;
   font-size: 5rem;
   color: #0abead;
   font-weight: 700;
   font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande", "Lucida Sans", Arial, sans-serif !important;
   padding: 3rem;
   text-decoration: none;
`;
