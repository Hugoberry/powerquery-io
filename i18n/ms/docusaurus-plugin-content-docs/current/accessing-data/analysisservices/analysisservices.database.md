---
title: AnalysisServices.Database
---

# AnalysisServices.Database


Mengembalikan jadual kiub berbilang dimensi atau model jadual daripada pangkalan data Analysis Services.


## Syntax

```powerquery
AnalysisServices.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Mengembalikan jadual kiub berbilang dimensi atau model jadual daripada pangkalan data Analysis Services `database` pada pelayan `server`. Parameter rekod pilihan, `options`, boleh ditentukan untuk mengawal opsyen berikut:

-   `Query` : Pertanyaan MDX asal yang digunakan untuk mengambil data.
-   `TypedMeasureColumns` : Nilai logik yang menunjukkan sama ada jenis ditentukan dalam berbilang dimensi atau model jadual akan digunakan untuk jenis lajur ukuran yang ditambahkan. Apabila ditetapkan kepada false, jenis "nombor" akan digunakan untuk semua lajur ukuran. Nilai lalai untuk opsyen ini adalah false.
-   `Culture` : Nama budaya yang menentukan budaya untuk data. Ini berpadanan dengan sifat rentetan sambungan 'Pengecam tempatan'.
-   `CommandTimeout` : Tempoh yang mengawal berapa lama pertanyaan bahagian pelayan dibenarkan berjalan sebelum ia dibatalkan. Nilai lalai adalah bergantung pemacu.
-   `ConnectionTimeout` : Tempoh yang mengawal berapa lama perlu menunggu sebelum menghentikan percubaan untuk membuat sambungan kepada pelayan. Nilai lalai adalah bergantung pemacu.
-   `SubQueries` : Nombor (0, 1 atau 2) yang menetapkan nilai sifat "SubQueries" dalam rentetan sambungan. Ini mengawal kelakuan ahli yang dikira pada subpilihan atau subkiub. (Nilai lalai ialah 2).
-   `Implementation`



## Category
Accessing data
