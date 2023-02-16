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

        <contentdiv>
          <Intorducediv>
            <introdiv>
              성공적인 결과물을 만들기 위해서는 <stdiv>비즈니스의</stdiv> 미래
              가치를 고려해야 합니다. 고객의 요구사항을 충족시키기 위해 받은
              피드백을 모두 기록하는 것은 주니어 개발자인 저,
              <stdiv>장경욱</stdiv>의 습관입니다.
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
          기초적인 부분도 객관적이고 타당한 근거가 나올 때까지 조사하여 정리하여
          블로그에 남긴 후 이해하기 위해 노력합니다.
          <br />
          <br />
          실제로 Redux에 관한{" "}
          <a
            href="https://samsamgoo.tistory.com/98"
            target="_blank"
            rel="noreferrer"
          >
            글
          </a>
          을 완성하기까지 이주일 정도에 시간이 걸렸습니다.
          <br />
          이제는 Redux를 사용하여 애플리케이션의 상태를 효과적으로 관리할 수
          있으며, 이를 통해 코드 유지 보수성과 확장성을 향상시킬 수 있습니다.
        </contentdiv>
        <secondtitlediv>모르는 것은 알 때까지 묻는 개발자.</secondtitlediv>
        <contentdiv>
          모른다는 것에 부끄러움을 느끼지 않습니다.
          <br />
          모든 새로운 것은 '질문'에서 시작됩니다.
          <br />
          선배이든 후배이든 모르는 것이 확실하게 전달되어 내 머릿속에 정리될
          때까지 질문하고 이해한 내용을 확인하기 위해 재차 질문합니다.
          <br />
          <br />
          비대면 플랫폼을 통한 소통도 저에게 익숙하고, 필요에 따라 블로그
          댓글에도 많이 참여하여 피드백을 주고 받는 것을 좋아합니다.
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
                    <a
                      href="https://samsamgoo.tistory.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      samsamgoo.tistory.com
                    </a>
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
              <li>Javascript, Html5, CSS3</li>
            </ul>
            <ul>
              <li>React</li>
            </ul>
            <ul>
              <li>Redux</li>
            </ul>
            <ul>
              <li>Axios</li>
            </ul>
          </cdiv>
        </contenttitlediv>
        <contenttitlediv>
          <tldiv>Back-end</tldiv>
          <cdiv>
            <ul>
              <li>GraphQL, JSON_Server</li>
            </ul>
            {/* <ul>
              <li>
                <img src="https://img.shields.io/badge/express.js-000000?style=for-the-badge&logo=Express&logoColor=white" />
              </li>
            </ul> */}
            <ul>
              <li>AWS</li>
            </ul>
          </cdiv>
        </contenttitlediv>
        <contenttitlediv>
          <tldiv>Etc</tldiv>
          <cdiv>
            <ul>
              <li>Visual Studio Code</li>
            </ul>
            <ul>
              <li>GitHub</li>
            </ul>
            <ul>
              <li>Postman, Figma</li>
            </ul>
            <ul>
              <li>C++, Python</li>
            </ul>
          </cdiv>
        </contenttitlediv>

        <hr />
        <titlediv>PROJECT</titlediv>
        <contenttitlediv>
          <trdiv>2023.2.13 ~ </trdiv>
          <cdiv>
            <csectitlediv>Samsamgo's Profile</csectitlediv>
            <cseconttitlediv>Description</cseconttitlediv>
            <ccontentdiv>
              이력서 내용을 바탕으로 만드는 Profile(제작중....)
            </ccontentdiv>

            <ccontentdiv>
              🔗(
              <a
                href="https://samsamgo.netlify.app/"
                title="Profile 배포 링크"
                target="_blank"
                rel="noreferrer"
              >
                배포링크
              </a>
              |
              <a
                href="https://github.com/samsamgo/Profile"
                title="Profile 레파지토리"
                target="_blank"
                rel="noreferrer"
              >
                Repository
              </a>
              )
            </ccontentdiv>
            <cseconttitlediv>What did I Do</cseconttitlediv>
            <ccontentdiv>
              <ul>
                <li>
                  랜덤 함수를 이용하여 일정한 시간 간격으로 배경 이미지가
                  변경되도록 구현하였습니다.
                </li>
              </ul>
              <ul>
                <li>
                  유튜브에서 영상을 가져와 로딩했을 때, 해당 영상에 대한 음악이
                  바로 재생되도록 구현하였습니다.
                </li>
              </ul>
              <ul>
                <li>
                  UI를 반응형으로 개편하였습니다. 이를 통해 다양한 기기와 화면
                  크기에서도 웹사이트를 보다 쉽고 효율적으로 사용할 수 있게
                  되었습니다.
                </li>
              </ul>
            </ccontentdiv>
            <cseconttitlediv>Tech Stack</cseconttitlediv>
            <ccontentdiv>
              <img
                src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black"
                alt="d"
              />
              <img
                src="https://img.shields.io/badge/React Router-CA4245C?style=for-the-badge&logo=React Router&logoColor=black"
                alt="d"
              />
              <br />
              <img
                src="https://img.shields.io/badge/CSS3 Animation-blue?style=for-the-badge&logo=CSS3&logoColor=black"
                alt="d"
              />
              <img
                src="https://img.shields.io/badge/styled components-DB7093?style=for-the-badge&logo=styled-components&logoColor=black"
                alt="d"
              />
              <br />

              <img
                src="https://img.shields.io/badge/YouTube Data Api-FF0000?style=for-the-badge&logo=YouTube&logoColor=black"
                alt="d"
              />
            </ccontentdiv>
          </cdiv>
        </contenttitlediv>
        <contenttitlediv>
          <trdiv>2023.1.3 ~ 2023.1.31</trdiv>
          <cdiv>
            <csectitlediv>아모나(AMOONA)</csectitlediv>
            <cseconttitlediv>Description</cseconttitlediv>
            <ccontentdiv>
              주변의 사람들과 함께 운동할 수 있는 웹으로 위치를 기반으로 근처의
              모임 장소를 지도로 나타낼 수 있는 웹
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
              |
              <a
                href="https://samsamgoo.tistory.com/167"
                title="프로젝트 회고 블로깅"
                target="_blank"
                rel="noreferrer"
              >
                후기
              </a>
              )
            </ccontentdiv>
            <cseconttitlediv>What did I Do</cseconttitlediv>
            <ccontentdiv>
              <ul>
                <li>
                  useEffect Hook을 사용하여 스크롤 위치 값을 감지하고, 이를
                  기반으로 애니메이션을 추가했습니다. 이를 통해 페이지의 특정
                  요소를 부드럽게 움직이거나 변형시키는 효과를 줄 수 있었습니다.
                </li>
              </ul>
              <ul>
                <li>
                  Redux Toolkit을 이용하여 카카오 맵 API에서 반환한 좌표 값을
                  저장하고 출력하는 기능을 추가했습니다. 이를 통해 지도에서 특정
                  위치를 선택하고 해당 위치의 좌표를 저장하여 나중에 다시 참조할
                  수 있게 되었습니다.
                </li>
              </ul>
              <ul>
                <li>
                  Axios를 이용하여 Promise 객체를 받아온 후, 해당 객체로 map()
                  메서드를 사용하여 UI를 구성하였습니다. 이를 통해 비동기적으로
                  데이터를 가져와 화면을 동적으로 출력할 수 있게 되었습니다.
                </li>
              </ul>
              <ul>
                <li>
                  메인 페이지와 게시글 등록 페이지, 게시글 조회 페이지의 UI를
                  제작하고 개편했습니다. 이를 통해 사용자가 편리하게 컨텐츠를
                  검색하고 작성할 수 있도록 UI를 개선하였습니다.
                </li>
              </ul>
            </ccontentdiv>
            <cseconttitlediv>Tech Stack</cseconttitlediv>
            <ccontentdiv>
              <img
                src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black"
                alt="d"
              />
              <img
                src="https://img.shields.io/badge/React Router-CA4245C?style=for-the-badge&logo=React Router&logoColor=black"
                alt="d"
              />
              <img
                src="https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=Redux&logoColor=black"
                alt="d"
              />
              <br />
              <img
                src="https://img.shields.io/badge/CSS3 Animation-blue?style=for-the-badge&logo=CSS3&logoColor=black"
                alt="d"
              />
              <img
                src="https://img.shields.io/badge/styled components-DB7093?style=for-the-badge&logo=styled-components&logoColor=black"
                alt="d"
              />
              <br />
              <img
                src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=Axios&logoColor=black"
                alt="d"
              />

              <img
                src="https://img.shields.io/badge/Kakao Map Api-FFCD00?style=for-the-badge&logo=Kakao&logoColor=black"
                alt="d"
              />
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
              |
              <a
                href="https://samsamgoo.tistory.com/151"
                title="프리 프로젝트 회고 블로깅"
                target="_blank"
                rel="noreferrer"
              >
                후기
              </a>
              )
            </ccontentdiv>
            <cseconttitlediv>What did I Do</cseconttitlediv>
            <ccontentdiv>
              <ul>
                <li>
                  localStorage를 이용하여 새로고침 시에도 상태 값이 유지되도록
                  문제를 해결했습니다. 이를 통해 사용자가 새로고침을 해도 이전에
                  입력한 데이터나 설정 값 등이 유지되어 불편함이 줄어들었습니다.
                </li>
              </ul>
              <ul>
                <li>
                  SCSS 문법을 도입하여 CSS를 개편하였고, 이를 통해 컴포넌트의
                  양을 줄일 수 있었습니다.
                </li>
              </ul>
              <ul>
                <li>
                  마이 페이지, 게시글 페이지, 그리고 footer의 UI를 제작하고
                  개편하였습니다.
                </li>
              </ul>
            </ccontentdiv>
            <cseconttitlediv>Tech Stack</cseconttitlediv>
            <ccontentdiv>
              <img
                src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black"
                alt="d"
              />
              <img
                src="https://img.shields.io/badge/React Router-CA4245C?style=for-the-badge&logo=React Router&logoColor=black"
                alt="d"
              />
              <br />
              <img
                src="https://img.shields.io/badge/styled components-DB7093?style=for-the-badge&logo=styled-components&logoColor=black"
                alt="d"
              />

              <br />
              <img
                src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=Axios&logoColor=black"
                alt="d"
              />
            </ccontentdiv>
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
      margin: 3% 3% 0% 3%;
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
        margin-bottom: 2%;
      }
      cseconttitlediv {
        font-size: 1.3rem;
        color: #ff9a9e;
        /* margin-top: 2%; */
      }
      ccontentdiv {
        margin: 0% 0% 3% 0%;
        img {
          margin: 2% 1% 0% 1%;
        }
        ul {
          li {
            list-style-position: inside;
            font-size: 0.8rem;
          }
        }
      }
      ul {
        margin: 0% 0% 3% 0%;
        li {
          list-style-position: inside;
          margin: 0px 0% 3% 0%;
          font-size: 1.3rem;
        }
      }
    }
  }
  contentdiv {
    width: 75%;
    display: flex;
    flex-direction: column;
    display: inline;
    margin: 2% 0% 5% 0px;
    font-size: 1.2rem;
    font-weight: 600;
    a {
      font-size: 1.2rem;
      color: gray;
    }
  }
  hr {
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
    font-size: 0.9rem;
    stdiv {
      font-size: 1.2rem;
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
