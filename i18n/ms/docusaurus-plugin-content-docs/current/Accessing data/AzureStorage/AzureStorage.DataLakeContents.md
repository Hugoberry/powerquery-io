---
title: AzureStorage.DataLakeContents
---

# AzureStorage.DataLakeContents


## Description

Mengembalikan kandungan bagi fail yang ditentukan daripada sistem fail Azure Data Lake Storage.


## Syntax

```powerquery
AzureStorage.DataLakeContents(
    url as text,
    optional options as record
) as binary
```


## Details

Mengembalikan kandungan fail pada URL, <code>url</code>, daripada sistem fail Azure Data Lake Storage. <code>options</code> mungkin ditentukan untuk mengawal opsyen yang berikut:    <ul><li><code>BlockSize</code> : Bilangan bait untuk dibaca sebelum menunggu pengguna data. Nilai lalai ialah 4 MB.</li><li><code>RequestSize</code> : Bilangan bait untuk cuba membaca dalam permintaan HTTP tunggal kepada pelayan. Nilai lalai ialah 4 MB.</li><li><code>ConcurrentRequests</code> : Opsyen ConcurrentRequests menyokong muat turun data yang lebih cepat dengan menentukan bilangan permintaan yang dibuat secara selari, sehingga mengakibatkan penggunaan memori. Memori yang diperlukan (ConcurrentRequest \* RequestSize). Nilai lalai ialah 16.</li></ul>



## Category
Accessing data
