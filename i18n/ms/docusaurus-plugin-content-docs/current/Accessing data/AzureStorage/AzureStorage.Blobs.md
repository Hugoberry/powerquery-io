---
title: AzureStorage.Blobs
---

# AzureStorage.Blobs


## Description

Mengembalikan jadual navigasi yang mengandungi bekas yang ditemui dalam akaun yang ditentukan daripada vault storan Azure.


## Syntax

```powerquery
AzureStorage.Blobs(
    account as text,
    optional options as record
) as table
```


## Details

Mengembalikan jadual navigasi yang mengandungi baris untuk setiap bekas yang ditemui di URL akaun, <code>account</code>, daripada ruang simpan storan Azure. Setiap baris mengandungi pautan kepada blob bekas. <code>options</code> mungkin ditentukan untuk mengawal opsyen yang berikut:    <ul><li><code>BlockSize</code> : Bilangan bait untuk dibaca sebelum menunggu pengguna data. Nilai lalai ialah 4 MB.</li><li><code>RequestSize</code> : Bilangan bait untuk cuba membaca dalam permintaan HTTP tunggal kepada pelayan. Nilai lalai ialah 4 MB.</li><li><code>ConcurrentRequests</code> : Opsyen ConcurrentRequests menyokong muat turun data yang lebih cepat dengan menentukan bilangan permintaan yang dibuat secara selari, sehingga mengakibatkan penggunaan memori. Memori yang diperlukan (ConcurrentRequest \* RequestSize). Nilai lalai ialah 16.</li></ul>



## Category
Accessing data
