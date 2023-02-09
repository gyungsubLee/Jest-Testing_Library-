# `TDD(Test Diven Development, 테스트 주도 개발)` 방법론


매우 짧은 개발 사이클을 반복하는 소프트웨어 개발 프로세스 중 하나로

먼저 요구사항을 검증하는 자동화된 테스트 케이스를 작성 후 그 테스트 케이스를 통과하기 위한 최소한의 코드를 생성 및 작성한 코드를 표준에 맞도록 리팩토링하는 개발 방법론이다.

흔히 레드-그린 테스트라고 하는데, 코드 작성 전에 테스트에 실패하는 레드 테스트를 먼저 실행하고, 코드 작성 후 통과하는 그린 테스트를 확인하며 개발을 진행한다.

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
Reference)<br/>
https://www.udemy.com/course/jest-testing-library/<br/>
http://clipsoft.co.kr/wp/blog/tddtest-driven-development-%EB%B0%A9%EB%B2%95%EB%A1%A0/<br/>
https://ko.wikipedia.org/wiki/%ED%85%8C%EC%8A%A4%ED%8A%B8_%EC%A3%BC%EB%8F%84_%EA%B0%9C%EB%B0%9C<br/>



https://mingule.tistory.com/43 - 정리 잘됨
