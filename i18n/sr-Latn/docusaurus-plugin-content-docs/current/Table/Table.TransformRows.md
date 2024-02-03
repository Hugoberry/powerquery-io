---
title: Table.TransformRows
---

# Table.TransformRows


## Description

Transformiše redove iz tabele pomoću navedene funkcije transformacije.


## Syntax

```powerquery
Table.TransformRows(
    table as table,
    transform as function
) as list
```


## Details

Kreira <code>list</code> tako što će primeniti operaciju <code>transform</code> na svaki red u <code>table</code>.


## Examples

### Example #1 
Transformišite redove tabele u listu brojeva.
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
Transformišite redove numeričke tabele u tekstualne zapise.
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
