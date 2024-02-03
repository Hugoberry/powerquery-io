---
title: AzureStorage.Tables
---

# AzureStorage.Tables


## Description

Mengembalikan jadual navigasi yang mengandungi jadual yang ditemui dalam akaun yang ditentukan daripada vault storan Azure.


## Syntax

```powerquery
AzureStorage.Tables(
    account as text,
    optional options as record
) as table
```


## Details

Mengembalikan jadual navigasi yang mengandungi baris untuk setiap jadual yang ditemui di URL akaun, <code>account</code>, daripada ruang simpan storan Azure. Setiap baris mengandungi pautan kepada jadual azure. Parameter rekod pilihan, <code>options</code>, mungkin diberikan untuk menentukan sifat tambahan. Rekod boleh mengandungi medan yang berikut:    <ul><li><code>Timeout</code> : Tempoh yang mengawal berapa lama perlu menunggu sebelum menghentikan permintaan kepada pelayan. Nilai lalai adalah khusus sumber.</li></ul>



## Category
Accessing data
