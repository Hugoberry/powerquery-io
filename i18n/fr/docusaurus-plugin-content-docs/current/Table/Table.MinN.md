---
title: Table.MinN
---

# Table.MinN


Retourne les plus petites lignes à l&#39;aide des critères fournis.


## Syntax

```powerquery
Table.MinN(
    table as table,
    comparisonCriteria as any,
    countOrCondition as any
) as table
```


## Remarks

Retourne les plus petites lignes dans <code>table</code> en fonction de <code>comparisonCriteria</code>. Une fois que les lignes sont triées, le paramètre <code>countOrCondition</code> doit être spécifié pour filtrer davantage le résultat. Notez que l'algorithme de tri ne peut pas garantir un résultat de tri fixe. Le paramètre <code>countOrCondition</code> peut prendre plusieurs formes :    <ul>        <li> Si un nombre est spécifié, une liste de <code>countOrCondition</code> éléments au maximum par ordre croissant est retournée. </li>        <li> Si une condition est spécifiée, la liste des éléments qui satisfont initialement la condition est retournée. Quand un élément ne remplit pas la condition, aucun autre élément n'est pris en compte. </li> </ul>


## Examples

### Example #1 
Recherche dans la table la ligne avec la valeur la plus petite dans la colonne [a] avec la condition [a] &lt; 3. Les lignes sont triées avant que le filtre soit appliqué.
```powerquery
Table.MinN(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 0, b = 0],
        [a = 6, b = 4]
    }),
    "a",
    each [a] < 3
)
```

Result: 
```powerquery
Table.FromRecords({
    [a = 0, b = 0],
    [a = 2, b = 4]
})
```


### Example #2 
Recherche dans la table la ligne avec la valeur la plus petite dans la colonne [a] avec la condition [b] &lt; 0. Les lignes sont triées avant que le filtre soit appliqué.
```powerquery
Table.MinN(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 8, b = 0],
        [a = 6, b = 2]
    }),
    "a",
    each [b] < 0
)
```

Result: 
```powerquery
Table.FromRecords({})
```




## Category
Table.Ordering
