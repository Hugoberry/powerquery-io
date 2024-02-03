---
title: Table.Distinct
---

# Table.Distinct


## Description

테이블에서 중복 행을 제거합니다.


## Syntax

```powerquery
Table.Distinct(
    table as table,
    optional equationCriteria as any
) as table
```


## Details

테이블에서 중복 행을 제거합니다.    선택적 매개 변수인 <code>equationCriteria</code>에서 중복을 테스트할 테이블의 열을 지정합니다. <code>equationCriteria</code>에서 지정하지 않으면 모든 열을 테스트합니다.<br />    <br />    Power Query가 때로 특정 작업을 백엔드 데이터 원본("폴딩"이라고도 함)에 오프로드하기도 하고, 꼭 필요하지 않은     작업을 건너뛰어 쿼리를 최적화하기도 하기에 일반적으로 어떤 특정한 중복이 보존될 거라는 보장은 없습니다.    예를 들어 고유한 열 값 집합이 있는 첫 번째 행은 유지되고, 테이블 더 아래쪽에 있는 행은 제거된다고 가정할 수 없습니다.    중복 제거가 예상대로 작동하도록 하려면 먼저 <code>Table.Buffer</code>를 사용하여 테이블을 버퍼링하세요.


## Examples

### Example #1 
테이블에서 중복 행을 제거합니다.
```powerquery
Table.Distinct(
    Table.FromRecords({
        [a = "A", b = "a"],
        [a = "B", b = "b"],
        [a = "A", b = "a"]
    })
)
```

Result: 
```powerquery
Table.FromRecords({
    [a = "A", b = "a"],
    [a = "B", b = "b"]
})
```


### Example #2 
&lt;code&gt;(\{[a = &#34;A&#34;, b = &#34;a&#34;], [a = &#34;B&#34;, b = &#34;a&#34;], [a = &#34;A&#34;, b = &#34;b&#34;]})&lt;/code&gt; 테이블의 [b] 열에서 중복 행을 제거합니다.
```powerquery
Table.Distinct(
    Table.FromRecords({
        [a = "A", b = "a"],
        [a = "B", b = "a"],
        [a = "A", b = "b"]
    }),
    "b"
)
```

Result: 
```powerquery
Table.FromRecords({
    [a = "A", b = "a"],
    [a = "A", b = "b"]
})
```




## Category
Table.Membership
