---
title: Table.PrefixColumns
---

# Table.PrefixColumns


返回一个表，其中所有列均以给定的文本为前缀。


## Syntax

```powerquery
Table.PrefixColumns(
    table as table,
    prefix as text
) as table
```


## Remarks

返回一个表，其中来自所提供的 `table` 中的所有列名均以给定的文本 `prefix` 为前缀，另加一个采用格式 `prefix.ColumnName` 的句点。


## Examples

### Example #1
为表中的列加前缀 "MyTable"。
```powerquery
Table.PrefixColumns(
    Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}),
    "MyTable"
)
```

Result: 
```powerquery
Table.FromRecords({[MyTable.CustomerID = 1, MyTable.Name = "Bob", MyTable.Phone = "123-4567"]})
```




## Category
Table.Column operations
