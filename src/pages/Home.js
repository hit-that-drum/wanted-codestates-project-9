import styled from "styled-components";
import Header from "../components/Header";
import LoadingIndicator from "../components/LoadingIndicator";
import backgroundImg from "../images/pattern_checkerboard.png";
import leftImg from "../images/covid_left.png";
import rightImg from "../images/covid_right.png";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const API_KEY = process.env.REACT_APP_NEXON_API_KEY;
  const navigate = useNavigate();
  const [searchName, setSearchName] = useState("");

  const handleSearchName = async () => {
    try {
      const response = await axios.get(
        `https://cors-anywhere.herokuapp.com/https://api.nexon.co.kr/kart/v1.0/users/nickname/${searchName}`, {
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
      navigate(`/${response.data.name}`);
    } catch (err) {
      console.log(err, "error");
    }
  }

  return (
    <>
      <Header />
      <HomeBox>
        <HomeBackgroundImg src={backgroundImg} />
        <IntroBox>
            <IntroFirst>넥슨 오픈API 기반</IntroFirst>
            <IntroSecond>카트라이더 전적 검색</IntroSecond>
            <IntroThird>사회적거리두기</IntroThird>
        </IntroBox>
        <LeftCovidImg src={leftImg} />
          <HomeSearch 
            placeholder="카트라이더 닉네임을 입력"
            type="text"
            onChange={(e) => {setSearchName(e.target.value)}}
            onKeyUp={(e) => {
              if (e.key === "Enter") {
                handleSearchName();
              }
            }}
          />
        <RightCovidImg src={rightImg} />
      </HomeBox>
    </>
  );
};

const HomeBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`
const HomeBackgroundImg = styled.img`
  width: 100%;
  height: 80%;
  position: absolute;
  z-index: -9999;
`

const IntroBox = styled.div`
  margin-top: 6rem;

  animation-name: fromtop;
  animation-duration: 0.5s;
  animation-timing-function: linear;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;

  @keyframes fromtop {
    0% {
      opacity: 0;
      transform: translate3d(0, -100%, 0);
    }
    100% {
      opacity: 1;
      transform: translateZ(0);
    }
  }
  `
const IntroFirst = styled.div`
  color: #ffffff;
  font-size: 2rem;
  text-align: center;
  margin: 0.5rem 0 0.5rem 0;
  `
const IntroSecond = styled(IntroFirst)`
  font-size: 3rem;
  `
const IntroThird = styled(IntroFirst)`
  color: #ffffff;
  font-size: 1.2rem;
  background-color: #00008B;
  opacity: 0.4;
  border-radius: 1rem;
  width: 80%;
  margin-left: 2.5rem;
  `

const LeftCovidImg = styled.img`
  position: absolute;
  width: 30%;
  height: 50%;
  top: 45%;
  left: -3%;

  animation-name: fromleft;
  animation-duration: 0.5s;
  animation-timing-function: linear;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;

  @keyframes fromleft {
    0% {
      opacity: 0;
      transform: translate3d(-100%, 0, 0);
    }
    100% {
      opacity: 1;
      transform: translateZ(0);
    }
  }
  `
const RightCovidImg = styled.img`
  position: absolute;
  width: 30%;
  height: 50%;
  top: 45%;
  left: 72%;

  animation-name: fromright;
  animation-duration: 0.5s;
  animation-timing-function: linear;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;

  @keyframes fromright {
    0% {
      opacity: 0;
      transform: translate3d(100%, 0, 0);
    }
    100% {
      opacity: 1;
      transform: translateZ(0);
    }
  }
  `
const HomeSearch = styled.input`
  width: 5%;
  height: 10%;
  top: 72%;
  left: 50%;
  border-radius: 33.5px;
  border: 4px solid #ffffff;
  padding: 0 0 0 3rem;
  position: absolute;
  color: #ffffff;
  transform: translate(-50%,-50%);
  background: transparent;
  font-size: 2rem;
  animation-name: stretch;
  animation-duration: 0.5s;
  animation-timing-function: linear;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  
  @keyframes stretch {
    0% {
      width: 5%;
    }
    100% {
      width: 45%;
    }
  }

  &::placeholder {
    font-size: 1.5rem;
    color: #8cafe7;
    :hover {
      color: #ffffff;
    }
  }
  :focus {
    outline:none;
    ::placeholder {
      color: transparent;
    }
  }
`

export default Home;