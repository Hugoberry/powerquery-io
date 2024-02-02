---
title: Table.ReplaceMatchingRows
---

# Table.ReplaceMatchingRows


## Description

Remplace toutes les lignes spécifiées par les lignes fournies.


## Syntax

```powerquery
Table.ReplaceMatchingRows(
    table as table,
    replacements as list,
    optional equationCriteria as any
) as table
```


## Details

Remplace toutes les lignes spécifiées dans <code>table</code> par les lignes fournies. Les lignes à remplacer et les remplacements sont spécifiés dans <code>replacements</code>, à l'aide du format \{old, new}.    Un paramètre facultatif <code>equationCriteria</code> peut être spécifié pour gérer la comparaison entre les lignes de la table.


## Examples

### Example #1 
Remplace dans la table les lignes [a = 1, b = 2] et [a = 2, b = 3] par [a = -1, b = -2],[a = -2, b = -3].
```powerquery
Table.ReplaceMatchingRows(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = 2, b = 3],
        [a = 3, b = 4],
        [a = 1, b = 2]
    }),
    {
        {[a = 1, b = 2], [a = -1, b = -2]},
        {[a = 2, b = 3], [a = -2, b = -3]}
    }
)
```

Result: 
```powerquery
Table.FromRecords({
    [a = -1, b = -2],
    [a = -2, b = -3],
    [a = 3, b = 4],
    [a = -1, b = -2]
})
```




## Category
Table.Membership
