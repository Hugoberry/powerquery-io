---
title: AmazonRedshift.Database
---

# AmazonRedshift.Database


## Description

Import data daripada pangkalan data Amazon Redshift.


## Syntax

```powerquery
AmazonRedshift.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Details

Mengembalikan jadual yang menyenaraikan jadual pada kelompok Amazon Redshift <code>server</code> dalam pangkalan data <code>database</code>.  Parameter rekod pilihan, <code>options</code>, boleh ditentukan untuk mengawal opsyen berikut:<ul><li><code> NamaProvider</code>: Nilai teks untuk digunakan sebagai Nama Pembekal untuk sambungan. Ini digunakan apabila menggunakan Microsoft Authentication.</li><li><code> Saiz Kelompok</code>: Bilangan baris yang diambil dalam satu panggilan ke pelayan.</li></ul>  


## Examples

### Example #1 

```powerquery
AmazonRedshift.Database("contoso.redshift.amazonaws.com:5439", "dev")
```



