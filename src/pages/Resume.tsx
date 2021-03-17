import * as React from "react"
import styled from 'styled-components';
import { Link, graphql } from "gatsby"
import Header from "../components/Header"
const Resume = () => (
  <ResumeContainer>
    <Header/>
    <InnerWrapper>
      <Title>안녕하세요, 조건상입니다.</Title>
      <Job>프론트엔드 개발자</Job>
      <Introduce>
        사람들의 삶을 바꾸는 서비스를 만들고싶은 개발자입니다.<br/>
        평소에 그룹 사이드 프로젝트나 개인적으로 사이드 프로젝트를 즐겨 합니다.
      </Introduce>
      <CareerContainer>
        <Job>저는 이런 일을 했습니다.</Job>
        <CareerWrapper>
          <CompanyTitle>마켓디자이너스</CompanyTitle>
          <CompanyDate>2020. 07 ~</CompanyDate>
          <ExperienceWrapper>
            <WorkTitle>위매치 고객경험 개선 프로젝트</WorkTitle>
            <WorkDesc>
              Wematch는 기존에 고객과 고객사를 자동으로 매칭해주는 기능만을 제공했습니다.<br/>
              고객에게 더 좋은 경험을 주고자 고객이 고객사를 직접 선택할 수 있는 페이지를 개발했습니다.
            </WorkDesc>
            <WorkDescList>
              <li>리스트, 디테일, 카트, 매칭에 관한 로직 및 페이지 개발</li>
            </WorkDescList>
            <WorkStackWrapper>
              <WorkStack>React</WorkStack>
              <WorkStack>React Hooks</WorkStack>
              <WorkStack>Redux</WorkStack>
              <WorkStack>Redux-Saga</WorkStack>
              <WorkStack>Typescript</WorkStack>
            </WorkStackWrapper>
          </ExperienceWrapper>
          <ExperienceWrapper>
            <WorkTitle>WDS(Wematch Design System)</WorkTitle>
            <WorkDesc>
              Wematch에서 사용하는 UI들을 새롭게 개선하고 생산성을 위해 모듈화 작업을 진행중에 있습니다.
            </WorkDesc>
            <WorkDescList>
              <li>공통된 모달 템플릿 개발</li>
              <li>모든 리스트 페이지에서 사용할 수 있는 스켈레톤 UI 컴포넌트 개발</li>
            </WorkDescList>
            <WorkStackWrapper>
              <WorkStack>React</WorkStack>
              <WorkStack>StoryBook</WorkStack>
              <WorkStack>Typescript</WorkStack>
            </WorkStackWrapper>
          </ExperienceWrapper>
          <ExperienceWrapper>
            <WorkTitle>위매치 웹사이트 ASP -> React 유지보수 및 개선 작업</WorkTitle>
            <WorkDesc>
              Wematch에서 사용하는 UI들을 새롭게 개선하고 생산성을 위해 모듈화 작업을 진행중에 있습니다.
            </WorkDesc>
            <WorkStackWrapper>
              <WorkStack>React</WorkStack>
              <WorkStack>React Hooks</WorkStack>
              <WorkStack>Redux</WorkStack>
              <WorkStack>Redux-Saga</WorkStack>
              <WorkStack>Typescript</WorkStack>
            </WorkStackWrapper>
          </ExperienceWrapper>
        </CareerWrapper>
        <CareerWrapper>
          <CompanyTitle>링크샵스</CompanyTitle>
          <CompanyDate>2019. 06 ~ 2020.06</CompanyDate>
          <ExperienceWrapper>
            <WorkTitle>3PL(Thrid Party Logisitics) 작업 </WorkTitle>
            <WorkDesc>
              기존 대량 구매자들에 초점이 맞춰져있던 서비스를 소량 구매자(개인이 운영하는 쇼핑몰)에 맞춰 주문부터 결제 배송까지 모든 로직이 변경되는 대규모 프로젝트를 진행했습니다.
            </WorkDesc>
            <WorkDescList>
              <li>주문 유형에 따른 주문 페이지 개발</li>
              <li>주문에 따른 배송(사입, 미송, 환불, 취소)현황 페이지 개발</li>
              <li>주문 취소에 대한 로직 및 기능 개발</li>
              <li>고객이 사용할 위시 리스트 관리 페이지 개발</li>
              <li>고객(쇼핑몰 사장님)이 판매중인 제품 현황 페이지 개발</li>
            </WorkDescList>
            <WorkStackWrapper>
              <WorkStack>React</WorkStack>
              <WorkStack>Redux</WorkStack>
              <WorkStack>Javascript</WorkStack>
            </WorkStackWrapper>
          </ExperienceWrapper>
          <ExperienceWrapper>
            <WorkTitle>레거시 프로젝트 개선 및 유지보수</WorkTitle>
            <WorkDesc>
              기존 React에 14버전을 사용중이던 프로젝트를 신규 16버전으로 바꿀 수 있도록 개선하였습니다.
            </WorkDesc>
            <WorkDescList>
              <li>버전을 업그레이드할 수 있도록 Webpack 수정</li>
            </WorkDescList>
            <WorkStackWrapper>
              <WorkStack>React</WorkStack>
              <WorkStack>Javascript</WorkStack>
            </WorkStackWrapper>
          </ExperienceWrapper>
          <ExperienceWrapper>
            <WorkTitle>PWA를 활용한 모바일 웹 개발</WorkTitle>
            <WorkDesc>
              PWA를 활용해 앱에서 사용될 웹 페이지를 담당해서 개발했습니다.
            </WorkDesc>
            <WorkDescList>
              <li>주문 환불 기능 개발(Image Resized 기능)</li>
              <li>주문 현황 페이지 개발</li>
              <li>이벤트 페이지 개발</li>
            </WorkDescList>
            <WorkStackWrapper>
              <WorkStack>React</WorkStack>
              <WorkStack>React Hooks</WorkStack>
              <WorkStack>PWA</WorkStack>
              <WorkStack>Context API</WorkStack>
              <WorkStack>Javascript</WorkStack>
            </WorkStackWrapper>
          </ExperienceWrapper>
          <ExperienceWrapper>
            <WorkTitle>인공지능(API) 추천 서비스</WorkTitle>
            <WorkDesc>
              상품 상세 페이지에서 해당 상품과 유사한 상품을 유저에게 노출해주는 프로젝트를 진행했습니다.
            </WorkDesc>
            <WorkStackWrapper>
              <WorkStack>React</WorkStack>
              <WorkStack>React Hooks</WorkStack>
              <WorkStack>PWA</WorkStack>
              <WorkStack>Javascript</WorkStack>
            </WorkStackWrapper>
          </ExperienceWrapper>
          <ExperienceWrapper>
            <WorkTitle>링크샵스 이벤트 페이지 제작</WorkTitle>
            <WorkDesc>
              링크샵스에서 진행한 이벤트 페이지를 웹과 앱에서 사용할 수 있도록 제작했습니다.
            </WorkDesc>
            <WorkStackWrapper>
              <WorkStack>React</WorkStack>
              <WorkStack>React Hooks</WorkStack>
              <WorkStack>PWA</WorkStack>
              <WorkStack>Javascript</WorkStack>
            </WorkStackWrapper>
          </ExperienceWrapper>
        </CareerWrapper>
        <CareerWrapper>
          <CompanyTitle>플레이팅</CompanyTitle>
          <CompanyDate>2018. 05 ~ 2019. 05</CompanyDate>
          <ExperienceWrapper>
            <WorkTitle>B2C to B2B Pivot</WorkTitle>
            <WorkDesc>
              플레이팅에서 B2C 비지니스에서 B2B 비지니스로 Pivot하는 과정에서 프론트엔드 개발자로 혼자 담당해 개발을 진행했습니다.
              <WorkDescList>
                <li>메인 페이지 개발</li>
                <li>주문 페이지 개발 및 주문 기능 개발</li>
                <li>주문 조회 및 주문 취소에 대한 로직 개발</li>
                <li>아임포트를 이용한 결제 기능 개발</li>
              </WorkDescList>
            </WorkDesc>
            <WorkStackWrapper>
              <WorkStack>React</WorkStack>
              <WorkStack>Redux</WorkStack>
              <WorkStack>Redux-Saga</WorkStack>
              <WorkStack>Javascript</WorkStack>
            </WorkStackWrapper>
          </ExperienceWrapper>
          <ExperienceWrapper>
            <WorkTitle>일일 지역별 배송 리스트</WorkTitle>
            <WorkDesc>
              운영팀에서 관리하기 수월하도록 지역별 배송 리스트 테이블을 만들었습니다.
            </WorkDesc>
            <WorkDescList>
              <li>지역별 소팅 후 리스팅 페이지 개발</li>
            </WorkDescList>
            <WorkStackWrapper>
              <WorkStack>Mysql</WorkStack>
            </WorkStackWrapper>
          </ExperienceWrapper>
          <ExperienceWrapper>
            <WorkTitle>백오피스 어드민 페이지</WorkTitle>
            <WorkDesc>
              재고관리에 대해서 키친팀과 협업하며 백오피스 어드민 페이지를 제작했습니다.
            </WorkDesc>
            <WorkDescList>
              <li>키친팀에서 사용할 리스트 페이지 개발</li>
              <li>영업팀 및 운영팀에서 사용할 재고관리 페이지 개발</li>
            </WorkDescList>
            <WorkStackWrapper>
              <WorkStack>React</WorkStack>
              <WorkStack>Javascript</WorkStack>
            </WorkStackWrapper>
          </ExperienceWrapper>
        </CareerWrapper>
      </CareerContainer>
      <SkillContainer>
        <Job>저는 이런 기술을 사용합니다.</Job>
        <SkillTitle>HTML/CSS</SkillTitle>
        <SkillDesc>
          <li>Semantic Markup을 중요시 여기며, HTML을 작성할 때 의미를 부여합니다.</li>
          <li>CSS를 작성할때 SASS(SCSS), CSS Preprocessor를 사용할 수 있습니다.</li>
          <li>여러 브라우저를 지원할 수 있으며, 모바일, 태블릿에 해상도 지원이 가능하게 코드를 작성할 수 있습니다.</li>
        </SkillDesc>
        <SkillTitle>Javascript / Typescript</SkillTitle>
        <SkillDesc>
          <li>ES2015 이후의 Javascript 문법에 익숙합니다.</li>
          <li>타입스크릅트를 프로젝트에 적용하고 프로젝트 구조를 만들 수 있습니다.</li>
          <li>Promise, Async Await을 사용하여 비동기 작업을 할 수 있습니다.</li>
        </SkillDesc>
        <SkillTitle>React</SkillTitle>
        <SkillDesc>
          <li>Atomic Design으로 컴포넌트 분할을 하거나 프로젝트에 맞게 구조를 작성합니다.</li>
          <li>React, Vue 컴포넌트 라이프 사이클을 이해하며 적절하게 활용할 수 있습니다.</li>
          <li>React hooks를 사용할 수 있으며 함수형 컴포넌트 작성을 좋아합니다.</li>
          <li>Redux, Redux-saga와 같은 상태 관리 패턴에 대해서 이해하고있으며,<br/> 상태 관리를 하나의 패턴으로 유지하면 유지보수에 용이하기 때문에 해당 패턴을 좋아합니다.</li>
        </SkillDesc>
        <SkillTitle>Server</SkillTitle>
        <SkillDesc>
          <li>토이 프로젝트에 적용할만큼 사이즈의 서버 작업을 진행할 수 있습니다.</li>
          <li>Express.js를 활용하여 RESTful API를 작성할 수 있습니다.</li>
          <li>PostsgreSQL, MySQL을 사용하여 쿼리 작성이 가능합니다.</li>
        </SkillDesc>
      </SkillContainer>
    </InnerWrapper>
  </ResumeContainer>
)

