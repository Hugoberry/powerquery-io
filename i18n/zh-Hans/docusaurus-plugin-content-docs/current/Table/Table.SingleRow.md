---
title: Table.SingleRow
---

# Table.SingleRow


返回表中的单一行。


## Syntax

```powerquery
Table.SingleRow(
    table as table
) as record
```


## Remarks

返回一行 `table` 中的单一行。如果 `table` 具有多行，则引发错误。


## Examples

### Example #1
返回表中的单行。
```powerquery
Table.SingleRow(Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}))
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567"]
```




## Category
Table.Row operations
