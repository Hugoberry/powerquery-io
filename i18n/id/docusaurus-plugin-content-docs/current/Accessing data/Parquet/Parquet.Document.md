---
title: Parquet.Document
---

# Parquet.Document


## Description

Menghasilkan konten dokumen Parquet sebagai tabel.


## Syntax

```powerquery
Parquet.Document(
    binary as binary,
    optional options as record
) as any
```


## Details

Menghasilkan konten dokumen Parquet sebagai tabel. Opsi meliputi:
    <ul>
    <li> <code>TypeMapping</code> : Nilai teks yang mengontrol pemetaan tipe default saat membaca dan menulis file. Nilai default adalah null dan mencoba mempertahankan fidelitas sebanyak mungkin ke tipe asli. Nilai "Sql" akan menghasilkan hasil yang paling kompatibel dengan Sql Server.</li>
    </ul>



## Category
Mengakses data