export default Resume

const ResumeContainer = styled.div`
  background-color: #141B23;
`;

const InnerWrapper = styled.div`
  margin-left: 300px;
  max-width: 700px;
  margin-top: 10.5rem;
`;
const Title = styled.h2`
  font-size: 36px;
  font-weight: 600;
  color: whitesmoke;
  margin-bottom: 6.5rem;
`;

const Job = styled.h2`
  color: #E35656;
  font-size: 22px;
  line-height: 1.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
`;

const Introduce = styled.p`
  
`;

const CareerContainer = styled.div`
  margin-top: 5.5rem;
  display: flex;
  flex-direction: column;
`;

const SkillContainer = styled.div`
  margin-top: 3.5rem;
  display: flex;
  flex-direction: column;
`;

const SkillTitle = styled.h3`
  font-size: 21px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const SkillDesc = styled.ul`
  font-size: 16px;
  font-weight: normal;
  margin-bottom: 5px;
  margin-left: 20px;
`
const CareerWrapper = styled.article`
  
`;

const CompanyTitle = styled.h2`
  font-size: 20px;
  margin-bottom: 5px;
`;

const CompanyDate = styled.p`
  font-size: 14px;
`;

const ExperienceWrapper = styled.div`
  margin-bottom: 20px;
`;

const WorkTitle = styled.p`
  font-size: 21px;
  margin-bottom: 20px;
  font-weight: bold;
`;

const WorkDesc = styled.p`
  font-size: 16px;
  word-break: keep-all;
  margin-bottom: 15px;
`;

const WorkDescList = styled.ul`
  margin-left: 20px;
`;
const WorkStackWrapper = styled.div`
  padding-bottom: 10px;
`;

const WorkStack = styled.span`
  border-radius: .3em;
  white-space: normal;
  background: #2d2d2d;
  font-size: 1em;
  line-height: 1.5;
  color: #E35656 !important;
  padding: 6px !important;
  margin-right: 8px;
`;
