---
title: Parquet.Document
---

# Parquet.Document


Menghasilkan konten dokumen Parquet sebagai tabel.


## Syntax

```powerquery
Parquet.Document(
    binary as binary,
    optional options as record
) as any
```


## Remarks

Menghasilkan konten dokumen Parquet sebagai tabel. Opsi meliputi:

-   `TypeMapping` : Nilai teks yang mengontrol pemetaan tipe default saat membaca dan menulis file. Nilai default adalah null dan mencoba mempertahankan fidelitas sebanyak mungkin ke tipe asli. Nilai "Sql" akan menghasilkan hasil yang paling kompatibel dengan Sql Server.



## Category
Mengakses data
