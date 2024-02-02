---
title: Table.Repeat
---

# Table.Repeat


## Description

Répète les lignes des tables un nombre spécifié de fois.


## Syntax

```powerquery
Table.Repeat(
    table as table,
    count as number
) as table
```


## Details

Retourne une table avec les lignes de l'entrée <code>table</code>, répétées <code>count</code> fois.


## Examples

### Example #1 
Répète deux fois les lignes de la table.
```powerquery
Table.Repeat(
    Table.FromRecords({
        [a = 1, b = "hello"],
        [a = 3, b = "world"]
    }),
    2
)
```

Result: 
```powerquery
Table.FromRecords({
    [a = 1, b = "hello"],
    [a = 3, b = "world"],
    [a = 1, b = "hello"],
    [a = 3, b = "world"]
})
```




## Category
Table.Row operations
