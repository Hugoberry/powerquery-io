---
title: AtScale.Cubes
---

# AtScale.Cubes


Import/DirectQuery data kiub daripada AtScale.


## Syntax

```powerquery
AtScale.Cubes(
    server as Uri.Type,
    optional options as record
) as table
```


## Remarks

Mengembalikan data kiub daripada AtScale pada pelayan `pelayan`. Parameter rekod pilihan, `opsyen`, boleh ditentukan untuk mengawal opsyen berikut:

-   `TypedMeasureColumns`: Nilai logik yang menunjukkan sama ada jenis yang ditentukan dalam model berbilang dimensi atau berjadual akan digunakan untuk jenis lajur ukuran yang ditambah. Apabila ditetapkan kepada palsu, jenis "nombor" akan digunakan untuk semua lajur ukuran. Nilai lalai untuk opsyen ini ialah palsu.
-   `CommandTimeout`: Tempoh (dalam saat) yang mengawal tempoh pertanyaan pihak pelayan dibenarkan untuk dijalankan sebelum dibatalkan. Nilai lalai bergantung pada pemacu.
-   `ConnectionTimeout`: Tempoh (dalam saat) yang mengawal tempoh menunggu sebelum meninggalkan percubaan untuk membuat sambungan ke pelayan. Nilai lalai bergantung pada pemacu.

Parameter rekod ditentukan sebagai \[option1 = value1, option2 = value2...\].


## Examples

### Example #1
Senaraikan data kiub dalam kiub AtScale.
```powerquery
AtScale.Cubes("https://contoso.atscale.com:10502/xmla/...")
```



