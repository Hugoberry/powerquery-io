---
title: Table.ColumnCount
---

# Table.ColumnCount


## Description

테이블의 열 수를 반환합니다.


## Syntax

```powerquery
Table.ColumnCount(
    table as table
) as number
```


## Details

<code>table</code> 테이블의 열 수를 반환합니다.


## Examples

### Example #1 
테이블의 열 수를 확인합니다.
```powerquery
Table.ColumnCount(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
    })
)
```

Result: 
```powerquery
3
```




## Category
Table.Information
