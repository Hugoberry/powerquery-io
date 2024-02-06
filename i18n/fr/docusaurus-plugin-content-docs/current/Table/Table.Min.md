---
title: Table.Min
---

# Table.Min


Retourne la plus petite ligne ou une valeur par défaut à l&#39;aide des critères fournis.


## Syntax

```powerquery
Table.Min(
    table as table,
    comparisonCriteria as any,
    optional default as any
) as any
```


## Remarks

Retourne la plus petite ligne dans <code>table</code> en fonction de <code>comparisonCriteria</code>. Si la table est vide, la valeur <code>default</code> facultative est retournée.


## Examples

### Example #1 
Recherche dans la table la ligne avec la plus petite valeur dans la colonne [a].
```powerquery
Table.Min(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 6, b = 8]
    }),
    "a"
)
```

Result: 
```powerquery
[a = 2, b = 4]
```


### Example #2 
Recherche dans la table la ligne avec la plus petite valeur dans la colonne [a]. Retourne -1 si la table est vide.
```powerquery
Table.Min(#table({"a"}, {}), "a", -1)
```

Result: 
```powerquery
-1
```




## Category
Table.Ordering
