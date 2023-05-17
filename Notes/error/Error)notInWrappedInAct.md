# Error) "Not wrapped in act"

React Testing Library를 사용 시, `Not wrappd in act ...` 오류가 종종 발생하였다.

해당 `강의 78` 영상에서도 정리를 하여 해당 영상 및 다른 글들을 참조하여 해당 오류에 대한 정리를 한다.

<br/>
<br/>

## `Not wrapped in act ...` 오류 발생 원인은 무엇인가?

해당 오류의 원인은 말 그대로 `act()`로 감싸지 않아서 이다.

그러면 여기서 생기는 의문점이 있다.

<br/>

> ### [`why`] 왜 act()로 감싸주어야하는가
>
> ### [`what`] 어떤 부분을 act로 감싸주어야하는가
>
> ### [`how`] 어떻게 act로 wrapping 처리를 하는가

<br/>

따라서 위 세가지의 의문점[`why`, `what`, `how`] 을 중점으로 해당 오류를 정의 및 정리한다.

<br/>
<br/>

## [`why`] 왜 act()로 감싸주어야 하는가?

우선 React Testing Library(RTL)는 React 컴포넌트를 테스트하기 위한 라이브러리이다.
React의 상태 및 속성 변경, 이벤트 헨들러 호출 등과 같은 액션에 대한 시뮬레이션을 제공하고, 컴포넌트가 예상대로 렌더링되고 상호작용되는지 테스트를 가능하게 한다.

React 컴포넌트는 상태나 속성이 변경되면 비동기적으로 렌더링을 수행하는데, 이러한 비동기 렌더링은 `setState()`나 `useEffec()` 와 같은 함수가 호출될 때 발생한다.
이러한 상태 변화는 일반적으로 다음 이벤트 루프에서 발생되며, 이벤트 루프가 실행되기 전에 테스트가 완료될 수 있다.
이로 인해 테스트가 예상대로 동작하지 않을 수 있다.

이러한 이유로 `act()` 함수가 도입되어 테스트 코드가 컴포넌트의 상태 변경이나 비동기 처리를 기다리게 하여 예상대로 동작 가능하게 만들어 준다.

해당 함수(act) 사용을 통해 테스트 진행 시 실제 브라우저나 앱에서 동작하는 것 과 같은 방식으로 테스트 가능하다.

<br/>

요즘 사용되는 React Testing Library에서는 `act 함수를 직접 쓰지 않`는다. RTL 내부에서 act()기 구현되어 있는 헬퍼함수(`waitFor()`, `userEvent()`, `findBy...` 등)를 재공하기 때문에 직접 사용할 필요는 없다. 이에 따라, RTL을 사용하면 act 함수를 쓰지 않아도 되지만, RTL을 사용하지 않고 직접 테스트를 구현할 때는 여전히 act 함수를 사용해야 한다.

따라서 정리해 보자면 act는 테스트 코드에서 발생되는 `비동기적 업데이트(컴포넌트의 상태 업데이트 or 사이드 이펙트)`를 정상적으로 수행하도록 하여 의도한대로 test가 동작 하도록 만들어주는 함수이며, RTL에서 내부적으로 act를 구현한 헬퍼함수를 제공하기 때문에, act가 아닌 헬퍼함수를 사용한다.

<br/>
<br/>

## [`what`] 어떤 부분을 act로 감싸주어야하는가

위에서 셜명했듯이 `act()` 테스트에서 발생되는 비동기적 업데이트를 정상적으로 수행하기 위해 사용하는 것이다.

따라서 컴포넌트의 state, side effect, 데이터를 fetch해서 그려지는 DOM 가져올떄 등 테스트 코드에서 발생되는` 비동기적 업데이트 로직`을 act로 wrapping 처리 한다.

<br/>
<br/>

## [`how`] 어떻게 act로 wrapping 처리를 하는가

위에서 언급했듯이 RTL에는 내부적으로 `act()`가 구현되어 있는 헬퍼 함수(`waitFor()`, `userEvent()`, `findBy...` 등)가 제공된다.

<br/>

### Case 1) RTL - `act()`

헬퍼 함수를 사용하지 않고 직접 `act()`를 사용해도 된다.<br/>
테스트 내에서 비동기적 업데이트(`버튼 클릭 이벤트`)를 `act()`로 감싸준다.

> Promise 변환 필수(`async`/`await`)

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

act 함수를 사용하여 클릭 이벤트가 발생하기 전에 렌더링과 같은 모든 작업이 완료되도록 보장하고, 작업이 완료된 후에는 어떠한 검증도 수행 가능하다. 이렇게 하면 테스트가 실제 사용자 경험과 더 가깝게 실행되도록 할 수 있다.

<br/>

### Case 2) userEvent 라이브러리 - `userEvent()`

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

RTL/userEvent에서 제공하는 헬퍼 함수 `userEvent` 사용하여 클릭 이벤트를 발생시키는 것으로도 act 함수를 대체할 수 있다. 이를 통해 코드의 가독성을 높일 수 있다.

<br/>

### Case 3) RTL - `waitFor()`

비동기 업데이트 로직에 RTL에서 제공하는 헬퍼 함수 `waitFor`를 wrapping 처리한다.

```javascript
it("이름 조회", async () => {
  ...
  fireEvent.click(button)

  await waitFor(() => expect(getByText("newjeong")).toBeInTheDocument())
})
```

<br/>

### Case 4) RTL - Query[`findBy-`]

`side Effect(useEffect로 data fetch)로 그려지는 DOM`을 RTL에서 제공하는 `findBy-` 쿼리를 통해 처리

```javascript
test("update scoop subtotal when scoops change", async () => {

   . . .

  // useEffect로 fetch -> DOM(spinbutton)
  const vanillaInput = await screen.findByRole("spinbutton", {
    name: "Vanilla",
});
```

<br/>
<br/>

## 정리

RTL 학습을 진행하면서 해당 오류가 참 많이 발생했다. 이 오류를 이해하고 정리하기 까지 참 오래 걸린 것 같다. 그래도 잘 정리?한 것 같아서 나름 기쁘다.

문제를 정의 및 이해하는데 있어 `의문점[why, what, how]`을 중점으로 정리했더니 글이 조금 더 정갈해 진 것 같다. 더 좋은 방식을 찾기 전까지는 해당 방법을 종종 사용할 것 같다.

그리고 ChatGPT가 참 도움이 많이 됐다.

ChatGPT 짱

---

Reference)<br/>
ChatGPT<br/>
https://coffeeandcakeandnewjeong.tistory.com/65<br/>
