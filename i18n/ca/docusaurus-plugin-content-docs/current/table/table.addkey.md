---
title: Table.AddKey
---

# Table.AddKey


Afegeix una clau al tipus de taula donat.


## Syntax

```powerquery
Table.AddKey(
    table as table,
    columns as list,
    isPrimary as logical
) as table
```


## Remarks

Afegeix una clau a `table`, donat que `columns` és la llista de noms de columna que defineixen la clau i `isPrimary` especifica si la clau és principal.


## Examples

### Example #1
Afegeix una clau principal d'una sola columna a una taula.
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
