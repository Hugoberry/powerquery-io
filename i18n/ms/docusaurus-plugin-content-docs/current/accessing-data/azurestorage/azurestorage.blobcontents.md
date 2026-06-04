---
title: AzureStorage.BlobContents
---

# AzureStorage.BlobContents


Mengembalikan kandungan blob yang ditentukan daripada ruang simpan Azure.


## Syntax

```powerquery
AzureStorage.BlobContents(
    url as text,
    optional options as record
) as binary
```


## Remarks

Mengembalikan kandungan blob pada URL, `url`, daripada ruang simpan storan Azure. `options` mungkin ditentukan untuk mengawal opsyen yang berikut:

-   `BlockSize` : Bilangan bait untuk dibaca sebelum menunggu pengguna data. Nilai lalai ialah 4 MB.
-   `RequestSize` : Bilangan bait untuk cuba membaca dalam permintaan HTTP tunggal kepada pelayan. Nilai lalai ialah 4 MB.
-   `ConcurrentRequests` : Opsyen ConcurrentRequests menyokong muat turun data yang lebih cepat dengan menentukan bilangan permintaan yang dibuat secara selari, sehingga mengakibatkan penggunaan memori. Memori yang diperlukan (ConcurrentRequest \* RequestSize). Nilai lalai ialah 16.



## Category
Accessing data
