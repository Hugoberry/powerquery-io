---
title: AzureStorage.Tables
---

# AzureStorage.Tables


Mengembalikan jadual navigasi yang mengandungi jadual yang ditemui dalam akaun yang ditentukan daripada vault storan Azure.


## Syntax

```powerquery
AzureStorage.Tables(
    account as text,
    optional options as record
) as table
```


## Remarks

Mengembalikan jadual navigasi yang mengandungi baris untuk setiap jadual yang ditemui di URL akaun, `account`, daripada ruang simpan storan Azure. Setiap baris mengandungi pautan kepada jadual azure. Parameter rekod pilihan, `options`, boleh diberikan untuk menentukan sifat tambahan. Rekod tersebut boleh mengandungi medan berikut:

-   `Timeout` : Tempoh yang mengawal berapa lama perlu menunggu sebelum menghentikan permintaan kepada pelayan. Nilai lalai adalah khusus sumber.



## Category
Accessing data
