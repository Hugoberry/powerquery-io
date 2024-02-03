---
title: List.Percentile
---

# List.Percentile


## Description

Menghasilkan satu atau beberapa persentil sampel yang sesuai dengan probabilitas yang diberikan.


## Syntax

```powerquery
List.Percentile(
    list as list,
    percentiles as any,
    optional options as record
) as any
```


## Details

Menghasilkan satu atau beberapa persentil sampel dari daftar <code>list</code>. Jika nilai <code>percentiles</code> adalah angka antara 0,0 dan 1,0, maka akan diperlakukan sebagai persentil dan hasilnya akan berupa    nilai tunggal yang sesuai dengan probabilitas tersebut. Jika nilai <code>percentiles</code> adalah daftar angka dengan nilai antara 0,0 dan 1,0, hasilnya akan menjadi daftar persentil    sesuai dengan probabilitas input. Opsi PercentileMode di <code>options</code> dapat digunakan oleh pengguna tingkat lanjut untuk memilih metode interpolasi yang lebih spesifik, namun tidak disarankan untuk sebagian besar penggunaan.    Simbol standar <code>PercentileMode.ExcelInc</code> dan <code>PercentileMode.ExcelExc</code> cocok dengan metode interpolasi yang digunakan oleh fungsi Excel    <code>PERCENTILE.INC</code> dan <code>PERCENTILE.EXC</code>. Perilaku default cocok dengan <code>PercentileMode.ExcelInc</code>. Simbol    <code>PercentileMode.SqlCont</code> dan <code>PercentileMode.SqlDisc</code> cocok dengan perilaku SQL Server untuk masing-masing <code>PERCENTILE_CONT</code> dan    <code>PERCENTILE_DISC</code>.  


## Examples

### Example #1 
Mencari kuartil pertama dari daftar &lt;code&gt;\{5, 3, 1, 7, 9}&lt;/code&gt;.
```powerquery
List.Percentile({5, 3, 1, 7, 9}, 0.25)
```

Result: 
```powerquery
3
```


### Example #2 
Mencari kuartil dari daftar &lt;code&gt; \{5, 3, 1, 7, 9} &lt;/code&gt; menggunakan metode interpolasi yang cocok dengan &lt;code&gt;PERCENTILE.EXC&lt;/code&gt; Excel.
```powerquery
List.Percentile({5, 3, 1, 7, 9}, {0.25, 0.5, 0.75}, [PercentileMode=PercentileMode.ExcelExc])
```

Result: 
```powerquery
{2, 5, 8}
```




## Category
List.Ordering
