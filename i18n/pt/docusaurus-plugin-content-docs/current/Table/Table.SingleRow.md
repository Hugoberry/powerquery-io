---
title: Table.SingleRow
---

# Table.SingleRow


## Description

Returns the single row in the table.


## Syntax

```powerquery
Table.SingleRow(
    table as table
) as record
```


## Details

Returns the single row in the one row <code>table</code>. If the <code>table</code> has more than one row, an exception is thrown.


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
