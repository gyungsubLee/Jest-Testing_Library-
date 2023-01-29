# Testing_Library-Jest
[유데미- Jest 및 Testing Library](https://www.udemy.com/course/jest-testing-library/)

[강의 코드](https://github.com/bonnie/udemy-TESTING-LIBRARY)

[github - Jest_dom](https://github.com/testing-library/jest-dom)


<br/>
 
> ## 학습 목표
> 1. 버튼이나 체크 박스 클릭과 같은 DOM에 영향을 주는 이벤트를 테스트 코드로 작성
> 2. 헬퍼 함수를 만들고 유닛 테스트로 헬퍼 함수 테스트 <br/>
> ( 해당 작업 이유 -> 기능 테스트 / 유닛 테스트 상호 배타적이지 않다?, 뭔소리지?)
> 3. 간단한 애플리케이션(아이스크림 판매 앱) 제작 <br/>
>  => 컴포넌트 로드와 같은 사용자 사용작용 테스트 / 서버 비동기식 기능 테스트   
> 


<br/>

> ## 🧐 의문점 및 추가 정리 필요한 부분
> ∙ [Test Driven Development](./Notes/TDD.md) - 작성 중 <br/>
> ∙ [Query - 타겟 유형 추가 정리 필요](./Notes/Query(ß3.01.27).md)<br/>
> ∙ ['함수 유닛 테스트 활용'의 case 추가 정리 필요, 'case2-기능 테스트 디버깅 활용' 이해 안됨.](./Notes/FnUnitTest(23.01.29).md)<br/>
> 


<br/>
<br/>

## Notes


|제목|내용|
|------|---|
|[Query](./Notes/Query(23.01.27).md)|쿼리 타입, 타겟 개수, 타겟 유형|
|[함수 유닛 테스트](./Notes/FnUnitTest(23.01.29).md)|강의 예시, 함수 유닛 테스트 활용법|
|테스트1|테스트2|


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
<br/>




## 테스트 코드 작성 및 실행


### 테스트 코드 작성


테스트는 보통 아래과 같은 패턴을 이룬다.

> `컴포넌트를 띄우고` → `특정 액션 발생` → `결과 확인` 



```javascript
// Test Code 예시1
import { render, screen } from '@testing-library/react';
import App from './App';


test('renders learn react link'. ()=>{
    render(<App>);
    const linkElememt = screen.getByText(/learn react/i);
    expect(linkElement).toBeTheDocument();  
});
```

<br/>

```javascript
// Test Code 예시2
import { render } from '@testing-library/react';
import Counter from './Counter';


describe('Counter test', () => {
  it('should render Counter', () => {
    render(<Counter />);
  });
}); 
```

<br/>


>#### ● render
>JSX를 인자로 받아 해당하는 가상 DOM 생성
>(`screen` 전역 객체로 가상 돔에 접근)
>
>#### ● screen.getByText()
>screen 객체의 getByText 메서드를 통해 
>
>#### ● describe
>같은 맥락의 test 그룹화함.
>
>#### ● it 
> 개별 테스트 수행 (test 메서드와 동일)
>
> #### ● describe 문
>테스트를 그룹으로 묶어 한번에 처리
>
> #### ● Jest-toBe()
> Jest의 기본 매처(Matcher) 함수로 두 값을 직접 비교함
>

<br/>
<br/>


### 테스트 코드 실행

작성한 테스트 코드는 test runner를 통해 실행된다.

`[suffix].test.js` 에서 해당하는 `접미사(suffix)`를 가진 파일을 `test runner` 자동으로 탐색하여 test를 진행한다.


<br/>
<br/>





<br/>
<br/>


## Behavior Driven Test(행위 주도 테스트)
React Testing Library는 ```Behavior Driven Test(행위 주도 테스트)``` 방법론이  대두 되면서 함께 주목 받기 시작한 테스팅 라이브러리 이다. 

```Behavior Driven Test(행위 주도 테스트)```는 기존에 관행이던 ```Implementation Driven Test(구현 주도 테스트)```의 단점을 보완하기 위한 방법론으로, 
기존의 ```Implementation Driven Test(구현 주도 테스트)```에서의 애플리케이션이 어떻게 작동하는지에 대한 테스트가 아닌, 
사용자가 에플리케이션을 이용하는 관점에서 ```실제 사용자 경험```을 위주로 테스트를 작성핟다.

<br/>

```html
<h2 class="title">제목</h2>
```


예를 들어, 위와 같은 UI를 테스트한다고 가장할 떄,

```Implementation Driven Test(구현 주도 테스트)```는  ```<h2>```라는 태그 와 ```title```이라는 클래스가 사용 되었는지 여부를 테스트한다.

반면, ```Behavior Driven Test(행위 주도 테스트)```에서는 ```사용자에게 어떤 컨텐츠가 보```이는지, ``사용자가 어떤 이벤트를 발생``시켰을 때, 그에 따른 올바른 ```상호작용이 발생```되는지를 테스트한다.

<br/>

또한 예시의 ```<h2>``` 태그를 ```<h3>```로 변경 시, 

```Implementation Driven Test(구현 주도 테스트)```는 작성된 테스트가 문제가 되지만,

```Behavior Driven Test(행위 주도 테스트)```는 문제가 되지 않는다.

왜냐하면 애플리케이션 입장에서는 구현 디테일이 바뀐 것 이지만, 사용자 입장에서는 ```제목```이라는 텍스트가 화면에 있다는 사실은 변함이 없기 떄문이다.




<br/><br/>


## Mock 이란?













<br/>


------
Reference)<br/>
https://www.udemy.com/course/jest-testing-library/<br/>
https://tecoble.techcourse.co.kr/post/2021-10-22-react-testing-library/<br/>
https://testing-library.com/docs/queries/about/<br/>
https://www.crocus.co.kr/1555<br/>
https://www.daleseo.com/react-testing-library/<br/>
https://www.daleseo.com/react-testing-library/<br/>

