---
title: SharePoint.Tables
---

# SharePoint.Tables


Menghasilkan tabel berisi konten dari Daftar SharePoint.


## Syntax

```powerquery
SharePoint.Tables(
    url as text,
    optional options as record
) as table
```


## Remarks

Menghasilkan tabel yang berisi baris untuk setiap item Daftar yang ditemukan pada daftar SharePoint yang ditentukan, `url`. Setiap baris berisi properti Daftar. `options` dapat ditentukan untuk mengontrol opsi berikut:

-   `ApiVersion` : Angka (14 atau 15) atau teks "Otomatis" yang menentukan versi API SharePoint yang digunakan untuk situs ini. API versi 14 akan digunakan jika belum ditentukan. Saat Otomatis ditetapkan, versi server akan ditemukan secara otomatis apabila memungkinkan, atau versi berubah ke 14 secara default. Situs SharePoint Bukan Berbahasa Inggris memerlukan setidaknya versi 15.
-   `Implementation` : Opsional. Menentukan versi konektor SharePoint yang akan digunakan. Nilai yang diterima adalah "2.0" atau null. Jika nilainya "2.0", implementasi konektor SharePoint 2.0 akan digunakan. Jika nilai null, implementasi konektor SharePoint asli akan digunakan.
-   `ViewMode` : Opsional. Opsi ini hanya berlaku untuk implementasi 2.0. Nilai yang diterima "Semua" dan "Default". Jika nilai tidak ditentukan, nilai akan diatur ke "Semua". Jika nilai diatur ke "Semua", tampilan menyertakan semua kolom buatan pengguna dan yang ditentukan sistem. Jika nilai diatur ke "Default", tampilan akan disesuaikan dengan tampilan yang dilihat pengguna saat melihat daftar secara online dalam tampilan mana pun yang ditetapkan oleh pengguna sebagai tampilan Default di pengaturan mereka. Jika pengguna mengedit tampilan default untuk menambah atau menghapus kolom buatan pengguna atau yang ditentukan sistem, atau dengan membuat tampilan baru dan mengaturnya sebagai default, perubahan ini akan disebarkan melalui konektor.
-   `DisableAppendNoteColumns` : Mencegah konektor menggunakan titik akhir terpisah untuk kolom catatan.



## Category
Accessing data
