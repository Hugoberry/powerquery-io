---
title: List.Average
---

# List.Average


## Description

Menghasilkan rata-rata dari nilai. Berfungsi untuk nilai angka, tanggal, datetime, datetimezone, dan durasi.


## Syntax

```powerquery
List.Average(
    list as list,
    optional precision as Precision.Type
) as any
```


## Details

Menghasilkan nilai rata-rata untuk item dalam daftar, <code>list</code>. Hasilnya diberikan dalam jenis data yang sama seperti nilai dalam daftar. Hanya berfungsi untuk nilai angka, tanggal, waktu, datetime, datetimezone, dan durasi.    Jika daftar kosong, null yang akan dihasilkan.


## Examples

### Example #1 
Mencari rata-rata dari daftar angka, &lt;code&gt;\{3, 4, 6}&lt;/code&gt;.
```powerquery
List.Average({3, 4, 6})
```

Result: 
```powerquery
4.333333333333333
```


### Example #2 
Mencari rata-rata dari nilai tanggal 1 Januari 2011, 2 Januari 2011, dan 3 Januari 2011.
```powerquery
List.Average({#date(2011, 1, 1), #date(2011, 1, 2), #date(2011, 1, 3)})
```

Result: 
```powerquery
#date(2011, 1, 2)
```




## Category
List.Averages
