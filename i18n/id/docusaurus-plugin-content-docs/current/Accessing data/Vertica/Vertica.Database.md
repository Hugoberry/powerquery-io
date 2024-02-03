---
title: Vertica.Database
---

# Vertica.Database


## Description

Impor data dari Vertica


## Syntax

```powerquery
Vertica.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Details

Mengembalikan tabel skema yang tersedia pada server yang diberi nama oleh parameter <code>server</code> di database yang diberi nama oleh parameter <code>database</code>.Parameter catatan opsional, <code>opsi</code>, mungkin diberikan untuk menentukan properti tambahan. Catatan dapat berisi bidang berikut:<ul>    <li><code>ConnectionTimeout</code>: Durasi yang mengatur waktu tunggu sebelum meninggalkan upaya untuk melakukan koneksi ke server. Nilai defaultnya bergantung dengan driver.</li>    <li><code> CommandTimeout</code>: Durasi yang mengatur waktu kueri sisi-server yang diizinkan berjalan sebelum dibatalkan. Nilai defaultnya bergantung dengan driver.</li></ul>


## Examples

### Example #1 
Daftar tabel dalam Vertica
```powerquery

```



