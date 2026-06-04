---
title: AmazonRedshift.Database
---

# AmazonRedshift.Database


Import data daripada pangkalan data Amazon Redshift.


## Syntax

```powerquery
AmazonRedshift.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Mengembalikan jadual yang menyenaraikan jadual pada kelompok Amazon Redshift `server` dalam pangkalan data `database`. Parameter rekod pilihan, `opsyen`, boleh ditentukan untuk mengawal opsyen berikut:

-   `NamaProvider`: Nilai teks untuk digunakan sebagai Nama Pembekal untuk sambungan. Ini digunakan apabila menggunakan Microsoft Authentication.
-   `Saiz Kelompok`: Bilangan baris yang diambil dalam panggilan tunggal ke pelayan.


## Examples

### Example #1

```powerquery
AmazonRedshift.Database("contoso.redshift.amazonaws.com:5439", "dev")
```



