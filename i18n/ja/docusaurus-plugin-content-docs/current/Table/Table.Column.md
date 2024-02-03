---
title: Table.Column
---

# Table.Column


## Description

テーブルの指定された列のデータをリストとして返します。


## Syntax

```powerquery
Table.Column(
    table as table,
    column as text
) as list
```


## Details

テーブル <code>table</code> 内の <code>column</code> で指定された列のデータをリストとして返します。


## Examples

### Example #1 
テーブル内の [Name] 列から値を返します。
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
