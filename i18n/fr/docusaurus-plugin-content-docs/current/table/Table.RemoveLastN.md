---
title: Table.RemoveLastN
---

# Table.RemoveLastN


Retourne une table avec les N dernières lignes supprimées.


## Syntax

```powerquery
Table.RemoveLastN(
    table as table,
    optional countOrCondition as any
) as table
```


## Remarks

Retourne une table qui ne contient pas les <code>countOrCondition</code> dernières lignes de la table <code>table</code>.        Le nombre de lignes supprimées dépend du paramètre facultatif <code>countOrCondition</code>.    <ul>    <li> Si <code>countOrCondition</code> est omis, seule la dernière ligne est supprimée. </li>    <li> Si <code>countOrCondition</code> est un nombre, autant de lignes (démarrant par le bas) sont supprimées. </li>    <li> Si <code>countOrCondition</code> est une condition, les lignes qui satisfont la condition sont supprimées jusqu'au moment où une ligne ne remplit pas la condition.</li>    </ul>


## Examples

### Example #1 
Supprime la dernière ligne de la table.
```powerquery
Table.RemoveLastN(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    1
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
    [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
})
```


### Example #2 
Supprime les dernières lignes de la table où [CustomerID] &gt;2.
```powerquery
Table.RemoveLastN(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    each [CustomerID] >= 2
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})
```




## Category
Table.Row operations
