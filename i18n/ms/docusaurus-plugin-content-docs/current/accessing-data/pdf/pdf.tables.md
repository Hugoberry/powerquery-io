---
title: Pdf.Tables
---

# Pdf.Tables


Mengembalikan apa-apa jadual yang ditemui dalam fail PDF.


## Syntax

```powerquery
Pdf.Tables(
    pdf as binary,
    optional options as record
) as table
```


## Remarks

Mengembalikan sebarang jadual yang ditemui dalam `pdf`. Parameter rekod pilihan, `options`, boleh diberikan untuk menentukan sifat tambahan. Rekod boleh mengandungi medan berikut:

-   `Implementation` : Versi algoritma yang digunakan apabila mengenal pasti jadual. Versi lama tersedia hanya untuk keserasian ke belakang, untuk menghalang pertanyaan lama daripada dijejaskan oleh kemas kini algoritma. Versi terbaharu sepatutnya sentiasa memberikan hasil terbaik. Nilai yang sah ialah "1.3", "1.2", "1.1", atau nol.
-   `StartPage` : Menentukan halaman pertama dalam julat halaman untuk diperiksa. Lalai: 1.
-   `EndPage` : Menentukan halaman terakhir dalam julat halaman untuk diperiksa. Lalai: halaman terakhir bagi dokumen.
-   `MultiPageTables` : Mengawal sama ada jadual yang sama pada halaman berturutan akan secara automatik digabungkan ke dalam jadual tunggal. Lalai: benar.
-   `EnforceBorderLines` : Mengawal sama ada garis sempadan sentiasa dikuatkuasakan sebagai sempadan sel (apabila benar) atau hanya digunakan sebagai satu petunjuk antara banyak untuk menentukan sempadan sel (apabila palsu). Lalai: palsu.


## Examples

### Example #1
Mengembalikan jadual yang terkandung dalam sample.pdf.
```powerquery
Pdf.Tables(File.Contents("c:\sample.pdf"))
```

Result: 
```powerquery
#table ({"Name", "Kind", "Data"}, ...)
```




## Category
Mencapai data
