---
title: Table.TransformRows
---

# Table.TransformRows


## Description

Átalakítja a tábla sorait a megadott átalakító függvény használatával.


## Syntax

```powerquery
Table.TransformRows(
    table as table,
    transform as function
) as list
```


## Details

<code>Lista</code> létrehozásához a(z) <code>transform</code> műveletet alkalmazza a(z) <code>table</code> egyes soraira.


## Examples

### Example #1 
Táblázat sorainak átalakítása számokból álló listává.
```powerquery
Table.TransformRows(
    Table.FromRecords({
        [a = 1],
        [a = 2],
        [a = 3],
        [a = 4],
        [a = 5]
    }),
    each [a]
)
```

Result: 
```powerquery
{1, 2, 3, 4, 5}
```


### Example #2 
Numerikus táblázat sorainak átalakítása szöveges rekordokká.
```powerquery
Table.TransformRows(
    Table.FromRecords({
        [a = 1],
        [a = 2],
        [a = 3],
        [a = 4],
        [a = 5]
    }),
    (row) as record => [B = Number.ToText(row[a])]
)
```

Result: 
```powerquery
{
    [B = "1"],
    [B = "2"],
    [B = "3"],
    [B = "4"],
    [B = "5"]
}
```




## Category
Table.Transformation
