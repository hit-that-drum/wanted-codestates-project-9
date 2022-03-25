## 📑 프로젝트 소개

WANTED & CODESTATES 프리온보딩 코스

팀기업과제입니다.

<br>

### < 넥슨 >

PROJECT PERIOD: 2022.03.21 ~ 2022.03.25

<br>

## ✨ 주요 기능
- 카트라이더 TMI(전적 검색 사이트) 클론코딩
- 유저의 아이디를 검색해 [개인 전적 조회 페이지](https://tmi.nexon.com/kart/user?nick=BBEESSTT&matchType=indi)를 개발
- 선택 중 1개 페이지 개발
  - [랭킹 페이지](https://tmi.nexon.com/kart/rank)
  - [트랙 스피드개인전 페이지](https://tmi.nexon.com/kart/track/) 
  - [트랙 스피드팀전 페이지](https://tmi.nexon.com/kart/track?matchType=team) 
- [카트라이더 OpenAPI](https://developers.nexon.com/kart)를 이용하여 데이터 조회(가입 후 키 발급 필요)
- 페이지 이동과 닉네임 검색이 가능한 상단 메뉴바 개발

<br>

## ❄️ 회고

결과적으로 주어진 과제는 다 해내지 못 하였습니다.

![ezgif com-gif-maker](https://user-images.githubusercontent.com/85816029/160062504-6c31521f-2733-49d5-a42d-08632abe01f3.gif)

메인페이지의 기본적인 레이아웃 및 애니메이션 효과는 구현하였습니다만,
결정적으로 기능 부분에서는 완성되지 못하였습니다.
READ.ME 보다는 일주일 동안 처음으로 혼자서 개발을 진행했던 것의 회고를 중점으로 기록해 보려 합니다.


<br>

## 배웠던 것

<br>

- a 태그 사용

<br>

상단 Header를 제작하면서 ‘카트라이더 홈페이지 바로가기’ 부분을 클릭해서 넘어갈 때 어떻게 라우팅 시켜야 하는지에 대해 고민하였습니다. 
한창 라우팅을 시켜서 분기처리를 하고 있던 즈음이라 react-router-dom에만 사로잡혀 기본적인 태그를 찾아볼 생각을 전혀 하지 않아 쓸모없는 시간을 검색에 많이 허비하였습니다.
찾던 도중 개발자가 분기처리 하려고 하는 새로운 페이지로 리다이렉트를 하는 것이 아닌, 외부 사이트로 리다이렉트를 하는 것은 `<a>`태그를 사용하는 것이 아주 기본적인 사실임을 그제서야 깨닫고 기능을 구현할 수 있었습니다.
하나에만 사로잡히지 않고 기본적인 것부터 차근차근 생각해 나가야 한다고 깨달았습니다.

<br>

- cors 에러 처리

<br>

API Docs를 보면서 차근차근 데이터를 받아오는 것을 직접 구현해 보는 것도 거의 처음이어서 많이 배웠고,
그 과정에서 결국에는 cors 에러가 떴는데 일단 이 에러가 뜬 것 자체가 나머지 과정들을 다 잘 해 낸 다음에 마지막에 뜨는 것을 알고 있었기 때문에 굉장히 기뻤습니다.
다만 cors 에러를 처리하는 수많은 방법들 중 제일 확실한 것은 서버 측에서 미들웨어를 넣는 등을 하는 것인데,
이번 과제의 경우 서버를 제가 컨트롤 할 수 없기도 했고,
간단한 서버 정도는 구현해도 된다고는 쓰여 있었으나 그 정도까지의 개발지식이 없기 때문에 고려하지 않았습니다.
그래서 결국 cors-anywhere라는 프록시 서버를 사용해 임시로 우회를 시켜서 해결하였습니다.

<br>

- API Key를 .env로 처리하고 async와 axios로 데이터 받아와 처리하기

<br>

랭킹페이지에서 쓰여질 데이터를 search 탭에서 검색하여 데이터를 가공하는 것을 구현하였습니다.
API Docs를 읽고 포스트맨으로 주어진 조건에 따라 Authorization에 제가 발급받은 API Key를 .env 파일에 넣어 같이 보내니 정상적으로 데이터가 들어오는 것을 확인할 수 있었습니다.
모두 다 구현한 것은 아니고 종합 전적과 최근 경기의 순위 전적 데이터를 구할 수 있었습니다.

<br>

- useEffect

<br>

<img width="387" alt="스크린샷 2022-03-25 오후 2 53 23" src="https://user-images.githubusercontent.com/85816029/160062688-debb204f-1b6b-45e1-80d1-3713f7d074ff.png">

<br>

위의 종합 전적과 최근 경기의 순위 전적 데이터를 가공하고 setState로 제가 만든 userData에 새로운 상태를 셋팅하려고 할 때,
맨 처음에 검색했을 때 데이터는 계산이 정상적으로 이루어지지만 상태가 변하지 않고 한 번 더 검색을 해야만 상태가 변하는 것을 발견하였습니다.
관련하여 찾아보니 setState 자체가 비동기적으로 동작하기 때문에 이 상태의 변화를 처음에는 감지할 수 없다는 것을 깨달았습니다.
이를 위해서는 여러가지 방법이 있지만 가장 쉽게 이 변화를 자동적으로 감지할 수 있게 해 주는 것이 useEffect라는 것을 깨닫고 dependency 배열에 변화하는 상태를 넣어 동작이 잘 되는 것을 확인할 수 있었습니다.

<br>

## 앞으로 구현하려고 하는 것

- cors 에러 처리 완벽하게 하는 것

<br>

현재 사용한 cors-anywhere는 무분별한 사용이 문제가 되었는지 사용하기 위해서는 사용자가 해당 url에 접속해 임시로 일정기간 동안 허가를 받는 시스템으로 이루어져 있습니다.
로컬에서 개발할 때에 쓸 수 있는 방법이기는 하겠으나, 추후에 배포를 진행하게 될 시에는 영구적으로 기능이 가능한 측면이 아니며
해당 사이트의 서비스의 사정에 의존하게 되기 때문에 과제의 지시사항에 있었던 것처럼 간단하게나마 서버를 개발하여 cors 에러 처리도 하려고 합니다.

- HOME과 RANKING 페이지의 탭 구현

<br>

탭 구현은 하였는데 탭만 구현이 되고 안에 내용을 넣을 때 페이지 자체를 내려주는 방법은 리덕스와 함께 써야 하는 측면이어서 결국 구현해내지는 못하였습니다.

- 모달 창 및 로딩 인디케이터 구현

<br>

원래 사이트에서는 유저 이름을 검색했을 시 유저이름이 query parameter로 들어가 새로운 페이지로 라우팅 되는 것을 확인할 수 있었습니다.
저도 그렇게 구현하려고 했는데 생각해보니 유저 이름을 만들 때마다 새로운 페이지가 생성되는 로직은 서버에서 처리해 줘야 하는 측면이 있는 것 같아서 일단은 테스트 아이디인 ‘BBEESSTT’에 해당하는 페이지만을 구현하였습니다.
그러나 원래는 아이디를 검색하면 페이지를 라우팅 하는 것이 아니라 데이터를 받아오기 전까지는 로딩 인디케이터가 돌아가고 데이터를 다 받아오면 모달 창이 뜨면서 해당 유저의 개인 전적을 볼 수 있게 제작하려 하였습니다.
로딩 인디케이터와 모달창은 대충 다 만들었는데 결과적으로는 적절하게 띄우지를 못하여 다시 ‘BBEESSTT’에 해당하는 페이지로 라우팅을 시키는 것으로 방향을 선회하였는데,
좀 더 공부를 해서 모달창 형식과 라우팅 형식 둘 다를 구현해 보려 합니다.

<br>

- Redux Toolkit 사용

<br>

Search 컴포넌트에서 개인전적 페이지나 RANKING 페이지에 넘겨 줄 정보를 모두 구하였습니다만 결과적으로 이 데이터를 넘기기 위해서는 전제적으로 상태를 관리하는 리덕스나 리덕스 툴킷을 사용하여 한다는 것을 깨달았습니다.
처음에는 props로 연결하여 올리고 내리고를 하려고 했는데 search 컴포넌트는 Header에 속해있고 Header는 다시 App에 속해 있고 하는 식으로 유저의 페이지와는 접점이 여러 번 걸쳐 있어서 이것이 힘들게 되었습니다.
프로젝트를 할 때 팀원분이 셋팅 한 리덕스를 사용해보기만 하고 만들어 본 적이 따로 없어서 아직 구현하지 못하였기 때문에 공부를 하여 구현해보려 합니다.

<br>

- git 커밋 및 브랜치 분리

<br>

혼자 개발을 하게 되어도 브랜치를 나누어서 작업했어야 했는데 레이아웃을 만들다가 안 되는 게 있으면 데이터를 받아오는 것을 실험하다 그것도 안 되면 다시 다른 페이지를 만들다 이런 식으로 작업을 하다보니 따로 브랜치를 분기시키지 않고 main 브랜치에서만 작업하게 되었습니다.
저만 알아보면 되는 것이 아니라 다른 사람들이 보기에도 일관성이 있어야 github가 좀 더 의미있어질 것이라고 생각하여 이러한 행동은 앞으로 하지 않으려고 합니다.
또한 습관이라는 것이 무섭다는 것을 알고 있기 때문에 이러한 방식의 커밋로그는 혼자서도 정말 하지 말아야 한다고 다짐하였습니다.


<br>

## 🗂 프로젝트 구조

```
├── README.md
├── package-lock.json
├── package.json
├── public
│   ├── favicon.png
│   └── index.html
├── src
│   ├── App.js
│   ├── GlobalStyles.js
│   ├── components
│   │   ├── Header.js
│   │   ├── LoadingIndicator.js
│   │   ├── Modal.js
│   │   └── Search.js
│   ├── images
│   │   ├── covid_left.png
│   │   ├── covid_right.png
│   │   ├── logo_kart.png
│   │   ├── pattern.svg
│   │   ├── pattern_checkerboard.png
│   │   ├── tmi_logo_default.svg
│   │   └── tmi_logo_default_b.svg
│   ├── index.js
│   ├── pages
│   │   ├── BBEESSTT.js
│   │   ├── Home.js
│   │   └── Ranking.js
│   └── redux
│       ├── slice.js
│       └── store.js
└── yarn.lock
```

<br>

## 🛠 사용 기술

front-end

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
![Styled jsx](https://img.shields.io/badge/styled--jsx-DB7093?style=for-the-badge)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)

community

![Discord](https://img.shields.io/badge/DISCORD-%237289DA.svg?style=for-the-badge&logo=discord&logoColor=white)
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)
![Apple](https://img.shields.io/badge/-APPLE-black?style=for-the-badge&logo=apple)

