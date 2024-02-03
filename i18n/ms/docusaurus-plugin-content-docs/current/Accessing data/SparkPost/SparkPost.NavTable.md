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

Mengambil jadual terbina dalam yang didedahkan oleh penyambung SparkPost dengan data yang diagregatkan selama bilangan hari yang ditentukan pengguna. Apabila menyegarkan semula jadual ini atau membuat panggilan ke SparkPost API menggunakan penyambung ini, ingat bahawa SparkPost API mempunyai had kadar API yang ketat. Jika anda melihat kod status 429 dikembalikan daripada pelayan SparkPost, anda telah mencecah had kadar dan perlu menunggu sebentar sebelum membuat panggilan selanjutnya. Apabila memilih nilai untuk parameter Bilangan hari, ambil perhatian bahawa API hanya menyimpan data bernilai 6 bulan.


