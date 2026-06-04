---
title: AzureStorage.Tables
---

# AzureStorage.Tables


Menghasilkan tabel navigasi berisi tabel yang terdapat di akun yang ditetapkan dari vault penyimpanan Azure.


## Syntax

```powerquery
AzureStorage.Tables(
    account as text,
    optional options as record
) as table
```


## Remarks

Menghasilkan tabel navigasi berisi baris untuk setiap tabel yang ditemukan di URL akun, `account`, dari vault penyimpanan Azure. Setiap baris berisi tautan ke tabel azure. Parameter catatan opsional, `options`, dapat diberikan untuk menentukan properti tambahan. Catatan dapat berisi bidang berikut:

-   `Timeout` : Durasi yang mengontrol lama waktu tunggu sebelum mengabaikan permintaan ke server. Nilai defaultnya bergantung khusus pada sumber.



## Category
Accessing data
