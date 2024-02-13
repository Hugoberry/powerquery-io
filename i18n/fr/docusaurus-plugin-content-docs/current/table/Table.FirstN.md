---
title: Table.FirstN
---

# Table.FirstN


Retourne les premières lignes en fonction du nombre spécifié.


## Syntax

```powerquery
Table.FirstN(
    table as table,
    countOrCondition as any
) as table
```


## Remarks

Retourne les premières lignes de la table <code>table</code>, en fonction de la valeur de <code>countOrCondition</code> :    <ul>    <li> Si <code>countOrCondition</code> est un nombre, autant de lignes (en commençant par le haut) sont retournées. </li>    <li>Si <code>countOrCondition</code> est une condition, les lignes qui satisfont la condition sont retournés jusqu'au moment où une ligne ne remplit pas la condition.</li></ul>


## Examples

### Example #1 
Recherche les deux premières lignes de la table.
```powerquery
Table.FirstN(
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
    [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
    [CustomerID = 2, Name = "Jim", Phone = "987-6543"]
})
```


### Example #2 
Recherche les premières lignes où [a] &gt; 0 dans la table.
```powerquery
Table.FirstN(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = 3, b = 4],
        [a = -5, b = -6]
    }),
    each [a] > 0
)
```

Result: 
```powerquery
Table.FromRecords({
    [a = 1, b = 2],
    [a = 3, b = 4]
})
```




## Category
Table.Row operations
