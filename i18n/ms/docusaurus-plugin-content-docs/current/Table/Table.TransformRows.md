---
title: Table.TransformRows
---

# Table.TransformRows


## Description

Mentransformasikan baris jadual menggunakan fungsi transformasi yang ditentukan.


## Syntax

```powerquery
Table.TransformRows(
    table as table,
    transform as function
) as list
```


## Details

Mencipta <code>senarai</code> dengan menggunakan operasi <code>transform</code> pada setiap baris dalam <code>table</code>.


## Examples

### Example #1 
Ubah baris jadual kepada senarai nombor.
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
Ubah baris jadual angka menjadi rekod teks.
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
