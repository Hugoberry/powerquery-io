---
title: List.Percentile
---

# List.Percentile


Mengembalikan satu atau lebih seperseratusan yang sepadan dengan kemungkinan yang diberikan.


## Syntax

```powerquery
List.Percentile(
    list as list,
    percentiles as any,
    optional options as record
) as any
```


## Remarks

Mengembalikan satu atau lebih seperseratusan bagi senarai `list`. Jika nilai `percentiles` ialah nombor antara 0.0 hingga 1.0, ia akan dianggap sebagai seperseratusan dan hasil akan menjadi nilai tunggal yang sepadan dengan kemungkinan tersebut. Jika nilai `percentiles` ialah senarai nombor dengan nilai antara 0.0 hingga 1.0, hasil akan menjadi senarai seperseratusan yang sepadan dengan kemungkinan input.  
  
Mod PercentileMode dalam `options` boleh digunakan oleh pengguna lanjutan untuk memilih kaedah sisipan yang lebih khusus tetapi tidak disyorkan untuk kebanyakan pengguna. Simbol yang dipratakrif `PercentileMode.ExcelInc` dan `PercentileMode.ExcelExc` sepadan dengan kaedah sisipan yang digunakan oleh fungsi Excel `PERCENTILE.INC` dan `PERCENTILE.EXC`. Tingkah laku lalai sepadan dengan `PercentileMode.ExcelInc`. Simbol `PercentileMode.SqlCont` dan `PercentileMode.SqlDisc` sepadan dengan tingkah laku SQL Server untuk `PERCENTILE_CONT` dan `PERCENTILE_DISC`, masing-masing.


## Examples

### Example #1
Cari kuartil pertama bagi senarai `{5, 3, 1, 7, 9}`.
```powerquery
List.Percentile({5, 3, 1, 7, 9}, 0.25)
```

Result: 
```powerquery
3
```


### Example #2
Cari kuartil bagi senarai `{5, 3, 1, 7, 9}` menggunakan kaedah sisipan yang sepadan dengan `PERCENTILE.EXC` Excel.
```powerquery
List.Percentile({5, 3, 1, 7, 9}, {0.25, 0.5, 0.75}, [PercentileMode=PercentileMode.ExcelExc])
```

Result: 
```powerquery
{2, 5, 8}
```




## Category
List.Ordering
