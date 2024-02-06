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

返回一行 <code>table</code> 中的单一行。如果 <code>table</code> 具有多行，则引发异常。


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
