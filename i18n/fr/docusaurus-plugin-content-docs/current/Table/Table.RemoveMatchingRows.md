---
title: Table.RemoveMatchingRows
---

# Table.RemoveMatchingRows


Supprime toutes les occurrences des lignes spécifiées de la table.


## Syntax

```powerquery
Table.RemoveMatchingRows(
    table as table,
    rows as list,
    optional equationCriteria as any
) as table
```


## Remarks

Supprime toutes les occurrences du <code>rows</code> spécifié de <code>table</code>.    Un paramètre facultatif <code>equationCriteria</code> peut être spécifié pour gérer la comparaison entre les lignes de la table.


## Examples

### Example #1 
Supprime les lignes où [a = 1] dans la table &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4], [a = 1, b = 6]})&lt;/code&gt;.
```powerquery
Table.RemoveMatchingRows(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = 3, b = 4],
        [a = 1, b = 6]
    }),
    {[a = 1]},
    "a"
)
```

Result: 
```powerquery
Table.FromRecords({[a = 3, b = 4]})
```




## Category
Table.Membership
