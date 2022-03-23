import { useState } from "react";
import styled from "styled-components";
import SearchBar from "./Search";
import kartLogo from "../images/logo_kart.png";
import tmiLogo from "../images/tmi_logo_default_b.svg";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"; 

import axios from "axios";


const Header = () => {
  const API_KEY = process.env.REACT_APP_NEXON_API_KEY;
  const [currentTab, setCurrentTab] = useState(0);

  const tabContent = [
    { name: "HOME", content: "This is HOME" },
    { name: "RANKING", content: "This is RANKING" }
  ]

  const selectTabHandler = (index) => {
    setCurrentTab(index);
  }

  const handleGetData = async () => {
    try {
      const response = await axios.get(
        `https://cors-anywhere.herokuapp.com/https://api.nexon.co.kr/kart/v1.0/users/nickname/BBEESSTT`, {
          headers: {
            Authorization: API_KEY
          }
        }
      )

      const userAccessId = response.data.accessId;
      
      const matchdata = await axios.get(
          `https://cors-anywhere.herokuapp.com/https://api.nexon.co.kr/kart/v1.0/users/${userAccessId}/matches?start_date=&end_date= &offset=0&limit=10&match_types=`, {
            headers: {
              Authorization: API_KEY
            }
          }
      )
      console.log(matchdata.data.matches[0].matches, "matchdata");
    } catch (err) {
      console.log(err, "error");
    }
  }

  return (
    <>
    <LogoBox>
      <KartLogo src={kartLogo} />
      <TmiLogo src={tmiLogo} />
      <KartHomepageBtn href="https://kart.nexon.com/Main/Index.aspx" target="_blank">
        카트라이더 홈페이지 바로가기
      </KartHomepageBtn>
    </LogoBox>
    <LineBox>
      {tabContent.map((ele, index) =>{
        return (
          <div 
            key={index}
            onClick={() => {selectTabHandler(index)}}
          >
            {ele.name}
          </div>
        )
      } )}
      <SearchBar />
    </LineBox>
      <div>{tabContent[currentTab].content}</div>
      <div onClick={handleGetData}>click</div>
      </>
  );
};

const LogoBox = styled.div`
  display: flex;
  flex-direction: row;
`
const KartLogo = styled.img`
  margin: 1rem 0 1rem 13.5rem;
`
const TmiLogo = styled.img`
  margin: 0 0 0 2rem;
`
const KartHomepageBtn = styled.a`
  margin: 0 0 0 47%;
  font-size: 0.8rem;
  color: gray;
  text-align: center;
  line-height: 3.7rem;
`

const LineBox = styled.div`
  background-color: #015fcc;
  color: #FFFFFF;
  margin: 0.5rem 0 0 0 ;
  height: 4.5rem;

  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  align-content: flex-end;
`

export default Header;