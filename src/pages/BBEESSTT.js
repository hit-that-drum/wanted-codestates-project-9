import React from 'react';
import { useSelector } from 'react-redux';
import styled from "styled-components";
import Header from "../components/Header";


const BBEESSTT = () => {
const name = useSelector((state) => state.userData.userNameSet);  

  return (
    <>
      <Header />
      <NameDiv>{name}</NameDiv>
    </>
  );
};

const NameDiv = styled.div`

`

export default BBEESSTT;

