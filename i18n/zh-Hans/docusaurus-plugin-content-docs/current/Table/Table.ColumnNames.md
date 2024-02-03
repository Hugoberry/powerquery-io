---
title: Table.ColumnNames
---

# Table.ColumnNames


## Description

返回列名作为列表。


## Syntax

```powerquery
Table.ColumnNames(
    table as table
) as list
```


## Details

返回表 <code>table</code> 中的列名作为文本列表。


## Examples

### Example #1 
查找表的列名。
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
