---
title: Table.ToRecords
---

# Table.ToRecords


Converts a table to a list of records.


## Syntax

```powerquery
Table.ToRecords(
    table as table
) as list
```


## Remarks

Converts a table, <code>table</code>, to a list of records.


## Examples

### Example #1 
Convert the table to a list of records.
```powerquery
Table.ToRecords(
    Table.FromRows(
        {
            {1, "Bob", "123-4567"},
            {2, "Jim", "987-6543"},
            {3, "Paul", "543-7890"}
        },
        {"CustomerID", "Name", "Phone"}
    )
)
```

Result: 
```powerquery
{
    [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
    [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
}
```




## Category
Table.Conversions
