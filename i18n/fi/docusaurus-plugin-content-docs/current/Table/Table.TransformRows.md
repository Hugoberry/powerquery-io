---
title: Table.TransformRows
---

# Table.TransformRows


## Description

Muuntaa taulukon rivit käyttäen määritettyä muunnosfunktiota.


## Syntax

```powerquery
Table.TransformRows(
    table as table,
    transform as function
) as list
```


## Details

Luo <code>luettelon</code> ottamalla <code>transform</code>-toiminnon käyttöön kullekin <code>table</code>:n riville.


## Examples

### Example #1 
Muunna taulukon rivit numeroluetteloksi.
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
Muunna numeerisen taulukon rivit tekstitietueiksi.
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
