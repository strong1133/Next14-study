

1. npm init -y #npm 관련 소스 시작 명령어
    -> 수행하면 package.json 이 생성됨


2. JSON script license -> MIT

3. npm install react@latest next@latest react-dom@latest
    -> react는 UI 담당
    -> react-dom는 react를 랜더하기 위한 것

4.   "scripts": {
        "dev": "next dev"
    }, 추가 next 
    -> next로 하여금 작성한 소스를 call해서 수행할수 있게 하는 명령어
    -> next는 페이지를 찾을것이고, 그것들은 app폴더안에 있어야하는 규칙이 있음


5. app 폴더에 page.tsx or page.jsx 만들고

6. npm run dev 해보기

7. 최초 실행 과정
    app/page.tsx 만 만들고 실행했을때 
    1. next가 자동으로 ts인것을 파악하고 tsconfig.json을 생성
    2. next가 page.tsx안에 default 리액트 컴포넌트 함수를 실행시키고 화면을 렌더할때 layout.tsx가 없는 것을 확인하고 자동생성함.
    3. 2번을 미루어 봤을때 실행에는 반드시 layout.tsx 가 필요함,, 또한 리액트를 직접 임포트하지 않고도 이러한 동작이 다 가능함.


8. route
    1. 리액트에서는 react-router를 이용해서 
        / -> Home
        /company -> Company
        이런식으로 path에 따른 view를 수동으로 할당해서 했다면
        next에서는 app폴터하위에 있는 fs구조로 경로를 만들고 각 경로 폴더에 존재하는 page.tsx가 그 view를 담당함.


9. csr vs ssr
    1. cra 로 리액트 개발을 하면 기본적으로 csr임
    2. csr은 브라우저에서 js를 사용해서 직접 랜더링 하는 경우를 말함
        -> 따라서 브라우저에 소스가 도착했을땐 뷰단 소스는 비어있고, js가 동작해서 해당 부분을 채워주는 것임. -> 시간이 걸림
        -> 인터넷 환경이 느려서 js의 로드 및 실행이 지연되면 더 치명적임
        -> 검색엔진 에서는 감지할수 없게됨.

    3. next는 기본적으로 ssr임
    4. ssr은 서버단에서 ui를 먼저 로드한뒤 결과물을 브라우저에 내려주는것임

    5. next는 모든 컴포넌트를 ssr하지만 동작방식은 
        next에서 우선적으로 html로 이루어진 화면을 브라우저 랜더해주면 브라우저는 화면을 그려놓고 js단에서 react init을 시작 하는 방식
        따라서 js 비활성이어도 화면이 나오고 동작하지만, 이때는 동작방식이 순수 html 기반이지만 js가 활성화 되어있다면 이러한 동작들을 react js로 덮어버리는 방식임 이걸 Hydration 이라고 함.

    6. Hydration: html를 react component로 intial 하는것

    7. 이러한 Hydration은 next의 모든 컴포넌트에 대해 일어나지는 않음!
        -> "use client" 라는 문구가 추가된 컴포넌트에 대해서만 일어나는 일이다.
            즉, "use client" 라고 명시하는것은 next에게 이 컴포넌트는 Hydrated 되어야 해 라고 지정하는 것이다. 이렇게 된 요소들은 interactive 하다 할수 있음.
            