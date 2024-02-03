---
title: Table.TransformRows
---

# Table.TransformRows


## Description

Transformuje riadky tabuľky pomocou zadanej funkcie transformácie.


## Syntax

```powerquery
Table.TransformRows(
    table as table,
    transform as function
) as list
```


## Details

Na každý riadok v <code>table</code> použije operáciu <code>transform</code> a vytvorí <code>zoznam</code>.


## Examples

### Example #1 
Transformuje riadky tabuľky na zoznam čísel.
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
Transformuje riadky číselnej tabuľky na textové záznamy.
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
