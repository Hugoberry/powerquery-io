---
title: AtScale.Cubes
---

# AtScale.Cubes


Impor/data kubus DirectQuery dari AtScale.


## Syntax

```powerquery
AtScale.Cubes(
    server as Uri.Type,
    optional options as record
) as table
```


## Remarks

Menghasilkan data kubus dari AtScale di server `server`. Parameter catatan opsional, `opsi`, dapat ditetapkan untuk mengontrol opsi berikut

-   `TypedMeasureColumns`: Nilai logika menunjukkan apakah tipe yang ditentukan dalam model tabular atau multidimensi akan digunakan untuk tipe kolom pengukuran yang ditambahkan. Bila diatur ke false, tipe "nomor" akan digunakan untuk semua kolom pengukuran. Nilai default untuk opsi ini adalah false.
-   `CommandTimeout`: Durasi (dalam detik) yang mengontrol berapa lama kueri sisi server yang dapat dijalankan sebelum dibatalkan. Nilai defaultnya bergantung pada driver.
-   `ConnectionTimeout`: Durasi (dalam detik) yang mengontrol berapa lama waktu tunggu sebelum menghentikan upaya untuk menyambungkan ke server. Nilai defaultnya bergantung pada driver.

Parameter catatan ditetapkan sebagai \[option1 = value1, option2 = value2...\].


## Examples

### Example #1
Cantumkan data kubus dalam kubus AtScale.
```powerquery
AtScale.Cubes("https://contoso.atscale.com:10502/xmla/...")
```



