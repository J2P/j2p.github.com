/* eslint jsx-a11y/label-has-for:0 */

import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/Layout';
import Wrapper from '../components/Wrapper';
import Header from '../components/Header';
import { media } from '../utils/media';

import config from '../../config/SiteConfig';

const Content = styled.div`
  grid-column: 2;
  box-shadow: 0 4px 120px rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
  padding: 2rem 4rem;
  background-color: ${props => props.theme.bg};
  z-index: 9000;
  margin-top: -3rem;
  @media ${media.tablet} {
    padding: 3rem 3rem;
  }
  @media ${media.phone} {
    padding: 2rem 1.5rem;
  }
  form {
    p {
      label,
      input {
        display: block;
      }
      input {
        min-width: 275px;
      }
      textarea {
        resize: vertical;
        min-height: 150px;
        width: 100%;
      }
    }
  }
`;

const Contact = () => (
  <Layout>
    <Wrapper>
      <Helmet title={`Contact | ${config.siteTitle}`} />
      <Header>
        <Link to="/">{config.siteTitle}</Link>
      </Header>
      <Content>
      <div className="page">
        <h1 className="page__title">About me</h1>
        <div className="page__body">
          <h1>Jung Jae PiL</h1>
          <h2>연락</h2>
          <ul> 
            <li>Email : jjp5023@gmail.com</li>
            <li>Blog : <a href="http://blog.j2p.io">http://blog.j2p.io</a></li>
            <li>GitHub : <a href="https://github.com/J2P">https://github.com/J2P</a></li>
          </ul>
          <h2>기술스택</h2>
          <ul>
            <li>언어 : HTML, CSS, JavaScript, Deno, Node.js, Python</li>
            <li>프레임워크 : Vue.js, jQuery, React.js, Express, Django, Botkit, HUBOT</li>
            <li>클라우드 : Amazon Web Service (AMI, EC2, RDS, ECS, Lambda 등)</li>
            <li>기타 : Git, Markdown, Slack, Docker 등</li>
          </ul>
          <h2>경력</h2>
          <h3>(주) 당근마켓 <code className="language-text">2018.12.04 ~ </code></h3>
          <ul>
            <li>기존 웹뷰를 SPA 방식으로 전환하여 속도 향상, 반응성 개선</li>
            <li>사장님 메뉴 개발</li>
            <li>쿠폰 페이지 개발</li>
            <li>업체 문의, 예약 페이지 개발</li>
            <li>끌올 페이지 개발</li>
            <li>Vue.js</li>
          </ul>
          <h3>ODK Media <code className="language-text">2018.4.23 ~ 2018.11.30</code></h3>
          <ul>
            <li>Vue.js, Sass 사용하여 Sign Up, Log In, Reset Password 모바일 지원 리뉴얼</li>
            <li>광고 헤더비딩 (Prebid.js) 적용하여 매출 상승</li>
            <li>모바일 JWPlayer 적용으로 모바일 환경 개선</li>
            <li>Vue.js, Django</li>
          </ul>
          <h3>(주) 스마트스터디 <code className="language-text">2012.7 ~ 2017.12.18</code></h3>
          <ul>
            <li>AWS 에서 운영중이던 리소스를 Terraform 코드로 재정의, 리소스 변경 이력이 남음</li>
            <li>AWS 리소스를 Slack 에서 조회 가능하도록 Node.js 기반 ChatOps Bot 개발</li>
            <li>서비스 도커라이징 및 AWS ECS 에 배포 운영하도록 변경, 스케일 아웃이 가능하도록 개선</li>
            <li>AWS Lambda 를 사용한 GitHub 리뷰 알림봇 개발</li>
            <li>유교전 창고, 부스 물품 배송 서비스를 만들어 물건 배송을 편리하게 하도록 개선</li>
            <li>사내 카페 주문 서비스를 만들어 모바일, PC 에서 주문이 가능하도록 개발</li>
            <li>몬스터 슈퍼리그 게임 CBT 사전 예약 서비스 개발</li>
            <li>앱 데이터 운영 툴 개발, 구글 스프레드시트로 수정하던 데이터를 웹으로 수정하도록 개선</li>
            <li>쿠폰 서비스를 개발, 앱 이벤트 용으로 사용</li>
            <li>구글, 앱 스토어 순위를 크롤링해서 메일로 받아 볼 수 있도록 구현, 스토어에 들어가서 확인하는 번거로움을 개선</li>
            <li>마이피플봇(쌍피봇)을 만들어 동료들에게 편의 기능 제공, 연말 인기상 수상</li>
            <li>게임에서 사용하는 리듬 데이터를 생성하는 툴을 웹으로 개발</li>
            <li>4 개의 만화서비스 Front-End 개발, 모든 모바일 기기에서 동일하게 보이도록 구현</li>
            <li>HTML, CSS, jQuery, Node.js, Django, MySQL, AWS ECS, Docker, Terraform</li>
          </ul>
            <h3>(주) 그린비 출판사 <code className="language-text">2011.01 ~ 2012.04</code></h3>
            <ul>
            <li>인문학 플랫폼(블로그형 SNS) Front-End 개발</li>
            <li>HTML, CSS, jQuery</li>
            </ul>
            <h3>(주) ANIJ <code className="language-text">2008.10 ~ 2011.02</code></h3>
            <ul>
            <li>채팅 웹서비스 제작 &amp; 유지 보수 Front-End, Back-End 개발</li>
            <li>HTML, CSS, JavaScript, ASP, MSSQL</li>
            </ul>
            <h3>(주) 아이커머 <code className="language-text">2007.08 ~ 2008.09</code></h3>
            <ul>
            <li>HP 서버, 워크스테이션, PC 조립, 납품 &amp; A/S</li>
            </ul>
            <h2>자격증</h2>
            <ul>
            <li>정보기기 운영 기능사(한국산업인력공단) <code className="language-text">2000.05.24</code></li>
            <li>리눅스 마스터 2 급 (한국정보통신 인력개발센터) <code className="language-text">2006.08.04</code></li>
            <li>인터넷 정보관리사 2 급 (한국정보통신 인력개발센터) <code className="language-text">2006.12.15</code></li>
            <li>정보처리 산업기사 (한국산업인력공단) <code className="language-text">2006.12.18</code></li>
            <li>MCP Exam 70-290 (Microsoft certified) <code className="language-text">2008.06.14</code></li>
            <li>인명구조요원 (대한적십자사) <code className="language-text">2017.06.03</code></li>
            </ul>
            <h2>기타활동</h2>
            <h3>Deno Contributor</h3>
            <p>라이언달 발표를 보고 관심을 가지게 되어 간단한 PR을 보내기 시작 </p>
            <ul>
              <li>2018.09.04 ~ 현재</li>
              <li>Rust, TypeScript</li>
              <li>deno.readDir, deno.readDirSync API 구현</li>
              <li><a href="https://github.com/denoland/deno">https://github.com/denoland/deno</a></li>
            </ul>
            <h3>Hanzai Game</h3>
            <p>개인 프로젝트로</p>
            <p>아이의 한자시험 공부를 도와주기 위해서 한자 공부용 게임 제작(한자 4급)</p>
            <ul>
              <li>React.js</li>
              <li><a href="https://github.com/J2P/play-hanzai">https://github.com/J2P/play-hanzai</a></li>
            </ul>
            <h3>React Bingo Game</h3>
            <p>개인 프로젝트로</p>
            <p>아이들이 종이에 빙고 판을 그리고 게임을 하는것에서 아이디어를 얻어서 개인 프로젝트로 제작</p>
            <ul>
              <li>Node.js, Express, React.js, Socket.io</li>
              <li><a href="https://github.com/J2P/react-bingo">https://github.com/J2P/react-bingo</a></li>
              <li><a href="https://github.com/J2P/react-bingo-server">https://github.com/J2P/react-bingo-server</a></li>
            </ul>
            <h3>Number Game</h3>
            <p>Cappuccino 프레임워크를 배우고 최종 작품을 제작</p>
            <ul>
              <li>Cappuccino, Objective-J</li>
              <li><a href="https://github.com/J2P/number">https://github.com/J2P/number</a></li>
            </ul>
            <h3>Typing Game</h3>
            <p>FRENDS 커뮤니티에서 진행한 해카톤에서 한글과 컴퓨터의 소나기 타자게임을 웹으로 구현</p>
            <ul>
              <li>Node.js, Express, Passport Oauth, Bootstrap</li>
              <li><a href="https://github.com/J2P/typing">https://github.com/J2P/typing</a></li>
            </ul>
          </div>
        </div>
      </Content>
    </Wrapper>
  </Layout>
);

export default Contact;
