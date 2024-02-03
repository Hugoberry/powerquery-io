---
title: AzureStorage.BlobContents
---

# AzureStorage.BlobContents


## Description

Menghasilkan konten dari blob tertentu dari vault penyimpanan Azure.


## Syntax

```powerquery
AzureStorage.BlobContents(
    url as text,
    optional options as record
) as binary
```


## Details

Menghasilkan konten blob di URL, <code>url</code>, dari vault penyimpanan Azure. <code>options</code> mungkin ditentukan untuk mengontrol opsi berikut:    <ul><li><code>BlockSize</code> : Jumlah byte untuk dibaca sebelum menunggu konsumen data. Nilai default adalah 4 MB.</li><li><code>RequestSize</code> : Jumlah byte untuk mencoba dibaca dalam satu permintaan HTTP ke server. Nilai default adalah 4 MB.</li><li><code>ConcurrentRequests</code> : Opsi ConcurrentRequests mendukung pengunduhan data yang lebih cepat dengan menentukan jumlah permintaan yang akan dibuat secara paralel, dengan biaya pemanfaatan memori. Memori yang diperlukan adalah (ConcurrentRequest \* RequestSize). Nilai default adalah 16.</li></ul>



## Category
Accessing data
