---
title: Table.AddKey
---

# Table.AddKey


Кілтті кестеге қосады.


## Syntax

```powerquery
Table.AddKey(
    table as table,
    columns as list,
    isPrimary as logical
) as table
```


## Remarks

Кілтті анықтайтын `columns` баған атауларының тізімі болса және `isPrimary` кілт негізгі болып табыла ма, соны көрсетсе, `table` ішіне кілтті қосады.


## Examples

### Example #1
Бір бағанды бастапқы кілтті кестеге қосыңыз.
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
