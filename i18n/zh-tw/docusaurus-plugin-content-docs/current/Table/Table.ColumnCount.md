---
title: Table.ColumnCount
---

# Table.ColumnCount


## Description

傳回資料表中的資料行數目。


## Syntax

```powerquery
Table.ColumnCount(
    table as table
) as number
```


## Details

傳回資料表 <code>table</code> 中的資料行數目。


## Examples

### Example #1 
找出資料表中資料行的數目。
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
