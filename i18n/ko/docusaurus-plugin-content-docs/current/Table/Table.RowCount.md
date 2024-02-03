---
title: Table.RowCount
---

# Table.RowCount


## Description

테이블의 행 수를 반환합니다.


## Syntax

```powerquery
Table.RowCount(
    table as table
) as number
```


## Details

<code>table</code>의 행 수를 반환합니다.


## Examples

### Example #1 
테이블의 행 수를 찾습니다.
```powerquery
Table.RowCount(
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
