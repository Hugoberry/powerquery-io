---
title: OleDb.DataSource
---

# OleDb.DataSource


## Description

Menghasilkan tabel dari tabel SQL, dan tampilan dari sumber data OLE DB.


## Syntax

```powerquery
OleDb.DataSource(
    connectionString as any,
    optional options as record
) as table
```


## Details

Menghasilkan tabel dari tabel SQL, dan tampilan dari sumber data OLE DB yang ditentukan oleh string koneksi <code>connectionString</code>. <code>connectionString</code> dapat berupa teks atau catatan pasangan nilai properti. Nilai properti dapat berupa teks atau angka. Parameter catatan opsional, <code>options</code>, dapat disediakan untuk menentukan properti tambahan. Catatan dapat berisi bidang berikut ini:    <ul><li><code>CreateNavigationProperties</code> : Logika (true/false) yang mengatur apakah akan membuat properti navigasi pada nilai yang dihasilkan atau tidak (defaultnya adalah true).</li><li><code>NavigationPropertyNameGenerator</code> : Fungsi yang digunakan untuk pembuatan nama properti navigasi.</li><li><code>Query</code> : Kueri SQL asli yang digunakan untuk mengambil data. Jika kueri menghasilkan beberapa kumpulan hasil, hanya yang pertama yang akan dikembalikan.</li><li><code>HierarchicalNavigation</code> : Logika (true/false) yang mengatur apakah akan melihat tabel yang dikelompokkan berdasarkan nama skema atau tidak (defaultnya adalah false).</li><li><code>ConnectionTimeout</code> : Durasi yang mengontrol lamanya waktu tunggu sebelum mengabaikan upaya membuat koneksi ke server. Nilai defaultnya tergantung pada driver.</li><li><code>CommandTimeout</code> : Durasi yang mengontrol berapa lama kueri sisi server diizinkan untuk dijalankan sebelum dibatalkan. Nilai default adalah sepuluh menit.</li><li><code>SqlCompatibleWindowsAuth</code> : Logika (true/false) yang menentukan apakah akan memproduksi opsi string koneksi yang kompatibel dengan SQL Server untuk autentikasi Windows. Nilai defaultnya adalah true.</li></ul>    Misalnya, parameter catatan ditentukan sebagai [option1 = value1, option2 = value2...] atau [Query = "select ..."].



## Category
Accessing data
