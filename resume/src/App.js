import React from "react";
import styled, { createGlobalStyle } from "styled-components";

function App() {
  return (
    <>
      <GlobalStyle />
      <Headdiv />
      <Appdiv>
        <Intorducediv>
          {/* <introdiv>
              성공적인 결과물을 만들기 위해서는 <stdiv>비즈니스의</stdiv> 미래
              가치를 고려해야 합니다. 고객의 요구사항을 충족시키기 위해 받은
              피드백을 모두 기록하는 것은 주니어 개발자인 저,
              <stdiv>장경욱</stdiv>의 습관입니다.
            </introdiv> */}
          <hellodiv>
            프론트엔드 개발자 <stdiv>장경욱</stdiv>입니다.
          </hellodiv>

          <namedesdiv>
            <namediv>Email</namediv>
            <descriptiondiv>
              <a
                href="mailto:jku2659@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                jku2659@gmail.com
              </a>
            </descriptiondiv>
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
        <hr />
        <titlediv>INTRODUCTION</titlediv>
        <contentdiv>
          ARM 프로세서를 이용해 2년 이상의 개발 경험을 있습니다. 하드웨어와
          소프트웨어 개발을하면서 항상 사용자에게 <stdiv>직관적</stdiv>이고{" "}
          <stdiv>예쁜 디자인</stdiv>을 제공하기 위해 고민했습니다. 그리고 퇴직
          후에는 24주 동안 코드스테이츠 소프트웨어 개발자{" "}
          <stdiv>부트캠프</stdiv>를 수료하면서 프론트엔드에 대한 기술과 지식을
          배웠습니다.
          <br /> <br />
          <stdiv>Redux</stdiv>를 사용하여 프로젝트에서 상태 관리를 처리한 경험을
          토대로 애플리케이션의 상태를 효과적으로 관리할 수 있습니다. 이외에도
          React와 다양한 라이브러리에 관심이 많아 <stdiv>지속적으로 학습</stdiv>
          하고 있습니다. 또한, 제가 학습한 내용을 <stdiv>블로그</stdiv>에
          정리하여 기술 블로그를 운영하고 있습니다.
          <br /> <br />
          현재는 GraphQL과 MongoDB를 공부하며 <stdiv>백엔드 개발</stdiv>에도
          관심을 가지고 있습니다. 프론트엔드 뿐만 아니라 백엔드와 관련된 기술도
          학습하며 자신의 역량을 계속해서 발전시켜 나가고 있습니다.
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
                  개발을 시작한 후로 기술 블로그를 운영하여 회고를 포함{" "}
                  <stdiv>170개</stdiv>
                  이상 포스팅했습니다.
                </li>
              </ul>
              <ul>
                <li>
                  블로그를 작성하면서 매 순간 내용을 정리하고 정리된 내용을
                  참고하여 나중에 다시 찾아볼 수 있어 <stdiv>효율적으로</stdiv>{" "}
                  시간을 활용할 수 있습니다.
                </li>
              </ul>

              <ul>
                <li>
                  또한, 자신의 생각과 경험을 정리하여 기록하면서{" "}
                  <stdiv>스스로</stdiv> 발전하는 계기가 되기도 합니다.
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
        <titlediv>EDUCATION</titlediv>
        <contenttitlediv>
          <trdiv>2022.8.19 ~ 2023.2.10</trdiv>
          <cdiv>
            <csectitlediv>코드스테이츠 (Code States)</csectitlediv>
            <ccontentdiv>
              <ul>
                <li>
                  <stdiv>React</stdiv>와 다양한 라이브러리를 활용하여{" "}
                  <stdiv>컴포넌트 기반 설계, 가상 돔, 상태 관리</stdiv> 등을
                  학습하고 프로젝트에 적용하였습니다
                </li>
              </ul>
              <ul>
                <li>
                  팀 프로젝트에서는 팀원들과 함께{" "}
                  <stdiv>기획부터 배포까지</stdiv> 모든 단계를 협업하여
                  프로젝트를 성공적으로 마무리한 경험이 있습니다.
                </li>
              </ul>
              <ul>
                <li>
                  <stdiv>노션페이지와 깃허브</stdiv>를 이용하여 팀워크를
                  강화하고 역할 분담과 일정 관리를 효과적으로 수행할 수
                  있습니다.
                </li>
              </ul>
              <ul>
                <li>
                  백엔드와의 <stdiv>소통</stdiv> 방법을 익숙하며 Rest API를
                  이용한 서버 <stdiv>API 통신</stdiv>에 능숙합니다. 이를
                  바탕으로 프론트엔드와 백엔드 간의 데이터 흐름을 원활하게
                  구축할 수 있습니다.
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
              <ul>
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
              </ul>
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
              <ul>
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
              </ul>
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
            <ccontentdiv>
              Stack overflow 클론코딩
              <ul>
                {" "}
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
              </ul>
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
              <img
                src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=Axios&logoColor=black"
                alt="d"
              />
            </ccontentdiv>
          </cdiv>
        </contenttitlediv>
        {/* <hr />
        <titlediv>WHY STANDBY?</titlediv>
        <contentdiv>
          <contenttitlediv>
            <c1div>
              <cseconttitlediv>
                1. 혁신적인 서비스를 개발하는 회사
              </cseconttitlediv>
              <ccontentdiv>
                <ul>
                  <li>
                    스탠바이랩은 법률 서비스에 IT 기술을 접목해 사용자가 쉽고
                    편리하게 법률 서비스를 이용할 수 있도록 해주는 혁신적인
                    스타트업입니다. 이러한 혁신적인 서비스를 개발하는 회사에서
                    일하면서 새로운 아이디어를 제안하고 창의적인 문제 해결
                    능력을 발휘하며 성장하고 싶어 지원했습니다.
                  </li>
                </ul>
              </ccontentdiv>
              <cseconttitlediv>2.성장 가능성과 도전적인 회사</cseconttitlediv>
              <ccontentdiv>
                <ul>
                  <li>
                    저는 스탠바이랩이 최근에 런칭한 '스탠바이'라는 새로운
                    법인관리 서비스와 기존 서비스를 보완하는 노력에 대해 높은
                    관심과 열정을 가지고 있습니다. 스타트업의 도전적인 분위기와
                    함께, 스탠바이랩이 가진 경영 철학과 비즈니스 모델에
                    공감합니다. 이를 바탕으로 회사의 미래가치를 신뢰하며, 함께
                    도전적인 환경에서 성장할 수 있는 기회를 원합니다. 저의
                    역량과 열정을 바탕으로 함께 노력해 성장해나가고 싶어
                    지원하게 되었습니다.
                  </li>
                </ul>
              </ccontentdiv>
              <cseconttitlediv>
                3. 누구나 쉽게 법의 도움을 받을 수 있는 세상
              </cseconttitlediv>
              <ccontentdiv>
                <ul>
                  <li>
                    스탠바이랩은 '누구나 쉽게 법의 도움을 받을 수 있는 세상'을
                    꿈꾸는 회사입니다. 법률 서비스에 IT 기술을 적용해 사용자
                    경험을 개선하고 서비스 가격을 낮추어 보다 많은 사람들이 법률
                    서비스를 이용할 수 있도록 노력하고 있습니다. 저는 이러한
                    목표와 가치관에 공감하며, 제가 가진 경험과 역량을 바탕으로
                    스탠바이랩의 성장과 목표를 이루는데 기여하고자 지원하게
                    되었습니다.
                  </li>
                </ul>
              </ccontentdiv>
              <cseconttitlediv>4. 지원 동기와 핵심 가치 부합성</cseconttitlediv>
              <ccontentdiv>
                <ul>
                  <li>
                    스탠바이랩은 핵심가치로 주인의식을 중요시하며, 팀원 모두가
                    하나의 팀으로서 함께 일하는 문화를 강조합니다. 이러한 문화가
                    참신하고 독특한 아이디어를 창출하며, 도전적인 환경에서
                    성장할 수 있는 기반을 마련할 수 있다고 생각합니다. 그리고
                    이러한 가치와 문화를 가진 스탠바이랩에서 함께 일하게 되어,
                    저의 능력과 열정을 쏟아내며 성장하는 경험을 쌓고자 지원하게
                    되었습니다.
                  </li>
                </ul>
              </ccontentdiv>
            </c1div>
          </contenttitlediv>
        </contentdiv> */}
      </Appdiv>
    </>
  );
}

