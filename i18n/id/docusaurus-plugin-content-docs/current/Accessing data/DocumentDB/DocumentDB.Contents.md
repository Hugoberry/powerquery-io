---
title: DocumentDB.Contents
---

# DocumentDB.Contents


## Description

Masukkan URL akun Azure Cosmos DB.


## Syntax

```powerquery
DocumentDB.Contents(
    url as text,
    optional database as text,
    optional collection as text,
    optional options as record
) as table
```


## Details

Mengembalikan tabel database Azure Cosmos DB di <code>URL</code>. Jika <code>database</code> telah ditentukan, tabel kumpulan akan dikembalikan sebagai gantinya. Selain itu, jika bidang <code>Kueri</code> telah ditentukan dalam catatan <code>opsi</code>, hasil kueri yang dijalankan di database dan/atau kumpulan tertentu akan dikembalikan.


