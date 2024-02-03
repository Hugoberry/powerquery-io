---
title: Table.AddKey
---

# Table.AddKey


## Description

Кілтті кестеге қосады.


## Syntax

```powerquery
Table.AddKey(
    table as table,
    columns as list,
    isPrimary as logical
) as table
```


## Details

Кілтті анықтайтын <code>columns</code> баған атауларының тізімі болса және <code>isPrimary</code> кілт негізгі болып табыла ма, соны көрсетсе, <code>table</code> ішіне кілтті қосады.


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
