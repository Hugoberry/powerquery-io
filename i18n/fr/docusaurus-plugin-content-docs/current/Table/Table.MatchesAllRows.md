---
title: Table.MatchesAllRows
---

# Table.MatchesAllRows


Indique si toutes les lignes de la table répondent à la condition spécifiée.


## Syntax

```powerquery
Table.MatchesAllRows(
    table as table,
    condition as function
) as logical
```


## Remarks

Indique si toutes les lignes dans <code>table</code> correspondent au <code>condition</code> qui est spécifié. Retourne <code>true</code> si toutes les lignes correspondent, sinon <code>false</code>.


## Examples

### Example #1 
Détermine si toutes les valeurs des lignes dans la colonne [a] sont paires dans la table.
```powerquery
Table.MatchesAllRows(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 6, b = 8]
    }),
    each Number.Mod([a], 2) = 0
)
```

Result: 
```powerquery
true
```


### Example #2 
Détermine si toutes les valeurs des lignes sont [a = 1, b = 2], dans la table &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4]})&lt;/code&gt;.
```powerquery
Table.MatchesAllRows(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = -3, b = 4]
    }),
    each _ = [a = 1, b = 2]
)
```

Result: 
```powerquery
false
```




## Category
Table.Row operations
