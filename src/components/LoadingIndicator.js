import styled from "styled-components";

const LoadingIndicator = () => {
  return (
    <LoadingBackground>
      <Ring>LOADING
        <span></span>
      </Ring>
    </LoadingBackground>
  );
};

const LoadingBackground = styled.div`
  background-color: #ffffff;
  position: absolute;
  z-index: 10;
`

const Ring = styled.div`
  z-index: 20;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  width: 15rem;
  height: 15rem;
  background: transparent;
  border: 1rem solid #23a2f7;
  border-radius: 50%;
  text-align: center;
  line-height: 13.5rem;
  font-size: 2rem;
  font-weight: 1000;
  color: #ffffff;
  letter-spacing: 0.3rem;
  box-shadow: 0 0 2rem rgba(0,0,0,.5);
  text-shadow: 0.2rem 0.2rem 0.2rem lightblue;
  :before {
    content: '';
    position: absolute;
    top: -1rem;
    left: -1rem;
    width: 115.5%;
    height: 115.5%;
    border: 1rem solid transparent;
    border-top: 1rem solid #002473;
    border-right: 1rem solid #002473;
    border-radius: 50%;
    animation: animateC 3s linear infinite;
}
  span
  {
    display: block;
    position: absolute;
    top: calc(50% - 0.2rem);
    left: 50%;
    width: 50%;
    height: 0.4rem;
    background: transparent;
    transform-origin: left;
    animation: animate 3s linear infinite;
  }
  span:before
  {
    content: '';
    position: absolute;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    background: #002473;
    top: 0rem;
    right: -1.4rem;
    box-shadow:0 0 2rem #002473;
  }
  @keyframes animateC
  {
    0%
    {
      transform:rotate(0deg);
    }
    100%
    {
      transform:rotate(360deg);
    }
  }
  @keyframes animate
  {
    0%
    {
      transform:rotate(45deg);
    }
    100%
    {
      transform:rotate(405deg);
    }
  }
`

export default LoadingIndicator;