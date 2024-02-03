---
title: DB2.Database
---

# DB2.Database


## Description

Mengembalikan jadual bagi jadual dan pandangan SQL yang tersedia dalam pangkalan data Db2.


## Syntax

```powerquery
DB2.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Details

Mengembalikan jadual bagi jadual dan pandangan SQL yang tersedia dalam pangkalan data Db2 pada pelayan <code>server</code> dalam tika pangkalan data bernama <code>database</code>. Port boleh ditentukan secara pilihan dengan pelayan, dipisahkan oleh tanda titik bertindih. Parameter rekod pilihan, <code>options</code>, boleh ditentukan untuk mengawal opsyen berikut:    <ul><li><code>CreateNavigationProperties</code> : Logik (true/false) yang menetapkan sama ada untuk menjana sifat navigasi pada nilai yang dikembalikan (lalai adalah true).</li><li><code>NavigationPropertyNameGenerator</code> : Fungsi yang digunakan untuk mencipta nama bagi sifat navigasi.</li><li><code>Query</code> : Pertanyaan SQL asal yang digunakan untuk mengambil data. Jika pertanyaan menghasilkan berbilang set keputusan, hanya yang pertama akan dikembalikan.</li><li><code>CommandTimeout</code> : Tempoh yang mengawal berapa lama pertanyaan bahagian pelayan dibenarkan berjalan sebelum ia dibatalkan. Nilai lalai ialah sepuluh minit.</li><li><code>ConnectionTimeout</code> : Tempoh yang mengawal berapa lama perlu menunggu sebelum menghentikan percubaan untuk membuat sambungan kepada pelayan. Nilai lalai adalah bergantung pemacu.</li><li><code>HierarchicalNavigation</code> : Logik (true/false) yang menetapkan sama ada untuk melihat jadual yang dikumpulkan mengikut nama skema (lalai adalah false).</li><li><code>Implementation</code> : Menentukan pelaksanaan pembekal pangkalan data dalaman yang hendak digunakan. Nilai lalai ialah: &quot;IBM&quot; dan &quot;Microsoft&quot;.</li><li><code>BinaryCodePage</code> : Nombor untuk CCSID (Pengecam Set Aksara Berkod) untuk menyahkodkan data perduaan Db2 FOR BIT kepada rentetan aksara. Digunakan pada Pelaksanaan = “Microsoft”. Tetapkan 0 untuk menyahdayakan penukaran (lalai). Tetapkan 1 untuk menukar berdasarkan pengekodan pangkalan data. Tetapkan nombor CCSID lain untuk menukar kepada pengekodan aplikasi.</li><li><code>PackageCollection</code> : Menentukan nilai rentetan untuk koleksi pakej (lalai adalah &quot;NULLID&quot;) untuk mendayakan penggunaan pakej dikongsi yang diperlukan untuk memproses pernyataan SQL. Digunakan pada Pelaksanaan = &quot;Microsoft&quot;.</li><li><code>UseDb2ConnectGateway</code> : Menentukan sama ada sambungan sedang dibuat melalui get laluan Db2 Connect. Digunakan untuk pelaksanaan = &quot;Microsoft&quot;.</li></ul>    Parameter rekod ditentukan sebagai, contohnya [option1 = value1, option2 = value2...] atau [Query = "select …”].    



## Category
Accessing data
