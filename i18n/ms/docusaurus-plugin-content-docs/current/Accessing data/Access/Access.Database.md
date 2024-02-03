---
title: Access.Database
---

# Access.Database


## Description

Mengembalikan perwakilan struktur bagi pangkalan data Access.


## Syntax

```powerquery
Access.Database(
    database as binary,
    optional options as record
) as table
```


## Details

Mengembalikan perwakilan struktur bagi pangkalan data Access, <code>database</code>. Parameter rekod pilihan, <code>options</code>, boleh ditentukan untuk mengawal opsyen berikut:    <ul><li><code>CreateNavigationProperties</code> : Logik (true/false) yang menetapkan sama ada hendak menjana sifat navigasi pada nilai yang dikembalikan (lalai adalah false).</li><li><code>NavigationPropertyNameGenerator</code> : Fungsi yang digunakan untuk mencipta nama bagi sifat navigasi.</li></ul>    Sebagai contoh, parameter rekod ditentukan sebagai [option1 = value1, option2 = value2...].



## Category
Accessing data
