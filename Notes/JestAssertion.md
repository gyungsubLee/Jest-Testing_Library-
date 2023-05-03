# Assertion(단언)

```javascript
expect([DOM]).matcher[jest - dom]();
```

Assertion(단언)은 `테스트의 통과 여부를 결정`한다.

Jest의 전역 메서드인 `expect()`를 통해 DOM의 상태를 예측하며 평가한다.

`expect()`는 `가져온 DOM을 인자`로 받아 `jest-dom의 matcher`를 통해 `단언 유형(상태)`를 정의하고 해당하는 DOM이 단언 유형에 맞는지 `평가(test)`를 한다.

<br/>
<br/>

## DOM 가져오기 (screen.[Qeury])

RTL의 `screen.[Query]`를 통해 페이지에서 요소(DOM)인 element.textContent를 가져온다.

```javascript
// ex)
import { screen } from "@testing-library/react":

const sample = screen.getByRole("button");
```

<br/>

> `Query`에 대한 내용은 [Note/Query 문서](<./Query(23.01.27).md>) 에서 따로 정리함.

 <br/>
 <br/>

## Matcher(jest-dom)

matcher로 사용되는 jest-dom은 create-react-app(CRA)과 함께 제공되며 CRA 설치 시 함꼐 설치된다.

`setupTests.js`파일을 통해 각 테스트 전 jest-dom을 가져와 모든 테스트에서 사용할 수 있다.

(`expect()`도 jest-dom 임. 따라서 따로 import하지 않아도 됨.)

```javascript
expect(DOM).toBeEnabled();
```

> [[ github ]Jest-dom - matcher 살펴보기](https://github.com/testing-library/jest-dom)

<br/>

---

Reference)<br/>
https://www.udemy.com/course/jest-testing-library/learn/lecture/31621580?start=30#content<br/>
https://github.com/testing-library/jest-dom<br/>
