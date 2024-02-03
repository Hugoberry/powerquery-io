---
title: Table.ReplaceRows
---

# Table.ReplaceRows


## Description

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


## Details

Korvaa määritetyn määrän rivejä (<code>count</code>) syötteessä <code>table</code> määritetyillä riveillä (<code>rows</code>) alkaen kohteen <code>offset</code> jälkeen. Parametri <code>rows</code> on tietueluettelo.    <ul>       <li><code>table</code>: taulukko, jossa korvaus suoritetaan.</li>       <li><code>offset</code>: ennen korvaamisen tekemistä ohitettavien rivien määrä.</li>       <li><code>count</code>: korvattavien rivien määrä.</li>       <li><code>rows</code>: luettelo rivitietueita, jotka lisätään kohteeseen <code>table</code> kohteen <code>offset</code> määrittämään sijaintiin.</li>    </ul>


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
