---
title: SparkPost.GetList
---

# SparkPost.GetList



## Syntax

```powerquery
SparkPost.GetList(
    path as text
) as table
```


## Details

Fungsi ini boleh digunakan untuk memanggil mana-mana titik akhir "Senarai" yang ditawarkan oleh SparkPost API v1. Apabila membuat panggilan ke SparkPost API menggunakan fungsi ini, ingat bahawa SparkPost API mempunyai had kadar API yang ketat. Jika anda melihat kod status 429 dikembalikan daripada pelayan SparkPost, anda telah mencecah had kadar dan perlu menunggu sebentar sebelum membuat panggilan selanjutnya.


## Examples

### Example #1 
Mengembalikan jadual dengan satu lajur tunggal yang diisi dengan data daripada salah satu titik akhir &#34;Senarai&#34; SparkPost API v1 (lihat dokumentasi SparkPost untuk butiran).
```powerquery
Source = SparkPost.GetList("metrics/campaigns")
```

Result: 
```powerquery
Json.Document
```



