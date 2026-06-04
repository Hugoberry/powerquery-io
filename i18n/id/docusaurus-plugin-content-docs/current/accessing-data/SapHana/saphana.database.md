---
title: SapHana.Database
---

# SapHana.Database


Menghasilkan paket di database HANA SAP.


## Syntax

```powerquery
SapHana.Database(
    server as text,
    optional options as record
) as table
```


## Remarks

Menghasilkan tabel paket multidimensi dari database SAP HANA `server`. Parameter catatan opsional, `options`, dapat ditentukan untuk mengontrol opsi berikut:

-   `Query` : Kueri SQL asli yang digunakan untuk mengambil data. Jika kueri menghasilkan beberapa kumpulan hasil, hanya yang pertama yang akan dikembalikan.
-   `Distribution` : SapHanaDistribution yang mengatur nilai dari properti "Distribusi" di string koneksi. Perutean pernyataan merupakan metode evaluasi node server yang benar dari sistem yang didistribusikan sebelum pelaksanaan pernyataan. Nilai defaultnya adalah SapHanaDistribution.All.
-   `Implementation` : Menentukan implementasi konektor SAP HANA yang akan digunakan.
-   `EnableColumnBinding` : Mengikat variabel ke kolom kumpulan hasil SAP HANA saat mengambil data. Mungkin berpotensi meningkatkan kinerja dengan biaya penggunaan memori yang sedikit lebih tinggi. Nilai defaultnya adalah false.
-   `ConnectionTimeout` : Durasi yang mengontrol lama waktu tunggu sebelum mengabaikan upaya membuat koneksi ke server. Nilai defaultnya adalah 15 detik.
-   `CommandTimeout` : Durasi yang mengontrol berapa lama kueri sisi server diizinkan untuk dijalankan sebelum dibatalkan. Nilai default adalah sepuluh menit.



## Category
Accessing data
