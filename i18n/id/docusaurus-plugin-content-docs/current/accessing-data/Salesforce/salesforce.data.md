---
title: Salesforce.Data
---

# Salesforce.Data


Mengembalikan objek dari akun Salesforce.


## Syntax

```powerquery
Salesforce.Data(
    optional loginUrl as any,
    optional options as record
) as table
```


## Remarks

Menghasilkan objek di akun Salesforce yang diberikan dalam kredensial. Akun akan disambungkan melalui lingkungan `loginUrl` yang disediakan. Jika tidak ada lingkungan yang disediakan, akun akan tersambung ke produksi (https://login.salesforce.com). Parameter catatan opsional, `options`, dapat diberikan untuk menentukan properti tambahan. Catatan dapat berisi bidang berikut:

-   `CreateNavigationProperties` : Logika (true/false) yang mengatur apakah akan membuat properti navigasi pada nilai yang dihasilkan atau tidak (defaultnya adalah true).
-   `ApiVersion` : Versi API Salesforce yang digunakan untuk kueri ini. Versi API 29.0 akan digunakan jika belum ditetapkan.
-   `Timeout` : Durasi yang mengontrol lama waktu tunggu sebelum mengabaikan permintaan ke server. Nilai defaultnya bergantung khusus pada sumber.



## Category
Accessing data
