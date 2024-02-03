---
title: Table.ReverseRows
---

# Table.ReverseRows


## Description

傳回資料表，其中資料列會按照反向順序排列。


## Syntax

```powerquery
Table.ReverseRows(
    table as table
) as table
```


## Details

傳回資料表，其中來自輸入 <code>table</code> 的資料列會按照反向順序排列。


## Examples

### Example #1 
反轉資料表中的資料列順序。
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
