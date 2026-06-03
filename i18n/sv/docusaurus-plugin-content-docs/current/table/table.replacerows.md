---
title: Table.ReplaceRows
---

# Table.ReplaceRows


Ersätter angivet radintervall med den eller de angivna raderna.


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

Ersätter angivet antal rader, `count`, i angivna indata, `table`, med angivet `rows`, med början efter `offset`. Parametern `rows` är en lista med poster.

-   `table`: Tabellen där ersättningen utförs.
-   `offset`: Antalet rader som ska hoppas över innan ersättningen görs.
-   `count`: Antalet rader som ska ersättas.
-   `rows`: Listan med radposter som ska infogas i `table` vid positionen som anges av `offset`.


## Examples

### Example #1
Startar vid position 1, ersätter 3 rader.
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