export default App;

const Appdiv = styled.div`
  width: 100%;
  height: auto;
  padding: 40px 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  titlediv {
    font-size: 1.3rem;
    font-weight: bolder;
    margin-right: auto;
    margin-bottom: 4%;
  }
  mycontentdiv {
    width: 100%;
    padding: 0px 15%;
    margin: 2% 0% 5% 0px;
    font-size: 0.7rem;
    font-weight: 600;
  }

  secondtitlediv {
    width: 80%;
    padding: 2% 5%;
    background-color: #ff9a9e;
    color: white;
    border-radius: 15px;
    font-size: 0.9rem;
    font-weight: bolder;
  }
  contenttitlediv {
    width: 100%;
    display: flex;
    flex-direction: row;
    font-weight: bolder;
    margin: 3% 0% 0% 0px;
    a {
      margin: 0% 1% 0% 1%;
      color: gray;
    }
    trdiv {
      width: 20%;
      color: gray;
      text-align: right;
      margin: 0% 10% 0% 0px;
      font-size: 1rem;
    }
    tldiv {
      width: 20%;
      color: gray;
      text-align: left;
      margin: 0% 10% 0% 0px;
      font-size: 1rem;
    }
    c1div {
      width: 100%;
      display: flex;
      flex-direction: column;
      ctitlediv {
        font-size: 2.5rem;
      }
      csectitlediv {
        font-size: 1rem;
        margin-bottom: 1%;
      }
      cseconttitlediv {
        font-size: 0.8rem;
        color: #ff9a9e;
        /* margin-top: 2%; */
      }
      ccontentdiv {
        font-size: 0.7rem;
        margin: 0% 0% 2% 0%;
        img {
          margin: 1% 1% 0% 1%;
          width: auto;
          height: 20px;
        }
        ul {
          font-size: 0.7rem;
          li {
            list-style-position: inside;
            font-size: 0.7rem;
          }
        }
        a {
          font-size: 0.7rem;
        }
      }
      ul {
        li {
          list-style-position: inside;
          margin: 0px 0% 2% 0%;
          font-size: 0.7rem;
        }
      }
    }
    cdiv {
      width: 70%;
      display: flex;
      flex-direction: column;
      ctitlediv {
        font-size: 2.5rem;
      }
      csectitlediv {
        font-size: 1rem;
        margin-bottom: 1%;
      }
      cseconttitlediv {
        font-size: 0.8rem;
        color: #ff9a9e;
        /* margin-top: 2%; */
      }
      ccontentdiv {
        font-size: 0.7rem;
        margin: 0% 0% 2% 0%;
        img {
          margin: 1% 1% 0% 1%;
          width: auto;
          height: 20px;
        }
        ul {
          font-size: 0.7rem;
          li {
            list-style-position: inside;
            font-size: 0.7rem;
          }
        }
        a {
          font-size: 0.7rem;
        }
      }
      ul {
        li {
          list-style-position: inside;
          margin: 0px 0% 2% 0%;
          font-size: 0.7rem;
          stdiv {
            font-size: 1rem;
            color: #ff9a9e;
          }
        }
      }
    }
  }
  contentdiv {
    width: 100%;
    padding: 0px 15%;
    display: flex;
    flex-direction: column;
    display: inline;
    margin: 2% 0% 5% 0px;
    stdiv {
      font-size: 1rem;
      color: #ff9a9e;
    }
    font-size: 0.7rem;
    font-weight: 600;
    a {
      font-size: 0.8rem;
      color: gray;
    }
  }
  hr {
    width: 100%;
    height: 3px;
    margin: 4% 0% 4% 0px;
    background-color: pink;
    border: none;
  }
  hr1 {
    width: 100%;
    height: 3px;
    margin: 10% 0% 20% 0px;
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
    margin-top: 5%;
    font-size: 1rem;
    color: #ff9a9e;
  }
  descriptiondiv {
    a {
      font-size: 0.7rem;
      color: gray;
      text-decoration: none;
    }
  }
  hellodiv {
    text-align: center;
    font-weight: bolder;
    background: linear-gradient(
      to left,
      #ff9a9e 0%,
      #fecfef 99%,
      #fecfef 100%
    ) !important;
    font-size: 2rem;
    -webkit-background-clip: text !important;
    color: transparent;
    cursor: pointer;
    stdiv {
      color: #ff9a9e;
      font-size: 2.5rem;
      font-weight: lighter;
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
