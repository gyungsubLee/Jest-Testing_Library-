# ESLint / Prettier

> "`eslint`는 `코드 퀄리티`를 보장하도록 도와주고, `prettier`는 `코드 스타일`을 깔끔하게 혹은 통일되도록 도와준다."

<br/>

## Prettier ( formater )

Prettier는 포맷터(Formater)로써 코드를 자동으로 포맷팅 해준다. 

> `들여쓰기(tab)`, `빈칸` 만 자동  포맷팅 됨.

<br/>

```javascript
imoprt {useEffect} from 'react';

// 저장 시 아래로 자동으로 띄어쓰기 처리됨.
import { useEffect } from 'react';
```



<br/>
<br/>


## ESLinter ( Linter )

ESLinter는 JS-linter로 정적 코드(editer에서 작성 중인 코드)를 분석 및 `규칙을 위반하는(오류) 코드 구문`을 `마킹`하여 알려주는 편리한 도구이다.

코드의 스타일을 `일관적`으로 유지시켜줘 협업 시 유용하게 사용 가능하다.

`plugin`을 통해 특정 라이브러리들(jest, react ...)의 `스타일을 확장`하여 코드를 관리 할 수 있다.

<br/>

```javascript
expect(checkbox).toHaveAttribute(checked);

// ESLint - Jest_dom 
// -> 아래 코드로 jest_dom 스타일에 맞게 자동으로 고쳐준다.
expect(checkbox).toBeChecked();
```




<br/>
<br/>

## 정리 

[ESLinter - RTL](https://github.com/testing-library/eslint-plugin-testing-library)

[ESLinter - Jest](https://github.com/testing-library/eslint-plugin-jest-dom)


<img width="430" alt="스크린샷 2023-02-09 오후 8 13 07" src="https://user-images.githubusercontent.com/95308384/217797423-c8c164ee-1600-4d34-ac16-99f90cafa445.png">



<br/>
<br/>


----

Reference)<br/>
https://helloinyong.tistory.com/325<br/>

https://typescript-eslint.io/getting-started/<br/>

https://ko.wikipedia.org/wiki/%EB%A6%B0%ED%8A%B8_(%EC%86%8C%ED%94%84%ED%8A%B8%EC%9B%A8%EC%96%B4)<br/>



