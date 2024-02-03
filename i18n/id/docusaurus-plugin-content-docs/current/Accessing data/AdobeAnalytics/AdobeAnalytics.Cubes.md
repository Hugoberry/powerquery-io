---
title: AdobeAnalytics.Cubes
---

# AdobeAnalytics.Cubes


## Description

Menghasilkan rangkaian laporan dalam Adobe Analytics.


## Syntax

```powerquery
AdobeAnalytics.Cubes(
    optional options as record
) as table
```


## Details

Mengembalikan tabel paket multidimensi dari Adobe Analytics. Parameter catatan opsional, <code>options</code>, dapat ditentukan untuk mengontrol opsi berikut ini:    <ul><li><code>HierarchicalNavigation</code> : Logika (true/false) yang mengatur apakah akan melihat tabel yang dikelompokkan berdasarkan nama skema atau tidak (defaultnya adalah false).</li><li><code>MaxRetryCount</code> : Jumlah percobaan yang dilakukan saat melakukan jajak pendapat untuk hasil kueri. Nilai defaultnya adalah 120.</li><li><code>RetryInterval</code> : Durasi waktu di antara upaya percobaan. Nilai defaultnya adalah 1 detik.</li><li><code>Implementation</code> : Menetapkan versi API Adobe Analytics. Nilai yang valid adalah: &quot;2.0&quot;. Default menggunakan API versi 1.4.</li></ul>    



## Category
Accessing data
