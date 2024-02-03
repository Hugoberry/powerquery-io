---
title: Table.AddKey
---

# Table.AddKey


## Description

Afegeix una clau al tipus de taula donat.


## Syntax

```powerquery
Table.AddKey(
    table as table,
    columns as list,
    isPrimary as logical
) as table
```


## Details

Afegeix una clau a <code>table</code>, donat que <code>columns</code> és la llista de noms de columna que defineixen la clau i <code>isPrimary</code> especifica si la clau és principal.


## Examples

### Example #1 
Afegeix una clau principal d&#39;una sola columna a una taula.
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
