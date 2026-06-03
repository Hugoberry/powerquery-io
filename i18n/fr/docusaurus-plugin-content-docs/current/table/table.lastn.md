---
title: Table.LastN
---

# Table.LastN


Retourne le dernier nombre de lignes spécifié.


## Syntax

```powerquery
Table.LastN(
    table as table,
    countOrCondition as any
) as table
```


## Remarks

Retourne les dernières lignes de la table `table`, en fonction de la valeur de `countOrCondition` :

-   Si `countOrCondition` est un nombre, autant de lignes sont retournées en commençant par la position (fin - `countOrCondition`).
-   Si `countOrCondition` est une condition, les lignes qui satisfont la condition sont retournés par position ascendante jusqu'au moment où une ligne ne remplit pas la condition.


## Examples

### Example #1
Recherche les deux dernières lignes de la table.
```powerquery
Table.LastN(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
    }),
    2
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
})
```


### Example #2
Recherche les deux dernières lignes où \[a\] > 0 dans la table.
```powerquery
Table.LastN(
    Table.FromRecords({
        [a = -1, b = -2],
        [a = 3, b = 4],
        [a = 5, b = 6]
    }),
    each _ [a] > 0
)
```

Result: 
```powerquery
Table.FromRecords({
    [a = 3, b = 4],
    [a = 5, b = 6]
})
```




## Category
Table.Row operations
