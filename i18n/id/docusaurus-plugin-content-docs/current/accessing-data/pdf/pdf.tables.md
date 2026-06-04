---
title: Pdf.Tables
---

# Pdf.Tables


Menghasilkan tabel apa pun yang ditemukan di file PDF.


## Syntax

```powerquery
Pdf.Tables(
    pdf as binary,
    optional options as record
) as table
```


## Remarks

Menghasilkan tabel yang ditemukan dalam `pdf`. Parameter catatan opsional, `options`, dapat diberikan untuk menetapkan properti tambahan. Data dapat berisi bidang berikut:

-   `Implementation` : Versi algoritma yang akan digunakan saat mengidentifikasi tabel. Versi lama hanya tersedia untuk kompatibilitas mundur guna mencegah kueri lama menjadi rusak oleh pembaruan algoritma. Versi terbaru akan selalu memberikan hasil terbaik. Nilai yang valid adalah "1.3", "1.2", "1.1", atau null.
-   `StartPage` : Menetapkan halaman pertama dalam rentang halaman untuk diperiksa. Default: 1.
-   `EndPage` : Menetapkan halaman terakhir dalam rentang halaman untuk diperiksa. Default: halaman terakhir dokumen.
-   `MultiPageTables` : Mengontrol apakah tabel serupa pada halaman berurutan akan digabungkan secara otomatis dalam satu tabel. Default: true.
-   `EnforceBorderLines` : Mengontrol apakah garis tepi selalu diterapkan sebagai batas sel (jika true), atau hanya digunakan sebagai salah satu petunjuk untuk menentukan batas sel (jika false). Default: false.


## Examples

### Example #1
Menghasilkan tabel yang terdapat dalam sample.pdf.
```powerquery
Pdf.Tables(File.Contents("c:\sample.pdf"))
```

Result: 
```powerquery
#table({"Name", "Kind", "Data"}, ...)
```




## Category
Mengakses data
