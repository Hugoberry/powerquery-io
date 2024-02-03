---
title: AzureStorage.DataLake
---

# AzureStorage.DataLake


## Description

Memberikan tabel navigasi berisi dokumen yang ditemukan dalam wadah yang ditentukan dan subfoldernya dari Azure Data Lake Storage.


## Syntax

```powerquery
AzureStorage.DataLake(
    endpoint as text,
    optional options as record
) as table
```


## Details

Menghasilkan tabel navigasi berisi dokumen yang ditemukan dalam kontainer yang ditentukan dan subfoldernya pada URL akun, <code>endpoint</code>, dari sistem file Azure Data Lake Storage. <code>options</code> mungkin ditentukan untuk mengontrol opsi berikut:    <ul><li><code>BlockSize</code> : Jumlah byte untuk dibaca sebelum menunggu konsumen data. Nilai default adalah 4 MB.</li><li><code>RequestSize</code> : Jumlah byte untuk mencoba dibaca dalam satu permintaan HTTP ke server. Nilai default adalah 4 MB.</li><li><code>ConcurrentRequests</code> : Opsi ConcurrentRequests mendukung pengunduhan data yang lebih cepat dengan menentukan jumlah permintaan yang akan dibuat secara paralel, dengan biaya pemanfaatan memori. Memori yang diperlukan adalah (ConcurrentRequest \* RequestSize). Nilai default adalah 16.</li><li><code>HierarchicalNavigation</code> : Logika (true/false) yang mengontrol apakah file dihasilkan dalam tampilan direktori dalam susunan seperti pohon atau dalam daftar datar. Nilai default adalah false.</li></ul>



## Category
Accessing data
