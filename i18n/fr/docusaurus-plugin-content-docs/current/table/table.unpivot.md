---
title: Table.Unpivot
---

# Table.Unpivot


Traduit un ensemble de colonnes dans une table en paires attribut-valeur.


## Syntax

```powerquery
Table.Unpivot(
    table as table,
    pivotColumns as list,
    attributeColumn as text,
    valueColumn as text
) as table
```


## Remarks

Traduit un ensemble de colonnes dans une table en paires attribut-valeur, associées au reste des valeurs dans chaque ligne.


## Examples

### Example #1
Prend les colonnes « a », « b » et « c » dans la table `({[ key = "x", a = 1, b = null, c = 3 ], [ key = "y", a = 2, b = 4, c = null ]})` et annule le basculement en paires d'attribut-valeur.
```powerquery
Table.Unpivot(
    Table.FromRecords({
        [key = "x", a = 1, b = null, c = 3],
        [key = "y", a = 2, b = 4, c = null]
    }),
    {"a", "b", "c"},
    "attribute",
    "value"
)
```

Result: 
```powerquery
Table.FromRecords({
    [key = "x", attribute = "a", value = 1],
    [key = "x", attribute = "c", value = 3],
    [key = "y", attribute = "a", value = 2],
    [key = "y", attribute = "b", value = 4]
})
```




## Category
Table.Column operations
