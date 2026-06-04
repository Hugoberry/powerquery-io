---
title: Table.Keys
---

# Table.Keys


Retorna les claus de la taula especificada.


## Syntax

```powerquery
Table.Keys(
    table as table
) as list
```


## Remarks

Retorna les claus de la taula especificada.


## Examples

### Example #1
Obtén la llista de claus d'una taula.
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
