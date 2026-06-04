---
title: SharePoint.Tables
---

# SharePoint.Tables


Mengembalikan jadual yang mengandungi kandungan daripada Senarai SharePoint.


## Syntax

```powerquery
SharePoint.Tables(
    url as text,
    optional options as record
) as table
```


## Remarks

Mengembalikan jadual yang mengandungi satu baris bagi setiap item Senarai yang ditemui pada senarai SharePoint yang ditentukan, `url`. Setiap baris mengandungi sifat Senarai itu. `options` boleh ditentukan untuk mengawal opsyen berikut:

-   `ApiVersion` : Nombor (14 atau 15) atau teks "Auto" yang menentukan versi API SharePoint untuk digunakan bagi tapak ini. Apabila tidak ditentukan, versi API 14 digunakan. Apabila Auto ditentukan, versi pelayan akan secara automatik ditemui jika boleh, jika tidak, versi ditetapkan secara lalai kepada 14. Tapak SharePoint bukan Bahasa Inggeris memerlukan sekurang-kurangnya versi 15.
-   `Implementation` : Pilihan. Menentukan versi penyambung SharePoint yang hendak digunakan. Nilai yang diterima ialah "2.0" atau nol. Jika nilai ialah "2.0", pelaksanaan 2.0 bagi penyambung SharePoint digunakan. Jika nilai adalah nol, pelaksanaan asal penyambung SharePoint digunakan.
-   `ViewMode` : Pilihan. Opsyen ini hanya sah untuk pelaksanaan 2.0. Nilai yang diterima ialah "Semua" dan "Lalai". Jika tiada nilai ditentukan, nilai disetkan kepada "Semua". Apabila "Semua" ditentukan, pandangan termasuk semua lajur yang dicipta pengguna dan takrifan sistem. Apabila "Lalai" ditentukan, pandangan akan sepadan dengan apa yang pengguna lihat apabila melihat senarai dalam talian dalam mana-mana pandangan yang pengguna setkan sebagai Lalai dalam seting mereka. Jika pengguna mengedit pandangan lalai mereka untuk menambah atau mengalih keluar sama ada lajur yang dicipta pengguna atau ditentukan sistem, atau dengan mencipta pandangan baru dan mengesetnya sebagai lalai, perubahan ini akan merambak melalui penyambung.
-   `DisableAppendNoteColumns` : Menghalang penyambung daripada menggunakan titik akhir berasingan untuk lajur nota.



## Category
Accessing data
