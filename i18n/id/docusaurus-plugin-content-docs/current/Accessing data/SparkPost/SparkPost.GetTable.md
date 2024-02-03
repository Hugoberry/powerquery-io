---
title: SparkPost.GetTable
---

# SparkPost.GetTable


## Description

Menghasilkan tabel metrik yang tersedia dari SparkPost API v1


## Syntax

```powerquery
SparkPost.GetTable(
    DaysToAggregate as number,
    MetricColumns as text,
    NonMetricColumns as text,
    Path as text
) as table
```


## Details

Fungsi ini hanya dapat digunakan untuk mengambil data titik akhir "Metrics" tertentu dari SparkPost API v1. Saat me-refresh tabel ini atau melakukan panggilan ke SparkPost API menggunakan konektor ini, perlu diketahui bahwa SparkPost API memiliki batas pengiriman API yang ketat. Jika Anda melihat kode status 429 yang dihasilkan dari server SparkPost, ini menandakan bahwa Anda telah melampaui batas pengiriman dan harus menunggu beberapa saat sebelum membuat panggilan lainnya. Saat memilih nilai dari parameter Jumlah hari, perhatikan bahwa API hanya menyimpan data yang berusia 6 bulan.


## Examples

### Example #1 
Mengambil metrik keterkiriman count_sent dan count_rejected untuk semua campaign_ids yang diagregasikan selama tiga hari terakhir. 
```powerquery
Source = SparkPost.GetTable(3, "count_sent,count_rejected", "campaign_id", "metrics/deliverability/campaign")
```

Result: 
```powerquery
tabel
```



