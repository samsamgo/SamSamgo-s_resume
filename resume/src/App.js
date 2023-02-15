import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import yadon from "../src/Asset/yadonchis.png";

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

        <contentdiv>
          <Intorducediv>
            <introdiv>
              개발자의 성공 여부는 <stdiv>비즈니스의</stdiv> 미래 가치에 의해
              결정된다고 믿는 주니어 프론트엔드 개발자 <stdiv>장경욱</stdiv>
              입니다.
            </introdiv>

            <namedesdiv>
              <namediv>Github</namediv>
              <descriptiondiv>
                <a
                  href="https://github.com/samsamgo"
                  target="_blank"
                  rel="noreferrer"
                >
                  github.com/samsamgo
                </a>
              </descriptiondiv>
              <namediv>Blog</namediv>
              <descriptiondiv>
                <a
                  href="https://samsamgoo.tistory.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  samsamgoo.tistory.com
                </a>
              </descriptiondiv>
            </namedesdiv>
          </Intorducediv>
        </contentdiv>
        <hr />
        <titlediv>INTRODUCTION</titlediv>
        <secondtitlediv>
          똥인지 된장인지 '한 번은' 찍어보는 개발자
        </secondtitlediv>
        <contentdiv>
          편견에 사로잡혀 섣불리 판단하지 않습니다.
          <br />
          '원래 그렇게 한다'라는 말은 통하지 않습니다.
          <br />
          React를 왜? 사용하는지와 같은 기초적인 부분도 객관적이고 타당한 근거가
          나올 때까지 조사하여 정리하여 블로그에 남긴 후 이해하기 위해
          노력합니다.
          <br />
          <br />
          블로그의 글을 완성하기까지 길게는 한 달까지도 걸렸지만 정리한 후 처음
          보는 문제가 발생해도 정리한 내용을 찾아 쉽게 해결할 수 있었습니다.
        </contentdiv>
        <secondtitlediv>모르는 것은 알 때까지 묻는 개발자.</secondtitlediv>
        <contentdiv>
          내가 모른다는 것에 부끄러움을 느끼지 않습니다.
          <br />
          모든 새로운 것은 '질문'에서 시작됩니다.
          <br />
          나보다 선배이든 후배이든 모르는 것이 확실하게 전달되어 내 머릿속에
          정리될 때까지 질문하고 이해한 내용을 확인하기 위해 재차 질문합니다.
          <br />
          <br />
          다양한 질문을 통해 소통하는 것이 익숙하고 피드백 받는 것을 좋아합니다.
        </contentdiv>
        <secondtitlediv>
          서로 협력하는 작은 팀이 세상을 바꿀 수 있다는 것을 믿어 의심치 않는
          개발자
        </secondtitlediv>
        <contentdiv>
          개발자에게 있어 가장 중요한 역량은 협업이라고 생각합니다.
          <br />
          만약 비효율적인 프로세스가 협력을 방해한다면 개인적인 일보다
          최우선으로 이 점을 해결해야 한다고 생각합니다.
          <br />
          <br />
          팀의 문제가 발생하면 그 즉시 모든 팀원과 모든 내용을 공유하고 빠른
          시간에 개선점을 찾기 위해 노력합니다.
        </contentdiv>
        <hr />
        <titlediv>STUDY</titlediv>
        <contenttitlediv>
          <tldiv>Blog</tldiv>
          <cdiv>
            <csectitlediv>개인 기술&회고 블로그</csectitlediv>
            <ccontentdiv>
              <ul>
                <li>
                  보고 듣는 그 순간 모든 것을 기억하기란 불가능에 가까습니다.
                  그렇기에 매 순간순간 보고 들은 내용을 정리하기 위해 블로그를
                  작성하고 있습니다.
                </li>
              </ul>
              <ul>
                <li>
                  공부했던 내용과, 그날 하루를 회고하는 블로그를 꾸준히 작성하고
                  있습니다.
                  <ul>
                    <li>
                      <a
                        href="https://samsamgoo.tistory.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        samsamgoo.tistory.com
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </ccontentdiv>
          </cdiv>
        </contenttitlediv>
        <hr />

        <titlediv>SKILL</titlediv>
        <contenttitlediv>
          <tldiv>Front-end</tldiv>
          <cdiv>
            <ul>
              <li>javascript , HTML , CSS</li>
            </ul>
            <ul>
              <li>React</li>
            </ul>
            <ul>
              <li>Redux</li>
            </ul>
            <ul>
              <li>Webpack</li>
            </ul>
          </cdiv>
        </contenttitlediv>
        <contenttitlediv>
          <tldiv>Back-end</tldiv>
          <cdiv>
            <ul>
              <li>GraphQL , Json-server </li>
            </ul>
            <ul>
              <li>Express.js</li>
            </ul>
            <ul>
              <li>Node.js</li>
            </ul>
            <ul>
              <li>AWS</li>
            </ul>
          </cdiv>
        </contenttitlediv>
        <contenttitlediv>
          <tldiv>Etc</tldiv>
          <cdiv>
            <ul>
              <li>Ubuntu, VS Code</li>
            </ul>
            <ul>
              <li>Git / Github / GitHub Desktop</li>
            </ul>
            <ul>
              <li>Postman , Figma</li>
            </ul>
            <ul>
              <li>Ruby , C++ , Python , ES6</li>
            </ul>
          </cdiv>
        </contenttitlediv>

        <hr />
        <titlediv>PROJECT</titlediv>
        <contenttitlediv>
          <trdiv>2023.1.3 ~ 2023.1.31</trdiv>
          <cdiv>
            <csectitlediv>아모나(AMOONA)</csectitlediv>
            <cseconttitlediv>Description</cseconttitlediv>
            <ccontentdiv>
              주변의 사람들과 함께 운동할 수 있는 웹으로 위치를 기반으로 근처의
              모임 장소를 지도로 나타낼 수 있는 웹(개선 필요)
            </ccontentdiv>
            <ccontentdiv>
              🔗(
              <a
                href="http://d2zj5lc7bk5ajt.cloudfront.net/"
                title="프로젝트 배포 링크"
                target="_blank"
                rel="noreferrer"
              >
                배포링크
              </a>
              |
              <a
                href="https://github.com/codestates-seb/seb41_main_031"
                title="프로젝트 레파지토리"
                target="_blank"
                rel="noreferrer"
              >
                Repository
              </a>
              |
              <a
                href="https://www.notion.so/codestates/f8ea3a2e92914268bc743c5cfbee6bab?pvs=4"
                title="프로젝트 기획서"
                target="_blank"
                rel="noreferrer"
              >
                기획서
              </a>
              )
            </ccontentdiv>
            <cseconttitlediv>What did I Do</cseconttitlediv>
            <ccontentdiv>
              <li>
                UseEffect Hook을 사용하여 Scroll position값에 따라 animation
                효과 추가
              </li>
              <li>
                카카오 map API와 redux-toolkit 주솟값을 저장하여 출력하는 기능
                추가
              </li>
              <li>promise객체 Axios로 받아와 arr.map()을 사용하여 UI구성</li>
              <li>메인/게시글등록/게시글조회 페이지 UI 제작 및 개편</li>
            </ccontentdiv>
            <cseconttitlediv>Tech Stack</cseconttitlediv>
            <ccontentdiv>
              React, Redux, Kakao map api, React-router, Axios, CSS animation
            </ccontentdiv>
          </cdiv>
        </contenttitlediv>
        <contenttitlediv>
          <trdiv>2022.12.15 ~ 2023.01.02</trdiv>
          <cdiv>
            <csectitlediv>Stack overflow</csectitlediv>
            <cseconttitlediv>Description</cseconttitlediv>
            <ccontentdiv>Stack overflow 클론코딩</ccontentdiv>
            <ccontentdiv>
              🔗(
              <a
                href="http://3.38.108.219:3000/"
                title="프리 프로젝트 배포 링크"
                target="_blank"
                rel="noreferrer"
              >
                배포링크
              </a>
              |
              <a
                href="https://github.com/codestates-seb/seb41_pre_002"
                title="프리 프로젝트 레파지토리"
                target="_blank"
                rel="noreferrer"
              >
                Repository
              </a>
              |
              <a
                href="https://www.notion.so/codestates/2-71cc536afabc4960b70414acd74213ea?pvs=4"
                title="프리 프로젝트 기획서"
                target="_blank"
                rel="noreferrer"
              >
                기획서
              </a>
              )
            </ccontentdiv>
            <cseconttitlediv>What did I Do</cseconttitlediv>
            <ccontentdiv>
              <li>localstorage로 새로고침시 State값이 날라가는 문제 해결</li>
              <li>SCSS문법을 도입해서 CSS를 개편하여 컴포넌트 양을 줄임</li>
              <li>마이 페이지/ 게시글/footer UI제작 및 개편</li>
            </ccontentdiv>
            <cseconttitlediv>Tech Stack</cseconttitlediv>
            <ccontentdiv>React, Redux, Styled Component, Axios</ccontentdiv>
          </cdiv>
        </contenttitlediv>
        <hr />
        <titlediv>EDUCATION</titlediv>
        <contenttitlediv>
          <trdiv>2022.8.19 ~ 2023.2.10</trdiv>
          <cdiv>
            <csectitlediv>코드스테이츠 (Code States)</csectitlediv>
            <ccontentdiv>
              <ul>
                <li>React를 사용한 웹 개발 학습</li>
              </ul>
              <ul>
                <li>파트너와 함께 실습 진행(페어 프로그래밍)</li>
              </ul>
              <ul>
                <li>20주 동안 매일 알고리즘 문제 풀이</li>
              </ul>
              <ul>
                <li>협업 프로젝트 2회 진행</li>
              </ul>
            </ccontentdiv>
          </cdiv>
        </contenttitlediv>
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
    font-size: 6rem;
    stdiv {
      font-size: 6rem;
      font-weight: lighter;
      color: #ff9a9e;
    }
  }
  titlediv {
    width: 400px;
    font-size: 2.5rem;
    font-weight: bolder;
    text-align: LEFT;
    margin: 5% 40% 5% 0px;
  }
  secondtitlediv {
    width: 80%;
    padding: 2% 5%;
    background-color: #ff9a9e;
    color: white;
    border-radius: 15px;
    font-size: 1.5rem;
    font-weight: bolder;
  }
  contenttitlediv {
    width: 75%;
    display: flex;
    flex-direction: row;
    font-weight: bolder;
    margin: 5% 0% 5% 0px;
    a {
      margin: 0% 3% 0% 3%;
      color: gray;
    }
    trdiv {
      width: 30%;
      color: gray;
      text-align: right;
      margin: 0% 10% 0% 0px;
      font-size: 1.5rem;
    }
    tldiv {
      width: 20%;
      color: gray;
      text-align: left;
      margin: 0% 10% 0% 0px;
      font-size: 1.5rem;
    }
    cdiv {
      width: 70%;
      display: flex;
      flex-direction: column;
      ctitlediv {
        font-size: 2.5rem;
      }
      csectitlediv {
        font-size: 1.5rem;
      }
      cseconttitlediv {
        font-size: 1.3rem;
        margin-top: 3%;
      }
      ccontentdiv {
        margin-top: 1%;
        font-size: 0.8rem;
        ul {
          display: flex;
          flex-direction: row;
          margin: 3% 0% 3% 0%;
          li {
            list-style-position: inside;
          }
        }
      }
    }
  }
  contentdiv {
    width: 75%;
    display: flex;
    flex-direction: column;
    margin: 2% 0% 5% 0px;
    font-size: 1.2rem;
    font-weight: 600;
  }
  hr {
    margin: 5% 0px;
    width: 80%;
    height: 3px;
    background-color: pink;
    border: none;
  }
