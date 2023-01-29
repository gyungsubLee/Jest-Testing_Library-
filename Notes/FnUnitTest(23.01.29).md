# Function Unit test(함수 유닛 테스트) 학습 정리 [ 23.01.29 ]


```javascript
// App.js
export function replaceCamelWithSpaces(colorName) {
  return colorName.replace(/\B([A-Z])\B/g, " $1");
}
```

<br/>


```javascript
// App.test.js
import { replaceCamelWithSpaces } from "./App";

describe('spaces before camel-case capital letters', () => {
  test('Works for no inner capital letters', () => {
    expect(replaceCamelWithSpaces('Red')).toBe('Red');
  });
  test('Works for one inner capital letter', () => {
    expect(replaceCamelWithSpaces('MidnightBlue')).toBe('Midnight Blue');
  });
  test('Works for multiple inner capital letters', () => {
    expect(replaceCamelWithSpaces('MediumVioletRed')).toBe('Medium Violet Red');
  });
});
```

<br/>

위 강의 에시 코드와 같이 `<App>` 컴포넌트 내부 함수 `replaceCamelWithSpaces()`를 export하여 

`App.test.js`에 불러와 해당 함수의 테스트를 진행하여 검증할 수 있다.  
(함수의 입-출력 값만 검증하는 것이기 때문에 컴포넌트를 활성화 할 필요 없음)
<br/>


위 예시와 같은 함수 유닛 테스트를 권장하는 경우는 `기능 테스트로 테스트 하기에는 로직이 너무 복잡`한 경우이다. 

`엣지 케이스가 너무 많`은 경우 컴포넌트를 실행하여 가능한 모든 에지 케이스의 테스트를 수행하는 것은 과할 수 있다


<br/>
<br/>


## [함수 유닛 테스트가 필요한 경우](https://www.udemy.com/course/jest-testing-library/learn/lecture/31621720#overview)

함수 유닛 테스트를 활용하는 경우로는 

위에서 정리했듯이 `엣지 케이스가 너무 많`아 컴포넌트를  실행하여 모든 케이스를 테스트(기능 테스트)하기에 많은 비용이 드는 경우가 있다.

<br/>

또한 기능 테스트의 실패를 파악하는데 활용돤다.

강의의 설명에 다르면 복잡도가 높은 기능 테스트를 리팩토링하는데 있어, 코드의 구조는 변했으나 동작이 그대로인 경우 실패에 대한 저항력이 생긴다고 한다.
이 말은, 테스트의 복원력이 좋으며 동작 변경이 변경되도 정상적으로 실행됨을 말한다.

하지만 이런 경우, 해당 테스트의 진단이 어려워진다.
이러한 복잡도가 높은 테스트의 실패는 광범위한 부분에 해당할 수 있기 때문이다.

따라서 이러한 경우 복잡도가 높은 함수를 따로 분리하여 테스트를 진행하여(함수 유닛 테스트) 실패하는 함수를 찾아내 해당 기능 테스트의 실패 원인을 찾아 낼 수 있다.

`(🧐 2번쨰 "기능 테스트 디버깅 시 활용" 이 이해가 되지 않는다. 해당하는 경우의 case를 추가 정리가 필요하다.)`




<br/>

>이러한 유닛 테스트 실행 의견은 사람들에 다르기 떄문에, 해당하는 팀의 컨벤션을 정의하여 따르는 것이 좋다고 함.




<br/>


------ 

Reference)<br/>

https://github.com/bonnie/udemy-TESTING-LIBRARY/blob/main/finished-projects/color-/src/App.js<br/>


https://www.udemy.com/course/jeststesting-library/learn/lecture/31621706#overview <br/>


https://www.udemy.com/course/jest-testing-library/learn/lecture/31621720#overview<br/>