---
title: OleDb.DataSource
---

# OleDb.DataSource


Menghasilkan tabel dari tabel SQL, dan tampilan dari sumber data OLE DB.


## Syntax

```powerquery
OleDb.DataSource(
    connectionString as any,
    optional options as record
) as table
```


## Remarks

Menghasilkan tabel tabel dan tampilan SQL dari sumber data OLE DB yang ditentukan oleh string koneksi `connectionString`. `connectionString` dapat berupa teks atau catatan pasangan nilai properti. Nilai properti dapat berupa teks atau angka. Parameter catatan opsional, `options`, dapat diberikan untuk menentukan properti tambahan. Catatan dapat berisi bidang berikut:

-   `CreateNavigationProperties` : Logika (true/false) yang mengatur apakah akan membuat properti navigasi pada nilai yang dihasilkan atau tidak (defaultnya adalah true).
-   `NavigationPropertyNameGenerator` : Fungsi yang digunakan untuk pembuatan nama properti navigasi.
-   `Query` : Kueri SQL asli yang digunakan untuk mengambil data. Jika kueri menghasilkan beberapa kumpulan hasil, hanya yang pertama yang akan dikembalikan.
-   `HierarchicalNavigation` : Logika (true/false) yang mengatur apakah akan melihat tabel yang dikelompokkan berdasarkan nama skema atau tidak (defaultnya adalah false).
-   `ConnectionTimeout` : Durasi yang mengontrol lamanya waktu tunggu sebelum mengabaikan upaya membuat koneksi ke server. Nilai defaultnya tergantung pada driver.
-   `CommandTimeout` : Durasi yang mengontrol berapa lama kueri sisi server diizinkan untuk dijalankan sebelum dibatalkan. Nilai default adalah sepuluh menit.
-   `SqlCompatibleWindowsAuth` : Logika (true/false) yang menentukan apakah akan memproduksi opsi string koneksi yang kompatibel dengan SQL Server untuk autentikasi Windows. Nilai defaultnya adalah true.

Parameter rekaman ditentukan sebagai \[option1 = value1, option2 = value2...\] atau \[Query = "select ..."\], misalnya.



## Category
Accessing data
