---
title: Table.Column
---

# Table.Column


## Description

將資料表中的指定資料行傳回成清單。


## Syntax

```powerquery
Table.Column(
    table as table,
    column as text
) as list
```


## Details

將資料表 <code>table</code> 中 <code>column</code> 所指定的資料行傳回成清單。


## Examples

### Example #1 
傳回資料表中 [Name] 資料行的值。
```powerquery
Table.Column(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    "Name"
)
```

Result: 
```powerquery
{"Bob", "Jim", "Paul", "Ringo"}
```




## Category
Table.Column operations
