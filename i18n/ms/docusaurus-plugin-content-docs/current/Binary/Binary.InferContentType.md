---
title: Binary.InferContentType
---

# Binary.InferContentType


## Description

Membaca strim perduaan dan cuba menentukan jenis kandungan dan maklumat format strim.


## Syntax

```powerquery
Binary.InferContentType(
    source as binary
) as record
```


## Details

Mengembalikan rekod dengan medan Content.Type yang mengandungi jenis MIME tertaabir.     Jika jenis kandungan tertaabir ialah teks/\* dan halaman kod pengekodan dikesan, maka secara tambahan mengembalikan medan Content.Encoding yang mengandungi pengekodan strim tersebut.    Jika jenis kandungan tertaabir ialah teks/csv dan formatnya terbatas, secara tambahan mengembalikan medan Csv.PotentialDelimiter yang mengandungi jadual untuk analisis pembatas berpotensi.    Jika jenis kandungan tertaabir ialah teks/csv dan format ialah lebar tetap, secara tambahan mengembalikan medan Csv.PotentialPositions yang mengandungi senarai untuk analisis kedudukan lajur lebar tetap berpotensi.



## Category
Binary
