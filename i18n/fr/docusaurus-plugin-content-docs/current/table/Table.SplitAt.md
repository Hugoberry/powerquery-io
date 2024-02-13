---
title: Table.SplitAt
---

# Table.SplitAt


Renvoie une liste contenant le nombre spécifié de lignes depuis le début et les lignes restantes.


## Syntax

```powerquery
Table.SplitAt(
    table as table,
    count as number
) as list
```


## Remarks

Renvoie une liste contenant deux tables : une table avec le nombre spécifié de lignes depuis le début de <code>table</code> (comme spécifié par <code>count</code>) et une table contenant les lignes restantes dans <code>table</code>.Si les tables de la liste ainsi créée sont énumérées une fois exactement et dans l’ordre, la fonction énumère <code>table</code> une fois seulement.


## Examples

### Example #1 
Renvoie les deux premières lignes de la table et les lignes restantes de la table.
```powerquery
Table.SplitAt(#table({"a", "b", "c"}, {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}}), 2)
```

Result: 
```powerquery
{
    #table({"a", "b", "c"}, {{1, 2, 3}, {4, 5, 6}}),
    #table({"a", "b", "c"}, {{7, 8, 9}})
}
```




## Category
Table.Row operations
