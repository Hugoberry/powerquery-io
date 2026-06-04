---
title: AzureStorage.BlobContents
---

# AzureStorage.BlobContents


Menghasilkan konten dari blob tertentu dari vault penyimpanan Azure.


## Syntax

```powerquery
AzureStorage.BlobContents(
    url as text,
    optional options as record
) as binary
```


## Remarks

Menghasilkan konten blob di URL, `url`, dari vault penyimpanan Azure. `options` mungkin ditentukan untuk mengontrol opsi berikut:

-   `BlockSize` : Jumlah byte untuk dibaca sebelum menunggu konsumen data. Nilai default adalah 4 MB.
-   `RequestSize` : Jumlah byte untuk mencoba dibaca dalam satu permintaan HTTP ke server. Nilai default adalah 4 MB.
-   `ConcurrentRequests` : Opsi ConcurrentRequests mendukung pengunduhan data yang lebih cepat dengan menentukan jumlah permintaan yang akan dibuat secara paralel, dengan biaya pemanfaatan memori. Memori yang diperlukan adalah (ConcurrentRequest \* RequestSize). Nilai default adalah 16.



## Category
Accessing data
