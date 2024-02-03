---
title: Folder.Files
---

# Folder.Files


## Description

Menghasilkan tabel berisi properti dan konten dari file yang ditemukan dalam folder dan subfolder yang ditetapkan.


## Syntax

```powerquery
Folder.Files(
    path as text,
    optional options as record
) as table
```


## Details

Menghasilkan tabel yang berisi baris untuk setiap file yang ditemukan dalam folder <code>path</code> dan semua subfoldernya. Setiap baris berisi properti file dan tautan ke kontennya. Parameter <code>options</code> saat ini hanya ditujukan untuk penggunaan internal.



## Category
Accessing data
