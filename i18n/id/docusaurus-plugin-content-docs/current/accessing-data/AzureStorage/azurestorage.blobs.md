---
title: AzureStorage.Blobs
---

# AzureStorage.Blobs


Menghasilkan tabel navigasi berisi kontainer yang terdapat di akun yang ditetapkan dari vault penyimpanan Azure.


## Syntax

```powerquery
AzureStorage.Blobs(
    account as text,
    optional options as record
) as table
```


## Remarks

Menghasilkan tabel navigasi berisi baris untuk setiap kontainer yang terdapat pada URL akun, `account`, dari vault penyimpanan Azure. Setiap baris berisi tautan ke blob kontainer. `options` mungkin ditentukan untuk mengontrol opsi berikut:

-   `BlockSize` : Jumlah byte untuk dibaca sebelum menunggu konsumen data. Nilai default adalah 4 MB.
-   `RequestSize` : Jumlah byte untuk mencoba dibaca dalam satu permintaan HTTP ke server. Nilai default adalah 4 MB.
-   `ConcurrentRequests` : Opsi ConcurrentRequests mendukung pengunduhan data yang lebih cepat dengan menentukan jumlah permintaan yang akan dibuat secara paralel, dengan biaya pemanfaatan memori. Memori yang diperlukan adalah (ConcurrentRequest \* RequestSize). Nilai default adalah 16.



## Category
Accessing data
