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

Fungsi ini hanya dapat digunakan untuk memanggil salah satu titik akhir "Lists" yang diberikan oleh SparkPost API v1. Saat melakukan panggilan ke SparkPost API menggunakan fungsi ini, perlu diketahui bahwa SparkPost API memiliki batas pengiriman API yang ketat. Jika Anda melihat kode status 429 yang dihasilkan dari server SparkPost, ini menandakan bahwa Anda telah melampaui batas pengiriman dan harus menunggu beberapa saat sebelum membuat panggilan kembali.


## Examples

### Example #1 
Menghasilkan tabel dengan kolom tunggal yang dikumpulkan dengan data dari salah satu titik akhir SparkPost API v1 &#34;Lists&#34; (Lihat dokumentasi SparkPost untuk detailnya).
```powerquery
Source = SparkPost.GetList("metrics/campaigns")
```

Result: 
```powerquery
Json.Document
```



