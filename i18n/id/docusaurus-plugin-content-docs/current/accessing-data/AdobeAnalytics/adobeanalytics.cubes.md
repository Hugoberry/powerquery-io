---
title: AdobeAnalytics.Cubes
---

# AdobeAnalytics.Cubes


Menghasilkan rangkaian laporan dalam Adobe Analytics.


## Syntax

```powerquery
AdobeAnalytics.Cubes(
    optional options as record
) as table
```


## Remarks

Mengembalikan tabel paket multidimensi dari Adobe Analytics. Parameter catatan opsional, `options`, dapat ditentukan untuk mengontrol opsi berikut ini:

-   `HierarchicalNavigation` : Logika (true/false) yang mengatur apakah akan melihat tabel yang dikelompokkan berdasarkan nama skema atau tidak (defaultnya adalah false).
-   `MaxRetryCount` : Jumlah percobaan yang dilakukan saat melakukan jajak pendapat untuk hasil kueri. Nilai defaultnya adalah 120.
-   `RetryInterval` : Durasi waktu di antara upaya percobaan. Nilai defaultnya adalah 1 detik.
-   `Implementation` : Menetapkan versi API Adobe Analytics. Nilai yang valid adalah: "2.0". Default menggunakan API versi 1.4.



## Category
Accessing data
