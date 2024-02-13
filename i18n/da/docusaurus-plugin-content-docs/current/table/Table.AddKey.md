---
title: Table.AddKey
---

# Table.AddKey


Føjer en nøgle til en tabel.


## Syntax

```powerquery
Table.AddKey(
    table as table,
    columns as list,
    isPrimary as logical
) as table
```


## Remarks

Føjer en nøgle til <code>table</code>, hvor <code>columns</code> er listen over kolonnenavne, der definerer nøglen, og <code>isPrimary</code> angiver, om nøglen er primær.


## Examples

### Example #1 
Føj en primær nøgle med en enkelt kolonne til en tabel.
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
