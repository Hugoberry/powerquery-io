---
title: AzureStorage.Blobs
---

# AzureStorage.Blobs


Mengembalikan jadual navigasi yang mengandungi bekas yang ditemui dalam akaun yang ditentukan daripada vault storan Azure.


## Syntax

```powerquery
AzureStorage.Blobs(
    account as text,
    optional options as record
) as table
```


## Remarks

Mengembalikan jadual navigasi yang mengandungi baris untuk setiap bekas yang ditemui di URL akaun, `account`, daripada ruang simpan storan Azure. Setiap baris mengandungi pautan kepada blob bekas. `options` mungkin ditentukan untuk mengawal opsyen yang berikut:

-   `BlockSize` : Bilangan bait untuk dibaca sebelum menunggu pengguna data. Nilai lalai ialah 4 MB.
-   `RequestSize` : Bilangan bait untuk cuba membaca dalam permintaan HTTP tunggal kepada pelayan. Nilai lalai ialah 4 MB.
-   `ConcurrentRequests` : Opsyen ConcurrentRequests menyokong muat turun data yang lebih cepat dengan menentukan bilangan permintaan yang dibuat secara selari, sehingga mengakibatkan penggunaan memori. Memori yang diperlukan (ConcurrentRequest \* RequestSize). Nilai lalai ialah 16.



## Category
Accessing data
