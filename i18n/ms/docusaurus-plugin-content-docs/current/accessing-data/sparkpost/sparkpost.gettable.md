---
title: SparkPost.GetTable
---

# SparkPost.GetTable


Mengembalikan jadual metrik yang tersedia daripada API SparkPost v1


## Syntax

```powerquery
SparkPost.GetTable(
    DaysToAggregate as number,
    MetricColumns as text,
    NonMetricColumns as text,
    Path as text
) as table
```


## Remarks

Fungsi ini boleh digunakan untuk mengambil data daripada titik akhir "Metrik" yang tertentu bagi SparkPost API v1. Apabila menyegarkan semula jadual ini atau membuat panggilan ke SparkPost API menggunakan penyambung ini, ingat bahawa SparkPost API mempunyai had kadar API yang ketat. Jika anda melihat kod status 429 dikembalikan daripada pelayan SparkPost, anda telah mencecah had kadar dan perlu menunggu sebentar sebelum membuat panggilan selanjutnya. Apabila memilih nilai untuk parameter Bilangan hari, ambil perhatian bahawa API hanya menyimpan data bernilai 6 bulan.


## Examples

### Example #1
Mengambil metrik kebolehhantaran count\_sent dan count\_rejected untuk semua campaign\_ids yang diagregatkan selama tiga hari yang terakhir.
```powerquery
Source = SparkPost.GetTable(3, "count_sent,count_rejected", "campaign_id", "metrics/deliverability/campaign")
```

Result: 
```powerquery
jadual
```



