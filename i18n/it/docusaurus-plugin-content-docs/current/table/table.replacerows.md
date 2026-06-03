---
title: Table.ReplaceRows
---

# Table.ReplaceRows


Sostituisce l'intervallo di righe specificato con le righe fornite.


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

Sostituisce il numero specificato di righe `count` nell'input `table` con `rows` a partire da `offset`. Il parametro `rows` è un elenco di record.

-   `table`: tabella in cui viene eseguita la sostituzione.
-   `offset`: numero di righe da ignorare prima della sostituzione.
-   `count`: numero di righe da sostituire.
-   `rows`: elenco di record di riga da inserire in `table` alla posizione specificata da `offset`.


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
