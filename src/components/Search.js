import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { BiSearch } from "react-icons/bi"
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux';
import { usernameSet, finishMatchPerSet, winMatchPerSet, retiredMatchPerSet, matchRankFiftySet, matchRankAllSet } from "../redux/slice";


const SearchBar = () => {
  const API_KEY = process.env.REACT_APP_NEXON_API_KEY;
  const [searchName, setSearchName] = useState("");
  // const [userData, setUserData] = useState(
  //   {
  //     username: "",
  //     finishMatchPer: 0,
  //     winMatchPer: 0,
  //     retiredMatchPer: 0,
  //     matchRankFifty: 0,
  //     matchRankAll: 0
  //   }
  // )
  
  const { userData } = useSelector((state) => state.userData);
  const dispatch = useDispatch();

  const handleSearchName = async () => {
    if (searchName === "") {
      alert("아이디를 입력해주세요");
    } 
    else {
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
          `https://cors-anywhere.herokuapp.com/https://api.nexon.co.kr/kart/v1.0/users/${userAccessId}/matches?start_date=&end_date= &offset=0&limit=200&match_types=`, {
              headers: {
                  Authorization: API_KEY
                }
              }
          )
        
        const allMatchLength = matchdata.data.matches[0].matches.length;
        const playerInfo = matchdata.data.matches[0];

        let matchWinSum = 0;
        let matchRetiredSum = 0;
        let matchRankAllSum = 0;
        for (let i = 0; i < allMatchLength; i++) {
          matchWinSum += Number(playerInfo.matches[i].player.matchWin);
          matchRetiredSum += Number(playerInfo.matches[i].player.matchRetired);
          if (playerInfo.matches[i].player.matchRetired === "1") {
            matchRankAllSum += 0;
          } else {
            matchRankAllSum += Number(playerInfo.matches[i].player.matchRank);
          }
        }
        let matchRankFiftySum = 0;
        let matchNumberFiftySum = 0;
        for (let j = 0; j < 50; j++) {
          if (playerInfo.matches[j].player.matchRetired === "1") {
            matchRankFiftySum += 0;
          } else {
            matchRankFiftySum += Number(playerInfo.matches[j].player.matchRank);
            matchNumberFiftySum += Number(playerInfo.matches[j].player.matchWin);
          }
        }

        // 완주율 = ( 전체 경기 수 - 리타이어 경기 수 )/ 전체 경기 수 * 100
        let finishMatchPer = Math.round(( allMatchLength - matchRetiredSum ) / allMatchLength * 100);

        // 승률 = 승리 경기 수 / 전체 경기 수 * 100
        let winMatchPer = Math.round( matchWinSum / allMatchLength * 100 );

        // 리타이어율 = 리타이어 경기 수 / 전체 경기 수 * 100
        let retiredMatchPer = Math.round( matchRetiredSum / allMatchLength * 100 );

        // 평균 순위 최근 50경기 = 최근 50경기 순위 합 / 50
        let matchRankFifty = matchRankFiftySum / matchNumberFiftySum;
        matchRankFifty = Number(matchRankFifty.toFixed(2));

        // 평균 순위 최근 200경기 = 지난 200경기 순위 합 / 200
        let matchRankAll = matchRankAllSum / ( allMatchLength - matchRetiredSum );
        matchRankAll = Number(matchRankAll.toFixed(2));

        // setUserData({
        //   username: searchName,
        //   finishMatchPer: finishMatchPer,
        //   winMatchPer: winMatchPer,
        //   retiredMatchPer: retiredMatchPer,
        //   matchRankFifty: matchRankFifty,
        //   matchRankAll: matchRankAll
        // })

        const setUserData = () => {
          dispatch(usernameSet(searchName));
          dispatch(finishMatchPerSet(finishMatchPer));
          dispatch(winMatchPerSet(winMatchPer));
          dispatch(retiredMatchPerSet(retiredMatchPer));
          dispatch(matchRankFiftySet(matchRankFifty));
          dispatch(matchRankAllSet(matchRankAll));
        }

        setUserData();


        } catch (err) {
          console.log(err, "error");
        }
    }
  }

  // useEffect(() => {
  //   console.log(userData, "userData")
  // }, [userData]);

  return (
    <SearchWrapper>
      <SearchInput 
        placeholder="닉네임 검색"
        onChange={(e) => {setSearchName(e.target.value)}}
        onKeyUp={(e) => {
          if (e.key === "Enter") {
            handleSearchName();
          }
        }} />
      <SearchBtn>
        <BiSearch 
          onClick={handleSearchName}
          size="2rem" 
          color="#8cafe7"
          style={{ 
            margin: "1rem 1rem 1rem 0",
            position: "absolute",
            left: "16rem",
            top: "-1rem"
          }}/>
      </SearchBtn>
    </SearchWrapper>
  )
}

export default SearchBar

const SearchWrapper = styled.div`
  padding: 0 0 0 0;
  width: 20%;
  display: flex;
  flex-direction: row;
  position: relative;
`

const SearchInput = styled.input`
  border-style: none;
  background-color: #015fcc;
  padding: 16px;
  margin-top: 0px;
  width: 100%;
  height: 2.5rem;
  border-bottom: 0.1rem solid #8cafe7;

  &::placeholder {
    font-size: 1rem;
    color: #8cafe7;
    :hover {
      color: #ffffff;
    }
  }
  :focus {
    outline:none;
    border-bottom: 0.1rem solid #ffffff;
    ::placeholder {
      color: transparent;
    }
  }
`

const SearchBtn = styled.button`
  :hover {
    color: #ffffff;
  }
`