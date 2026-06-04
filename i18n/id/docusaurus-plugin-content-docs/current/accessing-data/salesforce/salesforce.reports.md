---
title: Salesforce.Reports
---

# Salesforce.Reports


Mengembalikan laporan dari akun Salesforce.


## Syntax

```powerquery
Salesforce.Reports(
    optional loginUrl as text,
    optional options as record
) as table
```


## Remarks

Menghasilkan laporan di akun Salesforce yang diberikan dalam kredensial. Akun akan disambungkan melalui lingkungan `loginUrl` yang disediakan. Jika tidak ada lingkungan yang disediakan, akun akan tersambung ke produksi (https://login.salesforce.com). Parameter catatan opsional, `options`, dapat diberikan untuk menentukan properti tambahan. Catatan dapat berisi bidang berikut:

-   `ApiVersion` : Versi API Salesforce yang digunakan untuk kueri ini. Versi API 29.0 akan digunakan jika belum ditetapkan.
-   `Timeout` : Durasi yang mengontrol lama waktu tunggu sebelum mengabaikan permintaan ke server. Nilai defaultnya bergantung khusus pada sumber.



## Category
Accessing data
