---
title: Vertica.Database
---

# Vertica.Database


Impor data dari Vertica


## Syntax

```powerquery
Vertica.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Mengembalikan tabel skema yang tersedia pada server yang diberi nama oleh parameter `server` di database yang diberi nama oleh parameter `database`. Parameter catatan opsional, `opsi`, mungkin diberikan untuk menentukan properti tambahan. Catatan dapat berisi bidang berikut:

-   `ConnectionTimeout`: Durasi yang mengatur waktu tunggu sebelum meninggalkan upaya untuk melakukan koneksi ke server. Nilai defaultnya bergantung dengan driver.
-   `CommandTimeout`: Durasi yang mengatur waktu kueri sisi-server yang diizinkan berjalan sebelum dibatalkan. Nilai defaultnya bergantung dengan driver.


## Examples

### Example #1
Daftar tabel dalam Vertica
```powerquery

```