`;

const Headdiv = styled.div`
  width: 100%;
  height: 2rem;
  background-image: linear-gradient(
    to right,
    #ff9a9e 0%,
    #fecfef 99%,
    #fecfef 100%
  );
`;

const Intorducediv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 5% 0% 5% 0%;
  introdiv {
    width: 60%;
    font-size: 1rem;
    stdiv {
      font-size: 1.5rem;
    }
  }
  namedesdiv {
    display: flex;
    flex-direction: column;
    margin-left: auto;
  }
  namediv {
    font-size: 1.3rem;
    color: #ff9a9e;
  }
  descriptiondiv {
    font-size: 0.7rem;
    a {
      color: gray;
      text-decoration: none;
    }
  }
`;

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0px 0px 0px 0px;
    padding: 0px 0px 0px 0px;
    box-sizing: border-box;
        font-family: "Gothic A1", sans-serif;
            @media screen and (max-width: 600px) {
   font-size:10px;
    }
    @media screen and (min-width: 601px) and (max-width: 1126px) {
    font-size:10px;
    }
    @media screen and (min-width: 1126px)and (max-width: 1526px) {
      font-size: 19px;
    }
    @media screen and (min-width: 1527px)and (max-width: 2189px) {
      font-size: 27px;
    }
    @media screen and (min-width: 2190px) {
      font-size: 35px;
    }
    }
`;
