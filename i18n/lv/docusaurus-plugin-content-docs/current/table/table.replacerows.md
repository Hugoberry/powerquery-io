---
title: Table.ReplaceRows
---

# Table.ReplaceRows


Tiek aizstāts norādītais rindu diapazons ar nodrošināto(-ajām) rindu(-ām).


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

Tiek aizstāts norādītais rindu skaits `count` ievadē `table` ar norādīto `rows`, kas sākas pēc `offset`. `rows` parametram ir ierakstu saraksts.

-   `table` tabula, kurā tiek veikta aizstāšana.
-   `offset`: rindu skaits, kas jāizlaiž, pirms aizvietojuma veikšanas.
-   `count`: aizstājamo rindu skaits.
-   `rows`: rindu ierakstu saraksts, ko ievietot `table`, `offset` norādītajā atrašanās vietā.


## Examples

### Example #1
Sākot no 1. pozīcijas, aizstājiet 3 rindas.
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
