# Error) "Not wrapped in act"

React Testing Library를 사용할 시, `상태(state)를 업데이트`하는 코드를 테스트할 때 "Warning: An update to [component] inside a test was not wrapped in act(...)"와 같은 경고 메시지가 나타날 수 있다.

이 경고 메시지는 React 업데이트를 수행할 때 act 함수로 감싸지 않았다는 것을 의미한다.

<br/>

## Solution 1) RTL - `act()`

이러한 경고를 해결하는 방법 중 하나는, `React Testing Library에서 제공하는 act 헬퍼 함수`를 사용하는 것이다.

React Testing Library에서는 act 헬퍼 함수를 사용하여 테스트 내에서 업데이트를 감싸주고, `비동기 작업을 처리하기 위해 Promise를 반환하는 것이 좋다.` 예를 들어, `async/await 구문으로 act 함수를 호출`하면 `비동기적으로 업데이트를 처리`할 수 있다.

<br/>

```javascript
import { render, screen, act } from "@testing-library/react";

test("updates state", async () => {
  // given
  render(<Component />);
  const button = screen.getByRole("button", { name: "Update" });

  // 1. act()
  // 2. 비동기 작업 (async/await) -> promise 반환
  await act(async () => {
    button.click();
  });

  // then
  expect(screen.getByText("New value")).toBeInTheDocument();
});
```

act 함수를 사용하면 클릭 이벤트가 발생하기 전에 렌더링과 같은 모든 작업이 완료되도록 보장하며, 작업이 완료된 후에는 어떠한 검증도 수행할 수 있다는 것을 나타낸다. 이렇게 하면 테스트가 실제 사용자 경험과 더 가깝게 실행되도록 할 수 있다.

<br/>
<br/>

## Solution 2) userEvent 라이브러리 - `userEvent()`

```javascript
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

test("updates state", async () => {
  // given
  render(<Component />);
  const button = screen.getByRole("button", { name: "Update" });

  // when
  await userEvent.click(button);

  // then
  expect(screen.getByText("New value")).toBeInTheDocument();
});
```

userEvent 라이브러리를 사용하여 클릭 이벤트를 발생시키는 것으로도 act 함수를 대체할 수 있다. 이를 통해 코드의 가독성이 높아질 수 있다

<br/>
<br/>

## Solution 3) RTL - `waitFor()`

RTL에서 제공하는 `waitFor` 헬퍼 함수를 통해 act()를 대처 가능하다.

```javascript
it("이름 조회", async () => {
  ...
  fireEvent.click(button)

  await waitFor(() => expect(getByText("newjeong")).toBeInTheDocument())
})
```

<br/>

---

Reference)<br/>
ChatGPT<br/>
https://coffeeandcakeandnewjeong.tistory.com/65<br/>
