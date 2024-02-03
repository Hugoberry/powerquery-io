---
title: Cube.AddMeasureColumn
---

# Cube.AddMeasureColumn


## Description

Menambahkan kolom ke kubus berisi hasil pengukuran yang diterapkan dalam konteks baris di setiap baris.


## Syntax

```powerquery
Cube.AddMeasureColumn(
    cube as table,
    column as text,
    measureSelector as any
) as table
```


## Details

Menambahkan kolom <code>column</code> ke <code>cube</code> berisi hasil pengukuran <code>measureSelector</code> yang diterapkan dalam konteks baris di setiap baris. Aplikasi pengukuran dipengaruhi oleh perubahan pada granularitas dimensi dan pengirisan. Nilai pengukuran akan disesuaikan setelah pengoperasian kubus tertentu dijalankan.



## Category
Cube
