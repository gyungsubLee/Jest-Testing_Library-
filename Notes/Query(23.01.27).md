# Query(23.01.27)
`렌더링 된 DOM 노드에 접근`하여 `엘레맨트를 가져`오는 메서드.<br/>
다양한 메서드가 존재함.


### ● 쿼리 예시 - getAllByRole

> get ( 쿼리 타입 ) / All ( 타겟의 개수) / ByRole( 타겟 유형)


<br/>
<br/>

## 1. 쿼리(Query) 타입

> ### ∙ get-
> 동기적(return target_node), 타겟 X -> error
> ### ∙ query-
> 동기적(return target_node), 타겟 X -> `null`
> ### ∙ find-
> `비동기`(return `Promise`), 타겟 X -> error

<br/>

 비동기적 처리(이벤트, 데이터 fetching 등) -> find <br/>
 타겟 X 시  error X  -> query<br/>


<br/>
<br/>


## 2. 타겟 개수
### `하나`의 엘리먼트
해당하는 하나의 노드 반환
> ### ∙ getBy- 
> ### ∙ queryBy- 
> ### ∙ findBy-

<br/>

### `다수`의 엘리먼트 탐색 (+`All`)
 matching 시 해당하는 모든 node를 `Array 형태`로 반환(find는 Promise)
> ### ∙ getAllBy- 
> 해당하는 elements X -> Error
> ### ∙ queryAllBy- 
> 해당하는 elements X -> `[]`(empty array)
> ### ∙ findAllBy-
>  matching 시 해당되는 모든 노드들이 담긴 배열의 프로미스 값 반환,
> 매칭 실패 시 `rejected `-> Error


<br/>

<img width="50%" alt="스크린샷 2023-01-27 오후 9 34 53" src="https://user-images.githubusercontent.com/95308384/215088375-c475169b-b4d2-488b-b6d0-dcb5f9e08bd7.png" width=50%>


<br/>
<br/>

## 3. 타겟 유형 (우선 순위 별 배치)

아래의 

- -ByRole
- -ByLabelText
- -ByPlaceholderText
- -ByText
- -ByDisplayValue
- -ByAltText
- -ByTitle
- -ByTestId



<br/>

---- 

<br/>


Reference)<br/>

https://testing-library.com/docs/queries/about/<br/>
https://tecoble.techcourse.co.kr/post/2021-10-22-react-testing-library/<br/>

