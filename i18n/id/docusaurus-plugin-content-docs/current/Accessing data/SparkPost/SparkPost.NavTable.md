---
title: SparkPost.NavTable
---

# SparkPost.NavTable



## Syntax

```powerquery
SparkPost.NavTable(
    DaysToAggregate as number
) as table
```


## Details

Mengambil tabel bawaan yang dibuka oleh konektor SparkPost dengan data yang dikumpulkan dari jumlah hari yang ditetapkan pengguna. Saat me-refresh tabel ini atau membuat panggilan ke API SparkPost menggunakan konektor ini, perlu diingat bahwa API SparkPost memiliki batas pengiriman API yang ketat. Jika Anda melihat kode status 429 yang dikembalikan dari server SparkPost, ini menandakan Anda telah mencapai batas dan perlu menunggu beberapa saat sebelum membuat panggilan lainnya. Saat memilih nilai untuk parameter Jumlah hari, perlu diingat bahwa API hanya menyimpan data yang berusia 6 bulan.


