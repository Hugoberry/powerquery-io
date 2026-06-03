---
title: Table.Max
---

# Table.Max


Retourne la plus grande ligne ou la valeur par défaut à l'aide des critères fournis.


## Syntax

```powerquery
Table.Max(
    table as table,
    comparisonCriteria as any,
    optional default as any
) as any
```


## Remarks

Retourne la plus grande ligne dans `table` en fonction de `comparisonCriteria`. Si la table est vide, la valeur `default` facultative est retournée.


## Examples

### Example #1
Recherche la ligne avec la plus grande valeur dans la colonne \[a\] dans la table `({[a = 2, b = 4], [a = 6, b = 8]})`.
```powerquery
Table.Max(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 6, b = 8]
    }),
    "a"
)
```

Result: 
```powerquery
[a = 6, b = 8]
```


### Example #2
Recherche la ligne avec la plus grande valeur dans la colonne \[a\] dans la table `({})`. Retourne -1 si l'objet est vide.
```powerquery
Table.Max(#table({"a"}, {}), "a", -1)
```

Result: 
```powerquery
-1
```




## Category
Table.Ordering
