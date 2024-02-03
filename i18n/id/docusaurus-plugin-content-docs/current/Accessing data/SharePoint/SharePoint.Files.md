---
title: SharePoint.Files
---

# SharePoint.Files


## Description

Menghasilkan tabel berisi dokumen dari situs SharePoint.


## Syntax

```powerquery
SharePoint.Files(
    url as text,
    optional options as record
) as table
```


## Details

Menghasilkan tabel yang berisi baris untuk setiap dokumen yang ditemukan pada situs SharePoint yang ditentukan, <code>url</code>, dan subfolder. Setiap baris berisi properti folder atau file dan tautan ke kontennya. <code>options</code> dapat ditentukan untuk mengontrol opsi berikut:    <ul><li><code>ApiVersion</code> : Angka (14 atau 15) atau teks &quot;Otomatis&quot; yang menentukan versi API SharePoint yang digunakan untuk situs ini. API versi 14 akan digunakan jika belum ditentukan. Saat Otomatis ditetapkan, versi server akan ditemukan secara otomatis apabila memungkinkan, atau versi berubah ke 14 secara default. Situs SharePoint Bukan Berbahasa Inggris memerlukan setidaknya versi 15.</li></ul>    



## Category
Accessing data
