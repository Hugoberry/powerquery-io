---
title: Table.TransformRows
---

# Table.TransformRows


Transforme les lignes de la table à l&#39;aide de la fonction de transformation spécifiée.


## Syntax

```powerquery
Table.TransformRows(
    table as table,
    transform as function
) as list
```


## Remarks

Crée une liste <code></code> en appliquant l’opération de <code>transform</code> à chaque ligne de <code>table</code>.


## Examples

### Example #1 
Transformer les lignes d’un tableau en une liste de nombres.
```powerquery
Table.TransformRows(
    Table.FromRecords({
        [a = 1],
        [a = 2],
        [a = 3],
        [a = 4],
        [a = 5]
    }),
    each [a]
)
```

Result: 
```powerquery
{1, 2, 3, 4, 5}
```


### Example #2 
Transformez les lignes d’un tableau numérique en enregistrements textuels.
```powerquery
Table.TransformRows(
    Table.FromRecords({
        [a = 1],
        [a = 2],
        [a = 3],
        [a = 4],
        [a = 5]
    }),
    (row) as record => [B = Number.ToText(row[a])]
)
```

Result: 
```powerquery
{
    [B = "1"],
    [B = "2"],
    [B = "3"],
    [B = "4"],
    [B = "5"]
}
```




## Category
Table.Transformation
