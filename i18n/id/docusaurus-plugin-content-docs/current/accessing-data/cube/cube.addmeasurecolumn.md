---
title: Cube.AddMeasureColumn
---

# Cube.AddMeasureColumn


Menambahkan kolom ke kubus berisi hasil pengukuran yang diterapkan dalam konteks baris di setiap baris.


## Syntax

```powerquery
Cube.AddMeasureColumn(
    cube as table,
    column as text,
    measureSelector as any
) as table
```


## Remarks

Menambahkan kolom `column` ke `cube` berisi hasil pengukuran `measureSelector` yang diterapkan dalam konteks baris di setiap baris. Aplikasi pengukuran dipengaruhi oleh perubahan pada granularitas dimensi dan pengirisan. Nilai pengukuran akan disesuaikan setelah pengoperasian kubus tertentu dijalankan.



## Category
Cube
