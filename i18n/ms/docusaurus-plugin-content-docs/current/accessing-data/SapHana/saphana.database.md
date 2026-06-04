---
title: SapHana.Database
---

# SapHana.Database


Mengembalikan pakej dalam pangkalan data SAP HANA.


## Syntax

```powerquery
SapHana.Database(
    server as text,
    optional options as record
) as table
```


## Remarks

Mengembalikan jadual pakej berbilang dimensi daripada pangkalan data SAP HANA `server`. Parameter rekod pilihan, `options`, boleh ditentukan untuk mengawal opsyen berikut:

-   `Query` : Pertanyaan SQL asal yang digunakan untuk mengambil data. Jika pertanyaan menghasilkan berbilang set keputusan, hanya yang pertama akan dikembalikan.
-   `Distribution` : SapHanaDistribution yang menetapkan nilai sifat "Edaran" dalam rentetan sambungan. Penghalaan pernyataan ialah kaedah menilai nod pelayan yang betul bagi sistem edaran sebelum pelaksanaan pernyataan. Nilai lalai ialah SapHanaDistribution.All.
-   `Implementation` : Menentukan pelaksanaan sambungan SAP HANA yang hendak digunakan.
-   `EnableColumnBinding` : Mengikat pemboleh ubah pada lajur set hasil SAP HANA apabila mengambil data. Mungkin dapat meningkatkan prestasi dengan menggunakan memori yang lebih tinggi sedikit. Nilai lalai ialah palsu.
-   `ConnectionTimeout` : Tempoh yang mengawal berapa lama perlu menunggu sebelum menghentikan percubaan untuk membuat sambungan kepada pelayan. Nilai lalai adalah 15 saat.
-   `CommandTimeout` : Tempoh yang mengawal berapa lama pertanyaan bahagian pelayan dibenarkan berjalan sebelum ia dibatalkan. Nilai lalai ialah sepuluh minit.



## Category
Accessing data
