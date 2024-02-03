---
title: Table.AddKey
---

# Table.AddKey


## Description

Engade unha clave a unha táboa.


## Syntax

```powerquery
Table.AddKey(
    table as table,
    columns as list,
    isPrimary as logical
) as table
```


## Details

Engade unha clave a <code>table</code>, onde <code>columns</code> é a lista de nomes de columnas que definen a clave e <code>isPrimary</code> especifica se a clave é principal.


## Examples

### Example #1 
Engade unha clave principal dunha soa columna a unha táboa.
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
