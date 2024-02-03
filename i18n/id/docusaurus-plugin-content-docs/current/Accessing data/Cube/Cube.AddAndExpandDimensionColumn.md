---
title: Cube.AddAndExpandDimensionColumn
---

# Cube.AddAndExpandDimensionColumn


## Description

Menggabungkan tabel dimensi tertentu ke dalam konteks filter kubus dan mengubah granularitas dimensi konteks filter tersebut dengan membuka kumpulan atribut dimensi yang ditentukan.


## Syntax

```powerquery
Cube.AddAndExpandDimensionColumn(
    cube as table,
    dimensionSelector as any,
    attributeNames as list,
    optional newColumnNames as any
) as table
```


## Details

Menggabungkan tabel dimensi tertentu, <code>dimensionSelector</code>, ke dalam konteks filter kubus, <code>cube</code>, dan mengubah granularitas dimensi konteks filter tersebut dengan membuka kumpulan, <code>attributeNames</code>, atribut dimensi yang ditentukan. Atribut dimensi ditambahkan ke tampilan tabular dengan kolom <code>newColumnNames</code>, atau <code>attributeNames</code> jika tidak ditetapkan.



## Category
Cube
