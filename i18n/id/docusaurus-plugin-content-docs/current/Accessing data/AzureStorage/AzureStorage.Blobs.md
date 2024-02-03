---
title: AzureStorage.Blobs
---

# AzureStorage.Blobs


## Description

Menghasilkan tabel navigasi berisi kontainer yang terdapat di akun yang ditetapkan dari vault penyimpanan Azure.


## Syntax

```powerquery
AzureStorage.Blobs(
    account as text,
    optional options as record
) as table
```


## Details

Menghasilkan tabel navigasi berisi baris untuk setiap kontainer yang terdapat pada URL akun, <code>account</code>, dari vault penyimpanan Azure. Setiap baris berisi tautan ke blob kontainer. <code>options</code> mungkin ditentukan untuk mengontrol opsi berikut:    <ul><li><code>BlockSize</code> : Jumlah byte untuk dibaca sebelum menunggu konsumen data. Nilai default adalah 4 MB.</li><li><code>RequestSize</code> : Jumlah byte untuk mencoba dibaca dalam satu permintaan HTTP ke server. Nilai default adalah 4 MB.</li><li><code>ConcurrentRequests</code> : Opsi ConcurrentRequests mendukung pengunduhan data yang lebih cepat dengan menentukan jumlah permintaan yang akan dibuat secara paralel, dengan biaya pemanfaatan memori. Memori yang diperlukan adalah (ConcurrentRequest \* RequestSize). Nilai default adalah 16.</li></ul>



## Category
Accessing data
