---
title: AzureStorage.DataLakeContents
---

# AzureStorage.DataLakeContents


Mengembalikan kandungan bagi fail yang ditentukan daripada sistem fail Azure Data Lake Storage.


## Syntax

```powerquery
AzureStorage.DataLakeContents(
    url as text,
    optional options as record
) as binary
```


## Remarks

Mengembalikan kandungan fail pada URL, `url`, daripada sistem fail Azure Data Lake Storage. `options` mungkin ditentukan untuk mengawal opsyen yang berikut:

-   `BlockSize` : Bilangan bait untuk dibaca sebelum menunggu pengguna data. Nilai lalai ialah 4 MB.
-   `RequestSize` : Bilangan bait untuk cuba membaca dalam permintaan HTTP tunggal kepada pelayan. Nilai lalai ialah 4 MB.
-   `ConcurrentRequests` : Opsyen ConcurrentRequests menyokong muat turun data yang lebih cepat dengan menentukan bilangan permintaan yang dibuat secara selari, sehingga mengakibatkan penggunaan memori. Memori yang diperlukan (ConcurrentRequest \* RequestSize). Nilai lalai ialah 16.



## Category
Accessing data
