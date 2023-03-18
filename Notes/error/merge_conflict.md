# [Merge Conflict](https://velog.io/@dltjq2323/merge-conflict-%ED%95%B4%EA%B2%B0)

## 문제)

을 생성 중 commit message를 애매하게 작성하여 `--amend`를 통해 commit을 수정하던 중 commit message가 수정되지 않고 같은 commit이 중복해서 생성되었다.

따라서 `git reset HEAD^`를 통해 가장 최근의 커밋을 삭제헀다.

그러나 cmd를 잘못 입력하여 2번 삭제가 되었다.

`git pull`을 통하여 원격 브런치에서 해당 정보를 pull 할려고 하니 `merge conflict`가 발생하여 pull이되지 않았다.

<br/>

## 해결1- 병합(Merge)

우선 현재의 code와 Github 저장소의 Commit을 대조하여 conflict가 발생하는 부분을 찾기 위해, local에서 작업 중인 code의 스냅샷을 찍고, Commit을 만든다.

```git
git add .
git commit -m "[작업 내용]"
```

<br/>

그 다음 아래의 명령어를 입력

```git
git merge --allow-unrelated-histories [remote 이름]/[branch]

git merge --allow-unrelated-histories origin/main
```

해당 명령어를 입력하는 충돌이 발생한 부분을 자세히 알려준다.

따라서 해당 파일로 이동 후 하나하나 고쳐주면 된다.

<br/>

마지막으로 충돌 코드들을 다 수정 후 commit을 생성하고 main 브랜치와 병합처리 해주면 해결된다.
(merge conflict가 새로운 branch를 생성하면서 해결되었음)

```git
git add .
git commit -m "[작업 내용]"

// 브랜치 병합
git checkout main
git merge [생성된 branch]
```

---

Reference)<br/>
https://kbs4674.tistory.com/38
