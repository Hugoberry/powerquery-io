---
title: Netezza.Database
---

# Netezza.Database


## Description

Import data daripada pangkalan data IBM Netezza.


## Syntax

```powerquery
Netezza.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Details

Mengembalikan jadual bagi jadual, pandangan dan fungsi Netteza yang disimpan daripada pangkalan data Pelayan Netezza <code>pangkalan data</code> pada pelayan <code>pelayan</code>. Port mungkin ditentukan secara pilihan dengan pelayan, dipisahkan dengan noktah bertindih. Parameter rekod pilihan, <code>opsyen</code>, boleh ditentukan untuk mengawal opsyen yang berikut:<ul>        <li><code>CreateNavigationProperties</code>: Logik (benar/palsu) yang menetapkan sama ada mahu menjana sifat navigasi pada nilai yang dikembalikan (lalai ialah benar)</li>        <li><code>HierarchicalNavigation</code>: Logik (benar/palsu) yang menetapkan sama ada mahu melihat jadual yang dikumpulkan mengikut nama skemanya (lalai ialah palsu)</li>        <li><code>ConnectionTimeout</code>: Tempoh yang mengawal jangka masa perlu menunggu sebelum meninggalkan percubaan untuk membuat sambungan kepada pelayan. Nilai lalai adalah bergantung pemacu.</li>        <li><code>CommandTimeout</code>: Tempoh yang mengawal jangka masa pertanyaan bahagian pelayan dibenarkan berjalan sebelum ia dibatalkan. Nilai lalai adalah bergantung pemacu.</li><li><code>NormalizeDatabaseName</code>: Logik (benar/palsu) yang menetapkan sama ada mahu menormalkan nama pangkalan data kepada huruf besar atau mentafsirnya secara literal (lalai ialah benar).</li></ul>Parameter rekod ditentukan sebagai [option1 = value1, option2 = value2...].


## Examples

### Example #1 
Senaraikan jadual dalam projek IBM Netezza.
```powerquery
Netezza.Database("netezza:5480", "netezza_database")
```



