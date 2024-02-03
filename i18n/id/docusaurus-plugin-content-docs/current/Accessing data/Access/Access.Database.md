---
title: Access.Database
---

# Access.Database


## Description

Menghasilkan representasi struktural dari database Access.


## Syntax

```powerquery
Access.Database(
    database as binary,
    optional options as record
) as table
```


## Details

Menghasilkan representasi struktural dari database Access, <code>database</code>. Parameter catatan opsional, <code>options</code>, dapat ditentukan untuk mengontrol opsi berikut:    <ul><li><code>CreateNavigationProperties</code> : Logika (true/false) yang mengatur apakah akan membuat properti navigasi pada nilai yang dihasilkan atau tidak (defaultnya adalah true).</li><li><code>NavigationPropertyNameGenerator</code> : Fungsi yang digunakan untuk pembuatan nama properti navigasi.</li></ul>    Misalnya, parameter catatan ditentukan sebagai [option1 = value1, option2 = value2...].



## Category
Accessing data
