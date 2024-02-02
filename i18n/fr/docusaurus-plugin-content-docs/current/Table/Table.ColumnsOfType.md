---
title: Table.ColumnsOfType
---

# Table.ColumnsOfType


## Description

Retourne une liste avec les noms des colonnes qui correspondent aux types spécifiés.


## Syntax

```powerquery
Table.ColumnsOfType(
    table as table,
    listOfTypes as list
) as list
```


## Details

Retourne une liste avec les noms des colonnes de la table <code>table</code> qui correspondent aux types spécifiés dans <code>listOfTypes</code>.


## Examples

### Example #1 
Retourne les noms des colonnes de type Number.Type de la table.
```powerquery
Table.ColumnsOfType(
    Table.FromRecords(
        {[a = 1, b = "hello"]},
        type table[a = Number.Type, b = Text.Type]
    ),
    {type number}
)
```

Result: 
```powerquery
{"a"}
```




## Category
Table.Column operations
