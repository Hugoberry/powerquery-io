---
title: Table.ReverseRows
---

# Table.ReverseRows


## Description

행이 역순으로 포함된 테이블을 반환합니다.


## Syntax

```powerquery
Table.ReverseRows(
    table as table
) as table
```


## Details

<code>table</code> 입력의 행이 역순으로 포함된 테이블을 반환합니다.


## Examples

### Example #1 
테이블의 행을 반대로 바꿉니다.
```powerquery
Table.ReverseRows(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    })
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 4, Name = "Ringo", Phone = "232-1550"],
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
    [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
    [CustomerID = 1, Name = "Bob", Phone = "123-4567"]
})
```




## Category
Table.Row operations
