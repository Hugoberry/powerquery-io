---
title: SharePoint.Contents
---

# SharePoint.Contents


Menghasilkan tabel berisi konten dari situs SharePoint.


## Syntax

```powerquery
SharePoint.Contents(
    url as text,
    optional options as record
) as table
```


## Remarks

Menghasilkan tabel yang berisi baris untuk setiap folder dan dokumen yang ditemukan pada situs SharePoint yang ditentukan, `url`. Setiap baris berisi properti folder atau file dan tautan ke kontennya. `options` dapat ditentukan untuk mengontrol opsi berikut:

-   `ApiVersion` : Angka (14 atau 15) atau teks "Otomatis" yang menentukan versi API SharePoint yang digunakan untuk situs ini. API versi 14 akan digunakan jika belum ditentukan. Saat Otomatis ditetapkan, versi server akan ditemukan secara otomatis apabila memungkinkan, atau versi berubah ke 14 secara default. Situs SharePoint Bukan Berbahasa Inggris memerlukan setidaknya versi 15.
-   `Implementation` : Opsional. Menentukan versi konektor SharePoint yang akan digunakan. Nilai yang diterima adalah "2.0" atau null. Jika nilainya "2.0", implementasi konektor SharePoint 2.0 akan digunakan. Jika nilai null, implementasi konektor SharePoint asli akan digunakan.



## Category
Accessing data
