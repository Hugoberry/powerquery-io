---
title: Table.ReplaceRows
---

# Table.ReplaceRows


Sostituisce l&#39;intervallo di righe specificato con le righe fornite.


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

Sostituisce il numero specificato di righe <code>count</code> nell'input <code>table</code> con <code>rows</code> a partire da <code>offset</code>. Il parametro <code>rows</code> è un elenco di record.    <ul>       <li><code>table</code>: tabella in cui viene eseguita la sostituzione.</li>       <li><code>offset</code>: numero di righe da ignorare prima della sostituzione.</li>       <li><code>count</code>: numero di righe da sostituire.</li>       <li><code>rows</code>: elenco di record di riga da inserire in <code>table</code> alla posizione specificata da <code>offset</code>.</li>    </ul>


## Examples

### Example #1 
Sostituire 3 righe a partire dalla posizione 1.
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
