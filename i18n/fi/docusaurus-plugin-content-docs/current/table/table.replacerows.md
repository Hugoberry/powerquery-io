---
title: Table.ReplaceRows
---

# Table.ReplaceRows


Korvaa määritetyn rivialueen annetuilla riveillä.


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

Korvaa määritetyn määrän rivejä (`count`) syötteessä `table` määritetyillä riveillä (`rows`) alkaen kohteen `offset` jälkeen. Parametri `rows` on tietueluettelo.

-   `table`: taulukko, jossa korvaus suoritetaan.
-   `offset`: ennen korvaamisen tekemistä ohitettavien rivien määrä.
-   `count`: korvattavien rivien määrä.
-   `rows`: luettelo rivitietueita, jotka lisätään kohteeseen `table` kohteen `offset` määrittämään sijaintiin.


## Examples

### Example #1
Korvaa sijainnista 1 alkaen kolme riviä.
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
