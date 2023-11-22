# 여행 중심 실활밀착형 정보제공 서비스

> BTC 3기 개발자과정 - 1조(ONE-TEAM)
>
> ## 개발자
>
> **안지수 김란희 김장훈**
>
> ## 프로젝트 기간
>
> 2023.06.12 ~ 2022.06.23
>
> ## 담당 멘토님
>
> 강현욱 멘토님
> <br/> <br/>

-   [실행](#1-실행)
-   [개요](#2-개요)
    -   [주제](#주제)
    -   [선정배경](#선정배경)
    -   [프로젝트 폴더 설명](#프로젝트-폴더-설명)
-   [아키텍처](#3-아키텍처)
    -   [Sequence Diagram](#시퀀스-다이어그램)
-   [환경 및 버전](#4-환경-및-버전)
    -   [Environment](#environment)
    -   [React](#react)
-   [팀원 역할](#5.팀원-역할)
-   [시연 영상](#6.시연-영상)
-   [PPT](#7-ppt)
    <br/>
    <br/>

# 1. 실행

---

-   라이브러리 및 모듈 설치하기

```bash
npm install
```

<br/>

-   Node.js 서버 실행하기

```bash
npm start
```

<br/>

<br/>

# 2. 개요

---

## 주제

-   어디를 여행가고 싶으신가요?
-   **'ONE-TEAM GUIDE'** 에서 찾으실 수 있습니다.
-   사용자가 가고 싶은 도시를 누르면 테마별(유명 관광지, 맛집, 숙박 업소)로 관광 정보를 제공합니다.
-   사용자가 알고 싶은 장소를 누르면 지도에 위치를 표시하고 해당 위치에서 현위치까지의 대중교통 정보를 제공합니다.
-   옷차림이 중요한 사용자를 위해 지역의 날씨 정보를 한 눈에 알아볼 수 있도록 제공합니다.
    <br/>
    <br/>

## 선정배경

-   2023년 4월에 해외관광객은 무려 **1,497,105명**으로 코로나 엔데믹 이후 국민 해외관광의 추세는 나날이 늘고 있음.
-   반대로 국내 관광 지출액 증감률은 엔데믹 이후 꾸준히 **감소 추세**를 보이고 있으며 방문자 수 또한 **감소 추세**임.

![시장규모](https://github.com/jisooAhn/front-end-pjt/assets/96163167/89491bcd-a1c4-4d91-bbe4-0af8751769aa)
<br/>

-   국내 지역 방문자 수 & 관광 지출액 추세
    ![시장규모](https://github.com/jisooAhn/front-end-pjt/assets/96163167/ed8e897f-25a9-4d3e-9078-1562205449be)

-   국내 여행을 증진하여 **내수시장을 활발**하게 하고자하는 목적으로 국내 여행관련 사이트를 주제로 선정
    <br/>
    <br/>

## 프로젝트 폴더 설명

-   `public` : 필요한 사진을 저장한 폴더
-   `src - Router` : 헤더와 푸터를 제외한 메인페이지, 서브페이지 폴더
-   `Router - subpage` : 관광 정보, 지도, 날씨, 대중교통 길찾기 기능에 관한 컴포넌트 폴더
-   `Router - css` : 각 페이지와 기능에서 적용하는 css 폴더
    <br/>
    <br/>

# 3. 아키텍처

---

## 시퀀스 다이어그램

![시퀀스 다이어그램](https://github.com/jisooAhn/front-end-pjt/assets/96163167/36dd0723-8721-4332-9c23-6fb51f79f5db)

# 4. 환경 및 버전

---

### Environment

-   Node.js

### React

-   React 18.2.0

<br/>
<br/>

# 5. 팀원 역할

---

![프로젝트 소개](https://github.com/jisooAhn/front-end-pjt/assets/96163167/76d1da56-56b5-4d80-ac94-f7fcfa25e863)

| 이름                                    | 담당 직무                      |
| --------------------------------------- | ------------------------------ |
| [안지수](https://github.com/jisooAhn)   | 팀장 / 메인페이지              |
| [김란희](https://github.com/doradorani) | 팀원 / 날씨 및 대중교통 길찾기 |
| [김장훈](https://github.com/jangdebug)  | 팀원 / 관광 정보 및 지도       |

<br/>
<br/>

# 6. 시연 영상

---

시연 영상 : https://youtu.be/FrLENxPwiu4
<br/>
<br/>

# 7. PPT

---

발표 PPT : https://drive.google.com/file/d/1ZevyRWydrgdnGvXKxWjqcvMu12_KWcV5/view?usp=sharing
