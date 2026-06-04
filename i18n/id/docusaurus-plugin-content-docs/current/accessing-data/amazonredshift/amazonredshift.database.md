---
title: AmazonRedshift.Database
---

# AmazonRedshift.Database


Impor data dari database Amazon Redshift.


## Syntax

```powerquery
AmazonRedshift.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Menghasilkan tabel yang mencantumkan tabel di kluster Amazon Redshift `server` di database `database`. Parameter catatan opsional, `opsi`, dapat ditentukan untuk mengontrol opsi berikut:

-   `Nama Penyedia`: Nilai teks yang akan digunakan sebagai Nama Penyedia untuk koneksi. Ini digunakan saat menggunakan Autentikasi Microsoft.
-   `Ukuran Batch`: Jumlah baris yang diambil dalam satu panggilan ke server.


## Examples

### Example #1

```powerquery
AmazonRedshift.Database("contoso.redshift.amazonaws.com:5439", "dev")
```



