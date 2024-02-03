---
title: Table.RemoveLastN
---

# Table.RemoveLastN


## Description

마지막 N개 행이 제거된 테이블을 반환합니다.


## Syntax

```powerquery
Table.RemoveLastN(
    table as table,
    optional countOrCondition as any
) as table
```


## Details

<code>table</code> 테이블에서 지정한 마지막 <code>countOrCondition</code>개 행이 포함되지 않은 테이블을 반환합니다.        제거된 행 수는 선택적 매개 변수 <code>countOrCondition</code>에 따라 달라집니다.    <ul>    <li> <code>countOrCondition</code>이(가) 제거된 경우 마지막 행만 건너뜁니다. </li>    <li> <code>countOrCondition</code>이(가) 숫자인 경우 해당 개수의 행(맨 아래부터 시작)을 제거합니다. </li>    <li> <code>countOrCondition</code>이(가) 조건인 경우 행이 조건을 충족하지 않을 때까지 해당 조건을 충족하는 행을 제거합니다.</li>    </ul>


## Examples

### Example #1 
테이블의 마지막 행을 제거합니다.
```powerquery
Table.RemoveLastN(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    1
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
    [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
})
```


### Example #2 
테이블에서 [CustomerID] &gt; 2인 마지막 행을 제거합니다.
```powerquery
Table.RemoveLastN(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    each [CustomerID] >= 2
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})
```




## Category
Table.Row operations
