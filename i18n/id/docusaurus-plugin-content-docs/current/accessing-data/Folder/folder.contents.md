---
title: Folder.Contents
---

# Folder.Contents


Menghasilkan tabel yang berisi properti dan konten dari file dan folder yang ditemukan di folder tertentu.


## Syntax

```powerquery
Folder.Contents(
    path as text,
    optional options as record
) as table
```


## Remarks

Menghasilkan tabel yang berisi baris untuk setiap folder dan file yang ditemukan dalam folder `path`. Setiap baris berisi properti folder atau file dan tautan ke kontennya. Parameter `options` saat ini hanya ditujukan untuk penggunaan internal.



## Category
Accessing data
