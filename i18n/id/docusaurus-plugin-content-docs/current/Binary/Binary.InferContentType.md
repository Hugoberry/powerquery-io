---
title: Binary.InferContentType
---

# Binary.InferContentType


## Description

Membaca aliran biner dan mencoba untuk menentukan jenis konten dan informasi format aliran.


## Syntax

```powerquery
Binary.InferContentType(
    source as binary
) as record
```


## Details

Mengembalikan catatan dengan bidang Content.Type yang berisi tipe MIME yang disimpulkan.    Jika jenis konten yang disimpulkan adalah text/\*, dan halaman kode pengodean terdeteksi, bidang Content.Encoding yang berisi pengodean aliran akan dihasilkan.    Jika jenis konten yang disimpulkan adalah text/csv, dan formatnya dibatasi, bidang Csv.PotentialDelimiter yang berisi tabel akan dihasilkan untuk analisis potensi pemisah.    Jika jenis konten yang disimpulkan adalah text/csv, dan formatnya lebar tetap, bidang Csv.PotentialPositions yang berisi daftar akan dihasilkan untuk analisis potensi posisi kolom dengan lebar tetap.



## Category
Binary
