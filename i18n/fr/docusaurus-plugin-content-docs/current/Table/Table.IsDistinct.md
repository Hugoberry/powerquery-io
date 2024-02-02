---
title: Table.IsDistinct
---

# Table.IsDistinct


## Description

Indique si la table contient seulement des lignes distinctes (pas de doublons).


## Syntax

```powerquery
Table.IsDistinct(
    table as table,
    optional comparisonCriteria as any
) as logical
```


## Details

Indique si <code>table</code> contient seulement des lignes distinctes (pas de doublons). Retourne <code>true</code> si les lignes sont distinctes, sinon <code>false</code>.    Un paramètre facultatif <code>comparisonCriteria</code> spécifie quelles colonnes de la table sont testées pour la duplication. Si <code>comparisonCriteria</code> n'est pas spécifié, toutes les colonnes sont testées.


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
