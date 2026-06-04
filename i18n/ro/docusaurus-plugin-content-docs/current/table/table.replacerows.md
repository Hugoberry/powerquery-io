---
title: Table.ReplaceRows
---

# Table.ReplaceRows


Înlocuieşte intervalul specificat de rânduri cu rândurile furnizate.


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

Înlocuieşte numărul specificat de rânduri, `count`, în datele introduse `table` cu `rows` specificat, care începe după `offset`. Parametrul `rows` este o listă de înregistrări.

-   `table`: Tabelul în care este efectuată înlocuirea.
-   `offset`: Numărul de rânduri de ignorat înainte de efectuarea înlocuirii.
-   `count`: Numărul de rânduri de înlocuit.
-   `rows`: Lista de înregistrări ale rândurilor de inserat în `table` în locaţia specificată de `offset`.


## Examples

### Example #1
Începând cu poziția 1, înlocuiți 3 rânduri.
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
