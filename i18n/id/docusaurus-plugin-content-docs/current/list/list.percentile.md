---
title: List.Percentile
---

# List.Percentile


Menghasilkan satu atau beberapa persentil sampel yang sesuai dengan probabilitas yang diberikan.


## Syntax

```powerquery
List.Percentile(
    list as list,
    percentiles as any,
    optional options as record
) as any
```


## Remarks

Menghasilkan satu atau beberapa persentil sampel dari daftar `list`. Jika nilai `percentiles` adalah angka antara 0,0 dan 1,0, maka akan diperlakukan sebagai persentil dan hasilnya akan berupa nilai tunggal yang sesuai dengan probabilitas tersebut. Jika nilai `percentiles` adalah daftar angka dengan nilai antara 0,0 dan 1,0, hasilnya akan menjadi daftar persentil sesuai dengan probabilitas input.  
  
Opsi PercentileMode di `options` dapat digunakan oleh pengguna tingkat lanjut untuk memilih metode interpolasi yang lebih spesifik, namun tidak disarankan untuk sebagian besar penggunaan. Simbol standar `PercentileMode.ExcelInc` dan `PercentileMode.ExcelExc` sesuai dengan metode interpolasi yang digunakan oleh fungsi Excel `PERCENTILE.INC` dan `PERCENTILE.EXC`. Perilaku default cocok dengan `PercentileMode.ExcelInc`. Simbol `PercentileMode.SqlCont` dan `PercentileMode.SqlDisc` cocok dengan perilaku SQL Server untuk masing-masing `PERCENTILE_CONT` dan `PERCENTILE_DISC`.


## Examples

### Example #1
Mencari kuartil pertama dari daftar `{5, 3, 1, 7, 9}`.
```powerquery
List.Percentile({5, 3, 1, 7, 9}, 0.25)
```

Result: 
```powerquery
3
```


### Example #2
Mencari kuartil dari daftar `{5, 3, 1, 7, 9}` menggunakan metode interpolasi yang cocok dengan `PERCENTILE.EXC` Excel.
```powerquery
List.Percentile({5, 3, 1, 7, 9}, {0.25, 0.5, 0.75}, [PercentileMode=PercentileMode.ExcelExc])
```

Result: 
```powerquery
{2, 5, 8}
```




## Category
List.Ordering
