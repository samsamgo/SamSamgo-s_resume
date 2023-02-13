import React from "react";
import styled, { createGlobalStyle } from "styled-components";

function App() {
  return (
    <>
      <GlobalStyle />
      <Headdiv />
      <Appdiv>
        <hellodiv>
          반갑습니다, <br />
          저는 <stdiv>장경욱</stdiv>입니다.
        </hellodiv>
        <titlediv>Contact🤝</titlediv>
        <contentdiv>
          <i class="fa fa-star"></i>
        </contentdiv>
      </Appdiv>
    </>
  );
}

export default App;

const Appdiv = styled.div`
  width: 100%;
  height: auto;
  padding: 40px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  hellodiv {
    font-weight: bolder;
    font-size: 120px;
    stdiv {
      font-weight: lighter;
      color: #ff9a9e;
    }
  }
  titlediv {
    font-size: 80px;
    font-weight: bolder;
    margin: 5% 25% 0px 0px;
  }
  contentdiv {
    display: flex;
    flex-direction: column;
    margin: 5% 25% 0px 0px;
    i {
      font-size: 20px;
      font-weight: 100;
    }
  }
`;

const Headdiv = styled.div`
  width: 100%;
  height: 20px;
  background-image: linear-gradient(
    to right,
    #ff9a9e 0%,
    #fecfef 99%,
    #fecfef 100%
  );
`;

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0px 0px 0px 0px;
    padding: 0px 0px 0px 0px;
    box-sizing: border-box;
        font-family: "Gothic A1", sans-serif;
        
    }
`;
