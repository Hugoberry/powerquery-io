---
title: Folder.Contents
---

# Folder.Contents


## Description

Menghasilkan tabel yang berisi properti dan konten dari file dan folder yang ditemukan di folder tertentu.


## Syntax

```powerquery
Folder.Contents(
    path as text,
    optional options as record
) as table
```


## Details

Menghasilkan tabel yang berisi baris untuk setiap folder dan file yang ditemukan dalam folder <code>path</code>. Setiap baris berisi properti folder atau file dan tautan ke kontennya. Parameter <code>options</code> saat ini hanya ditujukan untuk penggunaan internal.



## Category
Accessing data
