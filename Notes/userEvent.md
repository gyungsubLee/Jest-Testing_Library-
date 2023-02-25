# useEvent

> ### 목차
>
> 1. userEvent란 무엇인가?
> 2. fireEvent와의 차이점은?
> 3. 사용 예시

<br/>
<br/>

## 1. `userEvent`란 무엇인가?

userEvent는 Testing Library의 companion library로 사용자의 상호 작용을 시뮬레이션하여 test 가능하게 만들어준다.

<br/>
<br/>

## 2. `fireEvent`와의 차이점은?

`fireEvent`와 `userEvent` 둘다 이벤트를 발생시키는 함수지만

`userEvent`는 마치 사라미 직접 브라우저 상에서 행동하는 것처럼 유저 이벤트를 발생시켜 유지가 특정 event 실행 시 발생 가능한 모든 이벤트를 시뮬레이션 가능하게 한다. (fireEvent는 명시한 특정 이벤트 하나만 발생시킨다.)

따라서 userEvent를 사용하는 것이 더 실제 환경과 가깝게 테스트를 할 수 있다. 더 적합한 방법이다.

<br/>
<br/>

## 3. userEvent 사용 방법 및 예시

> ### userEvent `Keyword`
>
> setup() <br/>
> return promise -> async, await 필수<br/>

<br/>

### 3-1 `setup()`

`setup()`메서드를 사용하여 initialize 후 사용 가능하다. (아래의 예시와 같이 사용하면 됨. [출처- Testing-Library공식문서](https://testing-library.com/docs/user-event/setup))

```javascript
import userEvent from "@testing-library/user-event";

const user = userEvent.setup();

await user.keyboard("[ShiftLeft>]"); // Press Shift (without releasing it)
await user.click(element); // Perform a click with `shiftKey: true`
```

<br/>

### 3-2. `async`, `await`

ex) 강의 42 - fireEvent -> userEvent 예시 코드

```javascript
// Error 발생
test("", () => {
  const user = userEvent.setup();
  render(<SummaryForm />);
  const checkbox = screen.getByRole("checkbox", {
    name: /terms and conditions/i,
  });
});

const confirmButton = screen.getByRole("button", { name: /confirm order/i });

user.click(checkbox); // Error
```

userEvent는 프로미스 객체를 반환하기 때문에 `async`,`await` keyword 사용이 필수여야한다.

위와 같이 `async`,`await` keyword를 사용하지 않을 시 `userEvent의 메서드가 끝나기 전에 단언문(Assertion)이 실행`되어 오류가 발생한다.

<br/>

```javascript
// async, await 추가 -> 정상 실행
test("", async ) => {
  const user = userEvent.setup();
  render(<SummaryForm />);
  const checkbox = screen.getByRole("checkbox", {
    name: /terms and conditions/i,
  });
});

const confirmButton = screen.getByRole("button", { name: /confirm order/i });

await user.click(checkbox);
 . . .
```

<br/>
<br/>

## 정리)

event를 test하는데 있어 fireEvent보다 더 적합한 방법이다.<br/>
`setup()`를 사용하여 initaiiz한다.<br/>
`프로미스 객체`를 반환하기 때문에 `async`, `await` 사용이 필수이다.

<br/>

Reference)<br/>
https://cocoder16.tistory.com/67<br/>
https://testing-library.com/docs/user-event/setup<br/>
https://testing-library.com/docs/user-event/intro<br/>
https://github.com/testing-library/user-event
