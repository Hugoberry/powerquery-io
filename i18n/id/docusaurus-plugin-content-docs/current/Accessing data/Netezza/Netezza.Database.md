---
title: Netezza.Database
---

# Netezza.Database


## Description

Impor data dari database IBM Netezza.


## Syntax

```powerquery
Netezza.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Details

Menghasilkan tabel dari tabel, tampilan, dan fungsi Netezza yang disimpan dari <code>database</code> database Netezza Server pada <code>server</code> server. Port mungkin ditentukan secara opsional dengan server, dan dipisahkan oleh titik dua. Parameter catatan opsional, <code>opsi</code>, mungkin ditentukan untuk mengontrol opsi berikut:<ul>        <li><code>CreateNavigationProperties</code>: Logika (true/false) yang menentukan apakah menghasilkan properti navigasi pada nilai yang dihasilkan (defaultnya true)</li>        <li><code>HierarchicalNavigation</code>: Logika (true/false) yang menentukan apakah menampilkan tampilan tabel yang dikelompokkan berdasarkan nama skema (defaultnya false)</li>        <li><code>ConnectionTimeout</code>: Durasi yang mengontrol waktu tunggu sebelum menghentikan upaya pembuatan koneksi ke server. Nilai defaultnya tergantung pada driver.</li>        <li><code>CommandTimeout</code>: Durasi yang mengontrol lamanya kueri sisi server diizinkan untuk berjalan sebelum dibatalkan. Nilai defaultnya tergantung pada driver.</li><li><code>NormalizeDatabaseName</code>: Logika (true/false) yang mengatur normalisasi nama database ke huruf besar atau menginterpretasikannya secara literal (defaultnya true).</li></ul>Parameter catatan ditentukan sebagai [option1 = value1, option2 = value2...].


## Examples

### Example #1 
Cantumkan tabel dalam proyek IBM Netezza.
```powerquery
Netezza.Database("netezza:5480", "netezza_database")
```



