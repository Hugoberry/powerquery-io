---
title: Table.Keys
---

# Table.Keys


## Description

Renvoie les clés de la table spécifiée.


## Syntax

```powerquery
Table.Keys(
    table as table
) as list
```


## Details

Renvoie les clés de la table spécifiée.


## Examples

### Example #1 
Obtenir la liste des clés d’une table.
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
