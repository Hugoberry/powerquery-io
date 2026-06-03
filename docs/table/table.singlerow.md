---
title: Table.SingleRow
---

# Table.SingleRow


Returns the single row in the table.


## Syntax

```powerquery
Table.SingleRow(
    table as table
) as record
```


## Remarks

Returns the single row in the one row `table`. If the `table` has more than one row, an error is raised.


## Examples

### Example #1
Return the single row in the table.
```powerquery
Table.SingleRow(Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}))
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567"]
```




## Category
Table.Row operations
