---
title: Table.TransformRows
---

# Table.TransformRows


## Description

Mentransformasi baris tabel menggunakan fungsi transformasi yang ditetapkan.


## Syntax

```powerquery
Table.TransformRows(
    table as table,
    transform as function
) as list
```


## Details

Membuat <code>daftar</code> dengan menerapkan operasi <code>transform</code> ke setiap baris dalam <code>table</code>.


## Examples

### Example #1 
Mengubah baris tabel menjadi daftar angka.
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
Mengubah baris tabel numerik menjadi catatan tekstual.
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
