---
title: Table.ReplaceRows
---

# Table.ReplaceRows


Zamenja navedeni obseg vrstic s podanimi vrsticami.


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

Zamenja navedeno število vrstic, `count`, v vhodni tabeli `table` z navedenim seznamom `rows`, ki se začne za `offset`. Parameter `rows` je seznam zapisov.

-   `table`: tabela, v kateri je izvedena zamenjava.
-   `offset`: število vrstic, ki bodo preskočene pred zamenjavo.
-   `count`: število vrstic, ki bodo zamenjane.
-   `rows`: seznam zapisov vrstic, ki bodo vstavljeni v tabelo `table` na mestu, ki ga določa `offset`.


## Examples

### Example #1
Zamenjajte 3 vrstice in začnite na mestu 1.
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
