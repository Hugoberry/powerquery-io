---
title: Table.ContainsAny
---

# Table.ContainsAny


Indique si l'un des enregistrements spécifiés s'affiche sous la forme de lignes dans la table.


## Syntax

```powerquery
Table.ContainsAny(
    table as table,
    rows as list,
    optional equationCriteria as any
) as logical
```


## Remarks

Indique si l'un des enregistrements spécifiés dans la liste d'enregistrements `rows` s'affiche sous la forme de lignes dans `table`. Un paramètre facultatif `equationCriteria` peut être spécifié pour contrôler la comparaison entre les lignes de la table.


## Examples

### Example #1
Détermine si la table `({[a = 1, b = 2], [a = 3, b = 4]})` contient les lignes `[a = 1, b = 2]` ou `[a = 3, b = 5]`.
```powerquery
Table.ContainsAny(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = 3, b = 4]
    }),
    {
        [a = 1, b = 2],
        [a = 3, b = 5]
    }
)
```

Result: 
```powerquery
true
```


### Example #2
Détermine si la table `({[a = 1, b = 2], [a = 3, b = 4]})` contient les lignes `[a = 1, b = 3]` ou `[a = 3, b = 5]`.
```powerquery
Table.ContainsAny(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = 3, b = 4]
    }),
    {
        [a = 1, b = 3],
        [a = 3, b = 5]
    }
)
```

Result: 
```powerquery
false
```


### Example #3
Détermine si la table `(Table.FromRecords({[a = 1, b = 2], [a = 3, b = 4]}))` contient les lignes `[a = 1, b = 3]` ou `[a = 3, b = 5]` en comparant seulement la colonne \[a\].
```powerquery
Table.ContainsAny(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = 3, b = 4]
    }),
    {
        [a = 1, b = 3],
        [a = 3, b = 5]
    },
    "a"
)
```

Result: 
```powerquery
true
```




## Category
Table.Membership
