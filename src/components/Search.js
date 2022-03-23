import React, { Dispatch, SetStateAction, useEffect } from 'react'
import styled from 'styled-components'
import { BiSearch } from "react-icons/bi"


const SearchBar = ({ setQuery }) => {
  // const onChangeSearch = (e) =>
  //   setQuery(e.target.value)

  // useEffect(() => {
  //   return () => {
  //     setQuery('')
  //   }
  // }, [setQuery])
  // onChange={onChangeSearch}

  return (
    <SearchWrapper>
      <SearchInput placeholder="닉네임 검색"  />
      <SearchBtn>
        <BiSearch 
          size="2rem" 
          color="#8cafe7"
          style={{ 
            margin: "1rem 1rem 1rem 0",
            position: "absolute",
            left: "24rem",
            top: "-0.3rem"
          }}/>
      </SearchBtn>
    </SearchWrapper>
  )
}

export default SearchBar

const SearchWrapper = styled.div`
  padding: 0 0 0 0;
  width: 30%;
  display: flex;
  flex-direction: row;
  position: relative;
`

const SearchInput = styled.input`
  border-style: none;
  background-color: #015fcc;
  padding: 16px;
  margin-top: 10px;
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