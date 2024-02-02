---
title: Table.ToRows
---

# Table.ToRows


## Description

Creates a list of nested lists of row values from a table.


## Syntax

```powerquery
Table.ToRows(
    table as table
) as list
```


## Details

Creates a list of nested lists from the table, <code>table</code>.  Each list item is an inner list that contains the row values.


## Examples

### Example #1 
Create a list of the row values from the table.
```powerquery
Table.ToRows(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
    })
)
```

Result: 
```powerquery
{
    {1, "Bob", "123-4567"},
    {2, "Jim", "987-6543"},
    {3, "Paul", "543-7890"}
}
```




## Category
Table.Conversions
