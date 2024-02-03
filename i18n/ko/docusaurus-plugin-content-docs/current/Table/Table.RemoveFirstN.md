---
title: Table.RemoveFirstN
---

# Table.RemoveFirstN


## Description

건너뛴 첫 번째 개수 행이 포함된 테이블을 반환합니다.


## Syntax

```powerquery
Table.RemoveFirstN(
    table as table,
    optional countOrCondition as any
) as table
```


## Details

<code>table</code> 테이블에서 지정한 첫 번째 개수의 행 <code>countOrCondition</code>이(가) 포함되지 않은 테이블을 반환합니다.    제거된 행 수는 선택적 매개 변수 <code>countOrCondition</code>에 따라 달라집니다.     <ul>    <li> <code>countOrCondition</code>이(가) 제거된 경우 첫 번째 행만 건너뜁니다. </li>    <li> <code>countOrCondition</code>이(가) 숫자인 경우 해당 개수의 행(맨 위부터 시작)을 제거합니다. </li>    <li> <code>countOrCondition</code>이(가) 조건인 경우 행이 조건을 충족하지 않을 때까지 해당 조건을 충족하는 행을 제거합니다.</li>    </ul>


## Examples

### Example #1 
테이블의 첫 번째 행을 제거합니다.
```powerquery
Table.RemoveFirstN(
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
    [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
    [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
})
```


### Example #2 
테이블의 처음 두 개 행을 제거합니다.
```powerquery
Table.RemoveFirstN(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    2
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
    [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
})
```


### Example #3 
테이블에서 [CustomerID] &lt;=2인 첫 번째 행을 제거합니다.
```powerquery
Table.RemoveFirstN(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    each [CustomerID] <= 2
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
    [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
})
```




## Category
Table.Row operations
