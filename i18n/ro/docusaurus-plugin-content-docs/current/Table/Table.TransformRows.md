---
title: Table.TransformRows
---

# Table.TransformRows


## Description

Transformă rândurile din tabel utilizând funcţia de transformare specificată.


## Syntax

```powerquery
Table.TransformRows(
    table as table,
    transform as function
) as list
```


## Details

Creează o <code>listă</code> aplicând operațiunea <code>transform</code> la fiecare linie din <code>table</code>.


## Examples

### Example #1 
Transformați rândurile unui tabel într-o listă de numere.
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
Transformați rândurile unui tabel numeric în înregistrări textuale.
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
