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


<br/>
<br/>


#  Query
`렌더링 된 DOM 노드에 접근`하여 `엘레맨트를 가져`오는 메서드.<br/>
다양한 메서드가 존재함.


### ● 쿼리 예시 - getAllByRole

> get ( 쿼리 타입 ) / All ( 타겟의 개수) / ByRole( 타겟 유형)


<br/>
<br/>

## 1. 쿼리(Query) 타입

> ### ∙ get-
> 동기적(return target_node), 타겟 X -> error
> ### ∙ query-
> 동기적(return target_node), 타겟 X -> `null`
> ### ∙ find-s
> `비동기`(return `Promise`), 타겟 X -> error

<br/>

 비동기적 처리(이벤트, 데이터 fetching 등) -> find <br/>
 타겟 X 시  error X  -> query<br/>


<br/>
<br/>


## 2. 타겟 개수
### `하나`의 엘리먼트
> ### ∙ getBy- 
> ### ∙ queryBy- 
> ### ∙ findBy-

<br/>

### `다수`의 엘리먼트 탐색 (+`All`)
 matching 시 해당하는 모든 node를 `Array 형태`로 반환(find는 Promise)
> ### ∙ getAllBy- 
> 해당하는 elements X -> Error
> ### ∙ queryAllBy- 
> 해당하는 elements X -> `[]`(empty array)
> ### ∙ findAllBy-
>  matching 시 해당되는 모든 노드들이 담긴 배열의 프로미스 값 반환,
> 매칭 실패 시 `rejected `-> Error


<br/>

<img width="50%" alt="스크린샷 2023-01-27 오후 9 34 53" src="https://user-images.githubusercontent.com/95308384/215088375-c475169b-b4d2-488b-b6d0-dcb5f9e08bd7.png" width=50%>


<br/>
<br/>

## 3. 타겟 유형 (우선 순위 별 배치)

- -ByRole
- -ByLabelText
- -ByPlaceholderText
- -ByText
- -ByDisplayValue
- -ByAltText
- -ByTitle
- -ByTestId





<br/>
<br/>


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


>#### ● renderf
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



<br/>
<br/>


### 테스트 코드 실행

작성한 테스트 코드는 test runner를 통해 실행된다.

`[suffix].test.js` 에서 해당하는 `접미사(suffix)`를 가진 파일을 `test runner` 자동으로 탐색하여 test를 진행한다.


<br/>
<br/>

## `TDD(test-diven development, 테스트 주도 개발)`
구현해야하는 기능의 테스트 코드를 작성하고, 그 테스트를 통과하는 코드를 작성 및 수정하면서 개발하는 방식이다.

흔히 레드-그린 테스트라고 하는데, 코드 작성 전에 테스트에 실패하는 레드 테스트를 먼저 실행하고, 코드 작성 후 통과하는 그린 테스트를  확인한다.

TDD 

<br/>
<br/>

### 1. 테스트란?
테스트란, 작성한 코드가 잘 동작하는지 검증하는 작업을 말한다.
가장 기본적인 방법으로는 구현한 기능을 직접 사용하여 테스트하는 방식인데,
이렇게 프로젝트를 수동적으로 하나하나 확인하는 방법은 비용적으로 낭비가 큰 행위이다.

따라서 `테스트 코드를 작성하여 테스트를 자동화`한다.

테스트 자동화 시 리펙토링 후 테스트를 실행하여 앱이 이전과 같이 작동하는지 아닌지를 빠르게 판단이 가능하며

또한 프로젝트의 개발 과정에서 기존 코드의 기능들을 실수로 망가뜨리는 것을 효과적으로 방지할 수 있다.


<br/>
<br/>

### 2. 테스트의 종류 


<img width="50%" alt="스크린샷 2023-01-25 오후 2 33 27" src="https://user-images.githubusercontent.com/95308384/214487871-fd33f3af-cdd2-4e35-9a71-712545bd56b3.png" width="50%">

프론트 엔드의 테스트는 크게 세 가지 종류가 있다.

<br/>

#### ● E2E(End to End) 테스트
프로젝트가 브라우저 위에서 제대로 동작하는 지 사용자 관정에서 테스트하는 방법. 

셀레니움(Selenium), 퍼페티어(Pyppeteer) 등

<br/>

#### ● 통합(Integration) 테스트 
 기능 단위로 묶어서 하는 테스트로, 보통 유닛 테스트가 끝난 모듈을 묶어서 확인한다.

 여러 컴포넌트들이 잘 상호작요하고 렌더되는지, DOM 이벤트 발생 시 올바른 UI 변화가 발생하는 지 등.


<br/>

#### ● 유닛 테스트
최소 단위로 기능이 잘 동작하는지 확인 하는 방법.

컴포넌트가 잘 렌더되는지, 특정 함수가 잘 동작하는지 등.




<br/><br/>

## 함수 유닛 테스트
함수 유닛 테스를 권장하는 경우는 기능 테스트로 테스트 하기에는 로직이 너무 복잡한 경우이다.
-> 엣지 케이스가 너무 많은 경우 컴포넌트를 실행하여 가능한 모든 에지 케이스의 테스트를 수행하는 것은 과할 수 있다.

<br/>

### Commt 2.1 - 함수 유닛 테스트, Test Code / [Fn] replaceCamelWithSpaces / describe / toBe

<br/>

> [Fn] replaceCamelWithSpaces - 정규표현식 사용 -> `정규 표현식 정리 필요`<br/>
> `describe 문`으로 테스트를 그룹으로 묶어 한번에 처리 <br/>
> `Jest-toBe()` : Jest의 기본 매처(Matcher) 함수로 두 값을 직접 비교함 <br/>


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
https://learn-react-test.vlpt.us/#/<br/>
https://www.crocus.co.kr/1555<br/>
https://www.daleseo.com/react-testing-library/<br/>
https://www.daleseo.com/react-testing-library/<br/>

