# Testing_Library-Jest
[유데미- Jest 및 Testing Library 학습 정리본](https://www.udemy.com/course/jest-testing-library/)

[강의 코드](https://github.com/bonnie/udemy-TESTING-LIBRARY)

[github - Jest_dom](https://github.com/testing-library/jest-dom)


 
> ## 학습 목표
> - 1. 버튼이나 체크 박스 클릭과 같은 DOM에 영향을 주는 이벤트를 테스트 코드로 작성
> - 2. 헬퍼 함수를 만들고 유닛 테스트로 헬퍼 함수 테스트 <br/>
> ( 해당 작업 이유 -> 기능 테스트 / 유닛 테스트 상호 배타적이지 않다?, 뭔소리지?)
> - 3. 간단한 애플리케이션(아이스크림 판매 앱) 제작 <br/>
>  => 컴포넌트 로드와 같은 사용자 사용작용 테스트 / 서버 비동기식 기능 테스트   

헬퍼함수?
기능 테스트 / 유닛 테스트 

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


















<br/>


------

<br/>

Reference)<br/>

https://www.daleseo.com/react-testing-library/
