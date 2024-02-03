---
title: AzureStorage.DataLakeContents
---

# AzureStorage.DataLakeContents


## Description

Menghasilkan konten dari file yang ditentukan dari sistem file Azure Data Lake Storage.


## Syntax

```powerquery
AzureStorage.DataLakeContents(
    url as text,
    optional options as record
) as binary
```


## Details

Menghasilkan konten dari file di URL, <code>url</code>, dari sistem file Azure Data Lake Storage. <code>options</code> dapat ditentukan untuk mengontrol opsi berikut:    <ul><li><code>BlockSize</code> : Jumlah byte untuk dibaca sebelum menunggu konsumen data. Nilai default adalah 4 MB.</li><li><code>RequestSize</code> : Jumlah byte untuk mencoba dibaca dalam satu permintaan HTTP ke server. Nilai default adalah 4 MB.</li><li><code>ConcurrentRequests</code> : Opsi ConcurrentRequests mendukung pengunduhan data yang lebih cepat dengan menentukan jumlah permintaan yang akan dibuat secara paralel, dengan biaya pemanfaatan memori. Memori yang diperlukan adalah (ConcurrentRequest \* RequestSize). Nilai default adalah 16.</li></ul>



## Category
Accessing data
