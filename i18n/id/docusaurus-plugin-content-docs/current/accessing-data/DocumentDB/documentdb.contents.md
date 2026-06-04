---
title: DocumentDB.Contents
---

# DocumentDB.Contents


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


## Remarks

Mengembalikan tabel database Azure Cosmos DB di `URL`. Jika `database` telah ditentukan, tabel kumpulan akan dikembalikan sebagai gantinya. Selain itu, jika bidang `Kueri` telah ditentukan dalam catatan `opsi`, hasil kueri yang dijalankan di database dan/atau kumpulan tertentu akan dikembalikan.


