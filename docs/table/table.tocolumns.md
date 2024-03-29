---
title: Table.ToColumns
---

# Table.ToColumns


Creates a list of nested lists of column values from a table.


## Syntax

```powerquery
Table.ToColumns(
    table as table
) as list
```


## Remarks

Creates a list of nested lists from the table, <code>table</code>.  Each list item is an inner list that contains the column values.


## Examples

### Example #1 
Create a list of the column values from the table.
```powerquery
Table.ToColumns(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"]
    })
)
```

Result: 
```powerquery
{{1, 2}, {"Bob", "Jim"}, {"123-4567", "987-6543"}}
```




## Category
Table.Conversions
