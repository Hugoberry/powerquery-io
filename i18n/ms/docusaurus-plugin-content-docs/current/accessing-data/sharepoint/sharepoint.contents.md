---
title: SharePoint.Contents
---

# SharePoint.Contents


Mengembalikan jadual yang mengandungi kandungan daripada tapak SharePoint.


## Syntax

```powerquery
SharePoint.Contents(
    url as text,
    optional options as record
) as table
```


## Remarks

Mengembalikan jadual yang mengandungi satu baris bagi setiap folder dan dokumen yang ditemui pada tapak SharePoint yang ditentukan, `url`. Setiap baris mengandungi sifat bagi folder atau fail itu dan pautan kepada kandungannya. `options` boleh ditentukan untuk mengawal opsyen berikut:

-   `ApiVersion` : Nombor (14 atau 15) atau teks "Auto" yang menentukan versi API SharePoint untuk digunakan bagi tapak ini. Apabila tidak ditentukan, versi API 14 digunakan. Apabila Auto ditentukan, versi pelayan akan secara automatik ditemui jika boleh, jika tidak, versi ditetapkan secara lalai kepada 14. Tapak SharePoint bukan Bahasa Inggeris memerlukan sekurang-kurangnya versi 15.
-   `Implementation` : Pilihan. Menentukan versi penyambung SharePoint yang hendak digunakan. Nilai yang diterima ialah "2.0" atau nol. Jika nilai ialah "2.0", pelaksanaan 2.0 bagi penyambung SharePoint digunakan. Jika nilai adalah nol, pelaksanaan asal penyambung SharePoint digunakan.



## Category
Accessing data
