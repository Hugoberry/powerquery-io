---
title: SharePoint.Tables
---

# SharePoint.Tables


## Description

Menghasilkan tabel berisi konten dari Daftar SharePoint.


## Syntax

```powerquery
SharePoint.Tables(
    url as text,
    optional options as record
) as table
```


## Details

Menghasilkan tabel yang berisi baris untuk setiap item Daftar yang ditemukan pada daftar SharePoint yang ditentukan, <code>url</code>. Setiap baris berisi properti Daftar. <code>options</code> dapat ditentukan untuk mengontrol opsi berikut:    <ul><li><code>ApiVersion</code> : Angka (14 atau 15) atau teks &quot;Otomatis&quot; yang menentukan versi API SharePoint yang digunakan untuk situs ini. API versi 14 akan digunakan jika belum ditentukan. Saat Otomatis ditetapkan, versi server akan ditemukan secara otomatis apabila memungkinkan, atau versi berubah ke 14 secara default. Situs SharePoint Bukan Berbahasa Inggris memerlukan setidaknya versi 15.</li><li><code>Implementation</code> : Opsional. Menentukan versi konektor SharePoint yang akan digunakan. Nilai yang diterima adalah &quot;2.0&quot; atau null. Jika nilainya &quot;2.0&quot;, implementasi konektor SharePoint 2.0 akan digunakan. Jika nilai null, implementasi konektor SharePoint asli akan digunakan.</li><li><code>ViewMode</code> : Opsional. Opsi ini hanya berlaku untuk implementasi 2.0. Nilai yang diterima &quot;Semua&quot; dan &quot;Default&quot;. Jika nilai tidak ditentukan, nilai akan diatur ke &quot;Semua&quot;. Jika nilai diatur ke &quot;Semua&quot;, tampilan menyertakan semua kolom buatan pengguna dan yang ditentukan sistem. Jika nilai diatur ke &quot;Default&quot;, tampilan akan disesuaikan dengan tampilan yang dilihat pengguna saat melihat daftar secara online dalam tampilan mana pun yang ditetapkan oleh pengguna sebagai tampilan Default di pengaturan mereka. Jika pengguna mengedit tampilan default untuk menambah atau menghapus kolom buatan pengguna atau yang ditentukan sistem, atau dengan membuat tampilan baru dan mengaturnya sebagai default, perubahan ini akan disebarkan melalui konektor.</li><li><code>DisableAppendNoteColumns</code> : Mencegah konektor menggunakan titik akhir terpisah untuk kolom catatan.</li></ul>    



## Category
Accessing data
