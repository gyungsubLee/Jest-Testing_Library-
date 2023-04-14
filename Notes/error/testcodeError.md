# Test Code - `fail`

강의를 학습하면서 강의와 다르게 test code 를 test 시 `fail`이 계속 발생했다.

error message를 구글링하고 별짓 다했는데 해결이 안되서 결국 강의 소스 코드하고 내 소스 코스를 [비교](https://www.diffnow.com/report)해 보았다.

<br/>
<br/>

### 결국에는 `명칭(변수명, 함수명)`을 잘못 입력한 오류였다.

<br/>

<img width="60%ß" alt="testcodeError" src="https://user-images.githubusercontent.com/95308384/232028001-0fd379fe-99b8-41ce-8154-591c736dcf57.png"/>

이러한 변수명, 등 명칭을 잘못 입력하는 오류들이 종종 발생한다.

직접 이렇게 일일이 찾고 수정하는 것은 생산성 측면에서 많은 낭비다

이러한 부분을 바로 알고 자동으로 수정하거 해결해주는 방법을 찾고 수정해야한다.

<br/>
<br/>

`찾아볼 keyword`: `prettier`

> 강의 초반에 `prettier` 와 `ESLint`에 대한 설정하는 방법이 나오는데 Error가 계속 발생해서 적용이 잘 안됐다. 해당 부분을 다시 알아보고 수정

<br/>
<br/>

---

Reference)<br/>
https://developer-p.tistory.com/81<br/>
https://www.diffnow.com/report<br/>
