---
title: Table.ColumnNames
---

# Table.ColumnNames


Returns the column names as a list.


## Syntax

```powerquery
Table.ColumnNames(
    table as table
) as list
```


## Remarks

Returns the column names in the table <code>table</code> as a list of text.


## Examples

### Example #1 
Find the column names of the table.
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
