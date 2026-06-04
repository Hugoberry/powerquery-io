---
title: Cube.AddMeasureColumn
---

# Cube.AddMeasureColumn


Menambah lajur pada kiub yang mengandungi hasil bagi ukuran yang digunakan dalam konteks baris pada setiap baris.


## Syntax

```powerquery
Cube.AddMeasureColumn(
    cube as table,
    column as text,
    measureSelector as any
) as table
```


## Remarks

Menambah lajur dengan nama `column` pada `cube` yang mengandungi hasil bagi ukuran `measureSelector` yang digunakan dalam konteks baris pada setiap baris. Aplikasi ukuran dipengaruhi oleh perubahan pada kebutiran dan hirisan dimensi. Nilai ukuran akan dilaraskan selepas operasi kiub tertentu dilaksanakan.



## Category
Cube
