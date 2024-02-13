---
title: Table.Column
---

# Table.Column


Returns a specified column of data from the table as a list.


## Syntax

```powerquery
Table.Column(
    table as table,
    column as text
) as list
```


## Remarks

Returns the column of data specified by <code>column</code> from the table <code>table</code> as a list.


## Examples

### Example #1 
Returns the values from the [Name] column in the table.
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
