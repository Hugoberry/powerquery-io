---
title: Table.ColumnNames
---

# Table.ColumnNames


列名をリストとして返します。


## Syntax

```powerquery
Table.ColumnNames(
    table as table
) as list
```


## Remarks

テーブル <code>table</code> の列名をテキストのリストとして返します。


## Examples

### Example #1 
テーブルの列名を調べます。
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
