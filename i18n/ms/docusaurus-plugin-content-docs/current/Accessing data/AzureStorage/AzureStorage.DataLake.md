---
title: AzureStorage.DataLake
---

# AzureStorage.DataLake


## Description

Mengembalikan jadual navigasi yang mengandungi dokumen yang ditemui dalam bekas yang ditentukan dan subfolder daripada Azure Data Lake Storage.


## Syntax

```powerquery
AzureStorage.DataLake(
    endpoint as text,
    optional options as record
) as table
```


## Details

Mengembalikan jadual navigasi yang mengandungi dokumen yang ditemui dalam bekas yang ditentukan dan subfoldernya di URL akaun, <code>endpoint</code>, daripada sistem fail Azure Data Lake Storage. <code>options</code> mungkin ditentukan untuk mengawal opsyen yang berikut:    <ul><li><code>BlockSize</code> : Bilangan bait untuk dibaca sebelum menunggu pengguna data. Nilai lalai ialah 4 MB.</li><li><code>RequestSize</code> : Bilangan bait untuk cuba membaca dalam permintaan HTTP tunggal kepada pelayan. Nilai lalai ialah 4 MB.</li><li><code>ConcurrentRequests</code> : Opsyen ConcurrentRequests menyokong muat turun data yang lebih cepat dengan menentukan bilangan permintaan yang dibuat secara selari, sehingga mengakibatkan penggunaan memori. Memori yang diperlukan (ConcurrentRequest \* RequestSize). Nilai lalai ialah 16.</li><li><code>HierarchicalNavigation</code> : Logik (benar/palsu) yang mengawal sama ada fail dikembalikan dalam pandangan direktori seperti pepohon atau dalam senarai rata. Nilai lalai ialah palsu.</li></ul>



## Category
Accessing data
