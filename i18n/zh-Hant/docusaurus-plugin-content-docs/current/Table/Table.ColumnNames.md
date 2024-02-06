---
title: Table.ColumnNames
---

# Table.ColumnNames


將資料行名稱傳回成清單。


## Syntax

```powerquery
Table.ColumnNames(
    table as table
) as list
```


## Remarks

將資料表 <code>table</code> 中的資料行名稱傳回成文字清單。


## Examples

### Example #1 
找出資料表的資料行名稱。
```powerquery
Table.ColumnNames(
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
{"CustomerID", "Name", "Phone"}
```




## Category
Table.Column operations
