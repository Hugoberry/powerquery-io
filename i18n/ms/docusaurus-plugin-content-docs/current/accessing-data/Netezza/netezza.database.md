---
title: Netezza.Database
---

# Netezza.Database


Import data daripada pangkalan data IBM Netezza.


## Syntax

```powerquery
Netezza.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Mengembalikan jadual bagi jadual, pandangan dan fungsi Netteza yang disimpan daripada pangkalan data Pelayan Netezza `pangkalan data` pada pelayan `pelayan`. Port mungkin ditentukan secara pilihan dengan pelayan, dipisahkan dengan noktah bertindih. Parameter rekod pilihan, `opsyen`, boleh ditentukan untuk mengawal opsyen yang berikut:

-   `CreateNavigationProperties`: Logik (benar/palsu) yang menetapkan sama ada mahu menjana sifat navigasi pada nilai yang dikembalikan (lalai ialah benar)
-   `HierarchicalNavigation`: Logik (benar/palsu) yang menetapkan sama ada mahu melihat jadual yang dikumpulkan mengikut nama skemanya (lalai ialah palsu)
-   `ConnectionTimeout`: Tempoh yang mengawal jangka masa perlu menunggu sebelum meninggalkan percubaan untuk membuat sambungan kepada pelayan. Nilai lalai adalah bergantung pemacu.
-   `CommandTimeout`: Tempoh yang mengawal jangka masa pertanyaan bahagian pelayan dibenarkan berjalan sebelum ia dibatalkan. Nilai lalai adalah bergantung pemacu.
-   `NormalizeDatabaseName`: Logik (benar/palsu) yang menetapkan sama ada mahu menormalkan nama pangkalan data kepada huruf besar atau mentafsirnya secara literal (lalai ialah benar).

Parameter rekod ditentukan sebagai \[option1 = value1, option2 = value2...\].


## Examples

### Example #1
Senaraikan jadual dalam projek IBM Netezza.
```powerquery
Netezza.Database("netezza:5480", "netezza_database")
```



