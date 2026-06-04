---
title: Cube.AddAndExpandDimensionColumn
---

# Cube.AddAndExpandDimensionColumn


Menggabungkan tabel dimensi yang ditentukan ke dalam konteks filter kubus dan mengubah granularitas dimensi konteks filter dengan memperluas kumpulan atribut dimensi yang ditentukan.


## Syntax

```powerquery
Cube.AddAndExpandDimensionColumn(
    cube as table,
    dimensionSelector as any,
    attributeNames as list,
    optional newColumnNames as any
) as table
```


## Remarks

Menggabungkan tabel dimensi yang ditentukan, `dimensionSelector`, ke dalam konteks filter `cube` dan mengubah granularitas dimensi dengan memperluas himpunan atribut dimensi yang ditentukan, `attributeNames`. Atribut dimensi ditambahkan ke tampilan tabular dengan kolom `newColumnNames`, atau `attributeNames` jika tidak ditetapkan.



## Category
Cube
