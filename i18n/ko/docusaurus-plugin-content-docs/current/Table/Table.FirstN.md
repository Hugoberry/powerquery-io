---
title: Table.FirstN
---

# Table.FirstN


## Description

지정된 개수에 따라 처음 몇 개의 행을 반환합니다.


## Syntax

```powerquery
Table.FirstN(
    table as table,
    countOrCondition as any
) as table
```


## Details

<code>countOrCondition</code> 값에 따라 <code>table</code> 테이블의 첫 행을 반환합니다.    <ul>    <li> <code>countOrCondition</code>이(가) 숫자인 경우 맨 위에서부터 해당 개수만큼의 행이 반환됩니다. </li>    <li> <code>countOrCondition</code>이(가) 조건인 경우 행이 조건을 충족하지 않을 때까지 해당 조건을 충족하는 행이 반환됩니다.</li></ul>


## Examples

### Example #1 
테이블의 처음 두 개 행을 찾습니다.
```powerquery
Table.FirstN(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
    }),
    2
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
    [CustomerID = 2, Name = "Jim", Phone = "987-6543"]
})
```


### Example #2 
테이블에서 [a] &gt; 0인 처음 몇 개의 행을 찾습니다.
```powerquery
Table.FirstN(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = 3, b = 4],
        [a = -5, b = -6]
    }),
    each [a] > 0
)
```

Result: 
```powerquery
Table.FromRecords({
    [a = 1, b = 2],
    [a = 3, b = 4]
})
```




## Category
Table.Row operations
