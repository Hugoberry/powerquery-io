---
title: Table.ReplaceRows
---

# Table.ReplaceRows


Remplace la plage de lignes spécifiée par les lignes fournies.


## Syntax

```powerquery
Table.ReplaceRows(
    table as table,
    offset as number,
    count as number,
    rows as list
) as table
```


## Remarks

Remplace le nombre de lignes spécifié, `count`, dans l'entrée `table` avec le `rows` spécifié, démarrant après `offset`. Le paramètre `rows` est une liste d'enregistrements.

-   `table` : table où le remplacement est effectué.
-   `offset` : nombre de lignes à ignorer avant d'effectuer le remplacement.
-   `count` : nombre de lignes à remplacer.
-   `rows` : liste des enregistrements de ligne à insérer dans `table` à l'emplacement spécifié par `offset`.


## Examples

### Example #1
En commençant à la position 1, remplace 3 lignes.
```powerquery
Table.ReplaceRows(
    Table.FromRecords({
        [Column1 = 1],
        [Column1 = 2],
        [Column1 = 3],
        [Column1 = 4],
        [Column1 = 5]
    }),
    1,
    3,
    {[Column1 = 6], [Column1 = 7]}
)
```

Result: 
```powerquery
Table.FromRecords({
    [Column1 = 1],
    [Column1 = 6],
    [Column1 = 7],
    [Column1 = 5]
})
```




## Category
Table.Row operations
