---
title: AzureStorage.DataLake
---

# AzureStorage.DataLake


Mengembalikan jadual navigasi yang mengandungi dokumen yang ditemui dalam bekas yang ditentukan dan subfolder daripada Azure Data Lake Storage.


## Syntax

```powerquery
AzureStorage.DataLake(
    endpoint as text,
    optional options as record
) as table
```


## Remarks

Mengembalikan jadual navigasi yang mengandungi dokumen yang ditemui dalam bekas yang ditentukan dan subfoldernya di URL akaun, `endpoint`, daripada sistem fail Azure Data Lake Storage. `options` mungkin ditentukan untuk mengawal opsyen yang berikut:

-   `BlockSize` : Bilangan bait untuk dibaca sebelum menunggu pengguna data. Nilai lalai ialah 4 MB.
-   `RequestSize` : Bilangan bait untuk cuba membaca dalam permintaan HTTP tunggal kepada pelayan. Nilai lalai ialah 4 MB.
-   `ConcurrentRequests` : Opsyen ConcurrentRequests menyokong muat turun data yang lebih cepat dengan menentukan bilangan permintaan yang dibuat secara selari, sehingga mengakibatkan penggunaan memori. Memori yang diperlukan (ConcurrentRequest \* RequestSize). Nilai lalai ialah 16.
-   `HierarchicalNavigation` : Logik (benar/palsu) yang mengawal sama ada fail dikembalikan dalam pandangan direktori seperti pepohon atau dalam senarai rata. Nilai lalai ialah palsu.



## Category
Accessing data
