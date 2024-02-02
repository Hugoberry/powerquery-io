---
title: Table.Partition
---

# Table.Partition


## Description

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


## Details

Partitionne <code>table</code> dans une liste de <code>groups</code> nombre de tables en fonction de la valeur de <code>column</code> et d'une fonction <code>hash</code>.    La fonction <code>hash</code> est appliquée à la valeur de la ligne <code>column</code> pour obtenir une valeur de hachage pour la ligne. Le modulo de la valeur de hachage <code>groups</code> détermine dans quelle table parmi les tables retournées la ligne sera placée.    <ul>       <li><code>table</code> : table à partitionner.</li>       <li><code>column</code> : colonne à hacher pour déterminer dans quelle table retournée la ligne se trouve.</li>       <li><code>groups</code> : nombre de tables dans lequel la table d'entrée sera partitionnée.</li>       <li><code>hash</code> : fonction appliquée pour obtenir la valeur de hachage.</li>    </ul>  


## Examples

### Example #1 
Partitionne la table &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})&lt;/code&gt; en deux tables sur la colonne [a], en utilisant la valeur des colonnes comme fonction de hachage.
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
