---
title: SharePoint.Tables
---

# SharePoint.Tables


## Description

Mengembalikan jadual yang mengandungi kandungan daripada Senarai SharePoint.


## Syntax

```powerquery
SharePoint.Tables(
    url as text,
    optional options as record
) as table
```


## Details

Mengembalikan jadual yang mengandungi satu baris bagi setiap item Senarai yang ditemui pada senarai SharePoint yang ditentukan, <code>url</code>. Setiap baris mengandungi sifat Senarai itu. <code>options</code> boleh ditentukan untuk mengawal opsyen berikut:    <ul><li><code>ApiVersion</code> : Nombor (14 atau 15) atau teks &quot;Auto&quot; yang menentukan versi API SharePoint untuk digunakan bagi tapak ini. Apabila tidak ditentukan, versi API 14 digunakan. Apabila Auto ditentukan, versi pelayan akan secara automatik ditemui jika boleh, jika tidak, versi ditetapkan secara lalai kepada 14. Tapak SharePoint bukan Bahasa Inggeris memerlukan sekurang-kurangnya versi 15.</li><li><code>Implementation</code> : Pilihan. Menentukan versi penyambung SharePoint yang hendak digunakan. Nilai yang diterima ialah &quot;2.0&quot; atau nol. Jika nilai ialah &quot;2.0&quot;, pelaksanaan 2.0 bagi penyambung SharePoint digunakan. Jika nilai adalah nol, pelaksanaan asal penyambung SharePoint digunakan.</li><li><code>ViewMode</code> : Pilihan. Opsyen ini hanya sah untuk pelaksanaan 2.0. Nilai yang diterima ialah &quot;Semua&quot; dan &quot;Lalai&quot;. Jika tiada nilai ditentukan, nilai disetkan kepada &quot;Semua&quot;. Apabila &quot;Semua&quot; ditentukan, pandangan termasuk semua lajur yang dicipta pengguna dan takrifan sistem. Apabila &quot;Lalai&quot; ditentukan, pandangan akan sepadan dengan apa yang pengguna lihat apabila melihat senarai dalam talian dalam mana-mana pandangan yang pengguna setkan sebagai Lalai dalam seting mereka. Jika pengguna mengedit pandangan lalai mereka untuk menambah atau mengalih keluar sama ada lajur yang dicipta pengguna atau ditentukan sistem, atau dengan mencipta pandangan baru dan mengesetnya sebagai lalai, perubahan ini akan merambak melalui penyambung.</li><li><code>DisableAppendNoteColumns</code> : Menghalang penyambung daripada menggunakan titik akhir berasingan untuk lajur nota.</li></ul>    



## Category
Accessing data
