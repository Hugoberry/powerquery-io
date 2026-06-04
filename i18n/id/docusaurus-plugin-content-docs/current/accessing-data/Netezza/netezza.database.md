---
title: Netezza.Database
---

# Netezza.Database


Impor data dari database IBM Netezza.


## Syntax

```powerquery
Netezza.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Menghasilkan tabel dari tabel, tampilan, dan fungsi Netezza yang disimpan dari `database` database Netezza Server pada `server` server. Port mungkin ditentukan secara opsional dengan server, dan dipisahkan oleh titik dua. Parameter catatan opsional, `opsi`, mungkin ditentukan untuk mengontrol opsi berikut:

-   `CreateNavigationProperties`: Logika (true/false) yang menentukan apakah menghasilkan properti navigasi pada nilai yang dihasilkan (defaultnya true)
-   `HierarchicalNavigation`: Logika (true/false) yang menentukan apakah menampilkan tampilan tabel yang dikelompokkan berdasarkan nama skema (defaultnya false)
-   `ConnectionTimeout`: Durasi yang mengontrol waktu tunggu sebelum menghentikan upaya pembuatan koneksi ke server. Nilai defaultnya tergantung pada driver.
-   `CommandTimeout`: Durasi yang mengontrol lamanya kueri sisi server diizinkan untuk berjalan sebelum dibatalkan. Nilai defaultnya tergantung pada driver.
-   `NormalizeDatabaseName`: Logika (true/false) yang mengatur normalisasi nama database ke huruf besar atau menginterpretasikannya secara literal (defaultnya true).

Parameter catatan ditentukan sebagai \[option1 = value1, option2 = value2...\].


## Examples

### Example #1
Cantumkan tabel dalam proyek IBM Netezza.
```powerquery
Netezza.Database("netezza:5480", "netezza_database")
```



