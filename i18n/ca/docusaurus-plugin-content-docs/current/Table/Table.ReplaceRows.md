---
title: Table.ReplaceRows
---

# Table.ReplaceRows


## Description

Substitueix l&#39;interval especificat de files amb les files proporcionades.


## Syntax

```powerquery
Table.ReplaceRows(
    table as table,
    offset as number,
    count as number,
    rows as list
) as table
```


## Details

Substitueix un nombre especificat de files, <code>count</code>, a l'entrada <code>table</code> amb el <code>rows</code> especificat, començant després de la <code>offset</code>. El paràmetre <code>rows</code> és una llista de registres.    <ul>       <li><code>table</code>: la taula on es duu a terme la substitució.</li>       <li><code>offset</code>: el nombre de files que s'han d'ometre abans de dur a terme la substitució.</li>       <li><code>count</code>: el nombre de files que s'han de substituir.</li>       <li><code>rows</code>: la llista de registres de fila que s'han d'inserir al <code>table</code> a la ubicació especificada per <code>offset</code>.</li>    </ul>


## Examples

### Example #1 
Començant per la posició 1, substitueix 3 files.
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
