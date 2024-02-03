---
title: Table.AddKey
---

# Table.AddKey


## Description

Agrega una clave a una tabla.


## Syntax

```powerquery
Table.AddKey(
    table as table,
    columns as list,
    isPrimary as logical
) as table
```


## Details

Agregar una clave a <code>table</code>, donde<code>columns</code> es la lista de nombres que define la clave, y <code>isPrimary</code> especifica si la clave es la principal.


## Examples

### Example #1 
Agregue una clave principal de una sola columna a una tabla.
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
