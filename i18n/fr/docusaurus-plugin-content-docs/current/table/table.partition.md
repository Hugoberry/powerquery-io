---
title: Table.Partition
---

# Table.Partition


Partitionne la table dans une liste de tables en fonction du nombre de groupes et de la colonne spécifiée.


## Syntax

```powerquery
Table.Partition(
    table as table,
    column as text,
    groups as number,
    hash as function
) as list
```


## Remarks

Partitionne `table` dans une liste de `groups` nombre de tables en fonction de la valeur de `column` et d'une fonction `hash`. La fonction `hash` est appliquée à la valeur de la ligne `column` pour obtenir une valeur de hachage pour la ligne. Le modulo de la valeur de hachage `groups` détermine dans quelle table parmi les tables retournées la ligne sera placée.

-   `table` : table à partitionner.
-   `column` : colonne à hacher pour déterminer dans quelle table retournée la ligne se trouve.
-   `groups` : nombre de tables dans lequel la table d'entrée sera partitionnée.
-   `hash` : fonction appliquée pour obtenir la valeur de hachage.


## Examples

### Example #1
Partitionne la table `({[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})` en deux tables sur la colonne \[a\], en utilisant la valeur des colonnes comme fonction de hachage.
```powerquery
Table.Partition(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 1, b = 4],
        [a = 2, b = 4],
        [a = 1, b = 4]
    }),
    "a",
    2,
    each _
)
```

Result: 
```powerquery
{
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 2, b = 4]
    }),
    Table.FromRecords({
        [a = 1, b = 4],
        [a = 1, b = 4]
    })
}
```




## Category
Table.Row operations
