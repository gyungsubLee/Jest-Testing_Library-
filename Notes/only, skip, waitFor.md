# 특정 테스트 실행(only, skip) 및, waitFor

## 특정 테스트 실행(only, skip)

<br/>

<img width="721" alt="스크린샷 2023-03-23 오후 8 55 34" src="https://user-images.githubusercontent.com/95308384/227196567-aaeeeedb-39b9-4259-9a9f-1317f3293397.png">

강의 학습 중 test code를 실행했더니 이전에 작성했던 test code도 함께 실행됨.

<br/><br/>

`only` 와 `skip` keyword를 통해 특정 test만을 실행 할 수 있다.

> `only` 와 `skip` 는 Jest의 함수로 테스트 코드를 디버깅 할 때 사용된다.

<br/>

### `only()`

테스트 파일 안의 많은 테스트 함수 중 실패한 함수 하나만을 단독으로 실핼하고 싶은 경우, 해당 테스트 함수 뒤에 `.only()`라고 붙여주고 test를 실행하면 JestRunner가 `.only`가 붙은 함수만 실행해 준다.

```javascript
test.only("run only", () => {
  // 이 테스트 함수만 실행됨
});

test("not run", () => {
  // 실행 안됨
});
```

<br/>

### `skip()`

`skip()`은 `only()`와 반대로 어떤 함수만 빼고 실행해보고 싶을 때, 해당 테스트 함수에 `skip()`을 붙여주면 Jest Runner는 해당 함수를 제외하고 다른 테스트 함수들만 실행한다.

```javascript
test.skip("skip", () => {
  // 이 테스트 함수는 제외됨
});

test("run", () => {
  // 실행됨
});
```

<br/>

---

Reference)<br/>
https://www.daleseo.com/jest-before-after/<br/>
https://inpa.tistory.com/entry/JEST-%F0%9F%93%9A-%ED%85%8C%EC%8A%A4%ED%8A%B8%EC%97%90-%EC%9C%A0%EC%9A%A9%ED%95%9C-%ED%95%A8%EC%88%98-only-skip-describe-it<br/>
