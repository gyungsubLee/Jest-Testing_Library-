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

<br/>


위 예시와 같이 함수 유닛 테스를 권장하는 경우는 기능 테스트로 테스트 하기에는 로직이 너무 복잡한 경우이다. 

엣지 케이스가 너무 많은 경우 컴포넌트를 실행하여 가능한 모든 에지 케이스의 테스트를 수행하는 것은 과할 수 있다


<br/>

------ 

Reference)<br/>

https://github.com/bonnie/udemy-TESTING-LIBRARY/blob/main/finished-projects/color-button/src/App.js<br/>


https://www.udemy.com/course/jeststesting-library/learn/lecture/31621706#overview <br/>