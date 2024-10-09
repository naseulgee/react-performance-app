<!-- start: ================================================================ -->
# [참고] VSCode Settings
<details>
<summary>접기/펼치기</summary>

## Extensions
- ES7+ React/Redux/React-Native snippets
- Tailwind CSS IntelliSense
- Prettier
- Auto Close Tag
- Auto Rename Tag
- Dracula Official
- ESLint (**v2.2.2**)
- HTML CSS Support
- HTML Snippets
- indent-rainbow
- TODO Highlight

## 설정 파일 생성 및 내용 입력
- ./vscode/**파일명.code-snippets** : 코드 자동완성 단축키 설정 파일
- ./vscode/**settings.json** : 작업 환경 설정 파일
</details>
<!-- end  : ================================================================ -->


<!-- start: ================================================================ -->
# [참고] Git
<details>
<summary>접기/펼치기</summary>

```
git init
git remote add origin 저장소주소
git pull origin 저장소주소
git status
git add .
git status
git commit -m "메세지"
git push origin master
```
</details>
<!-- end  : ================================================================ -->


<!-- start: ================================================================ -->
# React 프로젝트 세팅
<details>
<summary>접기/펼치기</summary>

## 패키지 설치 및 세팅
```
npx create-react-app 경로/어플명
npm i -D postcss autoprefixer
npm i -D prettier eslint eslint-plugin-react eslint-plugin-prettier eslint-config-prettier
```
1. 프로젝트 생성
2. CSS 를 위한 패키지 설치
    - postcss
        : css 파일의 후처리를 도와줌
    - autoprefixer
        : 접근성을 위한 접두사를 붙여줌
3. 문법 교정과 코드 포맷팅을 위한 패키지 설치
    - prettier
        : 코드 포맷팅
    - eslint
        : 문법 교정
    - eslint-plugin-react
    - eslint-plugin-prettier
    - eslint-config-prettier
        : eslint와 prettier 간 포맷팅 충돌이 발생할 수 있는 rule을 해제

### [옵션] 추가 패키지 설치 및 세팅
```
npm i -D tailwindcss prettier prettier-plugin-tailwindcss
npm i react-icons
```
1. tailwindcss 패키지 설치
    - tailwindcss
        : 클래스명 선언 방식으로 사용 가능
        : 리액트에서 bootstrap 사용 시, 스타일 컴포넌트 추가 방식으로 사용해야 함으로 불편함
    - prettier
        : 코드 포멧팅
    - prettier-plugin-tailwindcss
        : prettier 가 코드 포맷팅 시 tailwindcss 유틸리티 클래스를 지정된 기준에 따라 알파벳 순서로 자동 정렬
2. icon 패키지 설치
    - react-icons
        : FontAwesome 을 포함해 여러 아이콘 라이브러리를 제공하는 패키지

## 기본 테스트를 위한 파일 및 폴더 생성
1. src/assets/images
3. src/components/index.js
4. src/pages/index.js

## 설정 파일 생성
1. jsconfig.json
2. postcss.config.js
3. tailwind.config.js
4. .prettierrc
4. .prettierignore

### 파일 내용 수정
1. /src/index.css
</details>
<!-- end  : ================================================================ -->


<!-- start: ================================================================ -->
# 🚀 배포
<details open>
<summary>접기/펼치기</summary>

## 패키지 설치 및 세팅
```
npm i -D gh-pages
```
1. 깃헙에서 SPA 배포를 위한 패이지

## 설정 파일 수정
1. package.json 파일 내용 수정
```
....
"homepage": "https://깃헙유저명.github.io/저장소명/",
"scripts": {
    ....
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
},
```
## Github 배포
1. 수정사항 모두 push
2. `npm run deploy` 실행
3. homepage 에 입력한 주소 접근하여 배포여부 확인
</details>
<!-- end  : ================================================================ -->