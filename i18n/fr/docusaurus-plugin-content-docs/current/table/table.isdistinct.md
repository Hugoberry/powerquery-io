---
title: Table.IsDistinct
---

# Table.IsDistinct


Indique si la table contient seulement des lignes distinctes (pas de doublons).


## Syntax

```powerquery
Table.IsDistinct(
    table as table,
    optional comparisonCriteria as any
) as logical
```


## Remarks

Indique si `table` contient seulement des lignes distinctes (pas de doublons). Retourne `true` si les lignes sont distinctes, sinon `false`. Un paramètre facultatif `comparisonCriteria` spécifie quelles colonnes de la table sont testées pour la duplication. Si `comparisonCriteria` n'est pas spécifié, toutes les colonnes sont testées.


## Examples

### Example #1
Détermine si la table ne contient que des valeurs distinctes.
```powerquery
Table.IsDistinct(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    })
)
```

Result: 
```powerquery
true
```


### Example #2
Détermine si la table ne contient que des valeurs distinctes dans la colonne.
```powerquery
Table.IsDistinct(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 5, Name = "Bob", Phone = "232-1550"]
    }),
    "Name"
)
```

Result: 
```powerquery
false
```




## Category
Table.Membership
