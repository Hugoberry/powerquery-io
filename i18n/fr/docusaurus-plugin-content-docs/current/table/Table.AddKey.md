---
title: Table.AddKey
---

# Table.AddKey


Ajoute une clé à une table.


## Syntax

```powerquery
Table.AddKey(
    table as table,
    columns as list,
    isPrimary as logical
) as table
```


## Remarks

Ajoute une clé à <code>table</code>, où <code>columns</code> est la liste des noms de colonne qui définissent la clé, et <code>isPrimary</code> spécifie si la clé est primaire.


## Examples

### Example #1 
Ajouter une clé primaire à une seule colonne à une table.
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
