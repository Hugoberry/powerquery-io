---
title: Table.MatchesAnyRows
---

# Table.MatchesAnyRows


Indique si l'une des lignes de la table répond à la condition spécifiée.


## Syntax

```powerquery
Table.MatchesAnyRows(
    table as table,
    condition as function
) as logical
```


## Remarks

Indique si l'une des lignes dans `table` correspond au `condition` qui est spécifié. Retourne `true` si l'une des lignes correspond, sinon `false`.


## Examples

### Example #1
Détermine si l'une des valeurs des lignes dans la colonne \[a\] est paire dans la table `({[a = 2, b = 4], [a = 6, b = 8]})`.
```powerquery
Table.MatchesAnyRows(
    Table.FromRecords({
        [a = 1, b = 4],
        [a = 3, b = 8]
    }),
    each Number.Mod([a], 2) = 0
)
```

Result: 
```powerquery
false
```


### Example #2
Détermine si l'une des valeurs des lignes est \[a = 1, b = 2\], dans la table `({[a = 1, b = 2], [a = 3, b = 4]})`.
```powerquery
Table.MatchesAnyRows(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = -3, b = 4]
    }),
    each _ = [a = 1, b = 2]
)
```

Result: 
```powerquery
true
```




## Category
Table.Row operations
