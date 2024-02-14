---
title: Table.Keys
---

# Table.Keys


Devuelve las claves de la tabla especificada.


## Syntax

```powerquery
Table.Keys(
    table as table
) as list
```


## Remarks

Devuelve las claves de la tabla especificada.


## Examples

### Example #1 
Obtenga la lista de claves de una tabla.
```powerquery
let
    table = Table.FromRecords({
        [Id = 1, Name = "Hello There"],
        [Id = 2, Name = "Good Bye"]
    }),
    tableWithKeys = Table.AddKey(table, {"Id"}, true),
    keys = Table.Keys(tableWithKeys)
in
    keys
```

Result: 
```powerquery
{[Columns = {"Id"}, Primary = true]}
```




## Category
Table.Transformation
