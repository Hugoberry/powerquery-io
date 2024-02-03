---
title: AnalysisServices.Databases
---

# AnalysisServices.Databases


## Description

Kembalikan pangkalan data Perkhidmatan Analisis pada hos tertentu.


## Syntax

```powerquery
AnalysisServices.Databases(
    server as text,
    optional options as record
) as table
```


## Details

Mengembalikan pangkalan data pada tika Analysis Services, <code>server</code>.  Parameter rekod pilihan, <code>options</code>, boleh diberikan untuk menentukan sifat tambahan. Rekod boleh mengandungi medan berikut:    <ul><li><code>TypedMeasureColumns</code> : Nilai logik yang menunjukkan sama ada jenis ditentukan dalam berbilang dimensi atau model jadual akan digunakan untuk jenis lajur ukuran yang ditambahkan. Apabila ditetapkan kepada false, jenis &quot;nombor&quot; akan digunakan untuk semua lajur ukuran. Nilai lalai untuk opsyen ini adalah false.</li><li><code>Culture</code> : Nama budaya yang menentukan budaya untuk data. Ini berpadanan dengan sifat rentetan sambungan &#39;Pengecam tempatan&#39;.</li><li><code>CommandTimeout</code> : Tempoh yang mengawal berapa lama pertanyaan bahagian pelayan dibenarkan berjalan sebelum ia dibatalkan. Nilai lalai adalah bergantung pemacu.</li><li><code>ConnectionTimeout</code> : Tempoh yang mengawal berapa lama perlu menunggu sebelum menghentikan percubaan untuk membuat sambungan kepada pelayan. Nilai lalai adalah bergantung pemacu.</li><li><code>SubQueries</code> : Nombor (0, 1 atau 2) yang menetapkan nilai sifat &quot;SubQueries&quot; dalam rentetan sambungan. Ini mengawal kelakuan ahli yang dikira pada subpilihan atau subkiub. (Nilai lalai ialah 2).</li><li><code>Implementation</code></li></ul>    



## Category
Accessing data
