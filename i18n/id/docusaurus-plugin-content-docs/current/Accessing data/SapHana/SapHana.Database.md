---
title: SapHana.Database
---

# SapHana.Database


## Description

Menghasilkan paket di database HANA SAP.


## Syntax

```powerquery
SapHana.Database(
    server as text,
    optional options as record
) as table
```


## Details

Menghasilkan tabel paket multidimensi dari database SAP HANA <code>server</code>. Parameter catatan opsional, <code>options</code>, dapat ditentukan untuk mengontrol opsi berikut:    <ul><li><code>Query</code> : Kueri SQL asli yang digunakan untuk mengambil data. Jika kueri menghasilkan beberapa kumpulan hasil, hanya yang pertama yang akan dikembalikan.</li><li><code>Distribution</code> : SapHanaDistribution yang mengatur nilai dari properti &quot;Distribusi&quot; di string koneksi. Perutean pernyataan merupakan metode evaluasi node server yang benar dari sistem yang didistribusikan sebelum pelaksanaan pernyataan. Nilai defaultnya adalah SapHanaDistribution.All.</li><li><code>Implementation</code> : Menentukan implementasi konektor SAP HANA yang akan digunakan.</li><li><code>EnableColumnBinding</code> : Mengikat variabel ke kolom kumpulan hasil SAP HANA saat mengambil data. Mungkin berpotensi meningkatkan kinerja dengan biaya penggunaan memori yang sedikit lebih tinggi. Nilai defaultnya adalah false.</li><li><code>ConnectionTimeout</code> : Durasi yang mengontrol lama waktu tunggu sebelum mengabaikan upaya membuat koneksi ke server. Nilai defaultnya adalah 15 detik.</li><li><code>CommandTimeout</code> : Durasi yang mengontrol berapa lama kueri sisi server diizinkan untuk dijalankan sebelum dibatalkan. Nilai default adalah sepuluh menit.</li></ul>    



## Category
Accessing data
