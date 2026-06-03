---
title: Table.AddKey
---

# Table.AddKey


Adds a key to a table.


## Syntax

```powerquery
Table.AddKey(
    table as table,
    columns as list,
    isPrimary as logical
) as table
```


## Remarks

Adds a key to `table`, where `columns` is the list of column names that define the key, and `isPrimary` specifies whether the key is primary.


## Examples

### Example #1
Add a single-column primary key to a table.
```powerquery
let
    table = Table.FromRecords({
        [Id = 1, Name = "Hello There"],
        [Id = 2, Name = "Good Bye"]
    }),
    resultTable = Table.AddKey(table, {"Id"}, true)
in
    resultTable
```

Result: 
```powerquery
Table.FromRecords({
    [Id = 1, Name = "Hello There"],
    [Id = 2, Name = "Good Bye"]
})
```




## Category
Table.Transformation
