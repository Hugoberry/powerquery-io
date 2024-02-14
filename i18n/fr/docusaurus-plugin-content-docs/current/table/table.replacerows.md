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

Remplace le nombre de lignes spécifié, <code>count</code>, dans l'entrée <code>table</code> avec le <code>rows</code> spécifié, démarrant après <code>offset</code>. Le paramètre <code>rows</code> est une liste d'enregistrements.    <ul>       <li><code>table</code> : table où le remplacement est effectué.</li>       <li><code>offset</code> : nombre de lignes à ignorer avant d'effectuer le remplacement.</li>       <li><code>count</code> : nombre de lignes à remplacer.</li>       <li><code>rows</code> : liste des enregistrements de ligne à insérer dans <code>table</code> à l'emplacement spécifié par <code>offset</code>.</li>    </ul>


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
