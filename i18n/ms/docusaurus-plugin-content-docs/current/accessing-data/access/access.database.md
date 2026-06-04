---
title: Access.Database
---

# Access.Database


Mengembalikan perwakilan struktur bagi pangkalan data Access.


## Syntax

```powerquery
Access.Database(
    database as binary,
    optional options as record
) as table
```


## Remarks

Mengembalikan perwakilan struktur bagi pangkalan data Access, `database`. Parameter rekod pilihan, `options`, boleh ditentukan untuk mengawal opsyen berikut:

-   `CreateNavigationProperties` : Logik (true/false) yang menetapkan sama ada hendak menjana sifat navigasi pada nilai yang dikembalikan (lalai adalah false).
-   `NavigationPropertyNameGenerator` : Fungsi yang digunakan untuk mencipta nama bagi sifat navigasi.

Parameter rekod ditentukan sebagai \[option1 = value1, option2 = value2...\], contohnya.



## Category
Accessing data
