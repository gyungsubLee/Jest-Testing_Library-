# Testing Library/Jest
[유데미- Jest 및 Testing Library](https://www.udemy.com/course/jest-testing-library/)

[강의 코드](https://github.com/bonnie/udemy-TESTING-LIBRARY)

[github - Jest_dom](https://github.com/testing-library/jest-dom)


<br/>
<br/>

 
> ## 학습 목표
> 1. 버튼이나 체크 박스 클릭과 같은 DOM에 영향을 주는 이벤트를 테스트 코드로 작성
> 2. 헬퍼 함수를 만들고 유닛 테스트로 헬퍼 함수 테스트 <br/>
> ( 해당 작업 이유 -> 기능 테스트 / 유닛 테스트 상호 배타적이지 않다?, 뭔소리지?)
> 3. 간단한 애플리케이션(아이스크림 판매 앱) 제작 <br/>
>  => 컴포넌트 로드와 같은 사용자 사용작용 테스트 / 서버 비동기식 기능 테스트   
> 


<br/>
<br/>


> ## 🧐 의문점 및 추가 정리 필요한 부분
> ∙ [Mock]() - 미작성<br/>
> ∙ [상호작용(이벤트) 테스트하기]() - 미작성<br/>
>
> ∙ [Test 정리, 작성 및 실행](./Notes/Test(23.02.02)t.md) - 작성 중<br/>
> ∙ [Test Driven Development](./Notes/TDD.md) - 작성 중 <br/>
> ∙ [Query - 타겟 유형 추가 정리 필요](./Notes/Query(ß3.01.27).md) - 작성 중<br/>
> ∙ [Formating, Linting]() - 작성중<br/>
>
> ∙ ['함수 유닛 테스트 활용'의 case 추가 정리 필요, 'case2-기능 테스트 디버깅 활용' 이해 안됨.](./Notes/FnUnitTest(23.01.29).md) - 추가 정리 필요<br/>

> ∙ []()<br/>



<br/>
<br/>

## Notes

 

|제목|내용|
|------|---|
|[TDD](./Notes/TDD.md)| |ß
|[Test](./Notes/Test(23.02.02)t.md)| |
|[Evnet Test](./Notes/%EC%9D%B4%EB%B2%A4%ED%8A%B8%ED%85%8C%EC%8A%A4%ED%8A%B8(23.01.31).md)| |
|[Query](./Notes/Query(23.01.27).md)|쿼리 타입, 타겟 개수, 타겟 유형|
|[Unit Test](./Notes/UnitTest(23.02.02).md)|유닛 테스트, 함수 유닛 테스트(강의), 함수 유닛 테스트 활용법|
|[Formater, Linter](/Notes/Formating(23.01.30).md)| | 
|[Mock](./Notes/Mock.md)||

> |[]()| |



<br/>
<br/>



## RTL 설치 ,  RTL / Jest

### RTL 설치
RTL(React Testing Library)는 React 컴포넌트를 테스트 하기 위해 만들어진 도구로,
기본적으로 CRA(Create React App)에 내장되어 있다.

만약 CRA를 사용 않고 개발 환경 직접 설정 시 아래와 같이 `testing-library/react`를 설치해주면 된다.

```
npm install --save-dev @testing-library/react
```

<br/>

### RTL, Jest 비교

> ◦ Jest : 자체적인 test runner와 test util 제공<br/>
> ◦ RTL : Jest + React 컴포넌트 test util 제공<br/>

RTL에 Jest가 포함됨.
따라서 리액트 내부 테스트 코드 작성 방식은 Jest 와 상당 부분 유사함.


<br/>
<br/>


------
Reference)<br/>
https://www.udemy.com/course/jest-testing-library/<br/>
https://tecoble.techcourse.co.kr/post/2021-10-22-react-testing-library/<br/>
https://testing-library.com/docs/queries/about/<br/>
https://www.crocus.co.kr/1555<br/>
https://www.daleseo.com/react-testing-library/<br/>
https://www.daleseo.com/react-testing-library/<br/>

