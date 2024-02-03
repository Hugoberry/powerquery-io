---
title: AzureStorage.Tables
---

# AzureStorage.Tables


## Description

Menghasilkan tabel navigasi berisi tabel yang terdapat di akun yang ditetapkan dari vault penyimpanan Azure.


## Syntax

```powerquery
AzureStorage.Tables(
    account as text,
    optional options as record
) as table
```


## Details

Menghasilkan tabel navigasi berisi baris untuk setiap tabel yang ditemukan di URL akun, <code>account</code>, dari vault penyimpanan Azure. Setiap baris berisi tautan ke tabel azure. Parameter data opsional, <code>options</code>, dapat diberikan untuk menentukan properti tambahan. Data dapat berisi bidang berikut:    <ul><li><code>Timeout</code> : Durasi yang mengontrol lama waktu tunggu sebelum mengabaikan permintaan ke server. Nilai defaultnya bergantung khusus pada sumber.</li></ul>



## Category
Accessing data
