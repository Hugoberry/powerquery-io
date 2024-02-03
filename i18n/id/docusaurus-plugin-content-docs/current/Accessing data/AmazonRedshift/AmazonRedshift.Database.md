---
title: AmazonRedshift.Database
---

# AmazonRedshift.Database


## Description

Impor data dari database Amazon Redshift.


## Syntax

```powerquery
AmazonRedshift.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Details

Menghasilkan cantuman tabel dari tabel pada kluster Amazon Redshift <code>server</code> di database <code>database</code>.  Parameter catatan opsional, <code>opsi</code>, dapat ditentukan untuk mengontrol opsi berikut:<ul><li><code>Nama Penyedia</code>: Nilai teks yang akan digunakan sebagai Nama Penyedia koneksi. Ini digunakan saat menggunakan Autentikasi Microsoft.</li><li><code>Ukuran Batch</code>: Jumlah baris yang diambil dalam satu panggilan ke server.</li></ul>  


## Examples

### Example #1 

```powerquery
AmazonRedshift.Database("contoso.redshift.amazonaws.com:5439", "dev")
```



