---
title: Access.Database
---

# Access.Database


Menghasilkan representasi struktural dari database Access.


## Syntax

```powerquery
Access.Database(
    database as binary,
    optional options as record
) as table
```


## Remarks

Menghasilkan representasi struktural dari database Access, `database`. Parameter catatan opsional, `options`, dapat ditentukan untuk mengontrol opsi berikut:

-   `CreateNavigationProperties` : Logika (true/false) yang mengatur apakah akan membuat properti navigasi pada nilai yang dihasilkan atau tidak (defaultnya adalah true).
-   `NavigationPropertyNameGenerator` : Fungsi yang digunakan untuk pembuatan nama properti navigasi.

Parameter catatan ditentukan sebagai \[option1 = value1, option2 = value2...\], misalnya.



## Category
Accessing data
