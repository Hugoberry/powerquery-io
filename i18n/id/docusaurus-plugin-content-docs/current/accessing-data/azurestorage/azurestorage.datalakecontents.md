---
title: AzureStorage.DataLakeContents
---

# AzureStorage.DataLakeContents


Menghasilkan konten dari file yang ditentukan dari sistem file Azure Data Lake Storage.


## Syntax

```powerquery
AzureStorage.DataLakeContents(
    url as text,
    optional options as record
) as binary
```


## Remarks

Menghasilkan konten dari file di URL, `url`, dari sistem file Azure Data Lake Storage. `options` dapat ditentukan untuk mengontrol opsi berikut:

-   `BlockSize` : Jumlah byte untuk dibaca sebelum menunggu konsumen data. Nilai default adalah 4 MB.
-   `RequestSize` : Jumlah byte untuk mencoba dibaca dalam satu permintaan HTTP ke server. Nilai default adalah 4 MB.
-   `ConcurrentRequests` : Opsi ConcurrentRequests mendukung pengunduhan data yang lebih cepat dengan menentukan jumlah permintaan yang akan dibuat secara paralel, dengan biaya pemanfaatan memori. Memori yang diperlukan adalah (ConcurrentRequest \* RequestSize). Nilai default adalah 16.



## Category
Accessing data
