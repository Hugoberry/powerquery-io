---
title: List.Percentile
---

# List.Percentile


## Description

Mengembalikan satu atau lebih seperseratusan yang sepadan dengan kemungkinan yang diberikan.


## Syntax

```powerquery
List.Percentile(
    list as list,
    percentiles as any,
    optional options as record
) as any
```


## Details

Mengembalikan satu atau lebih seperseratusan bagi senarai <code>list</code>. Jika nilai <code>percentiles</code> ialah nombor antara 0.0 hingga 1.0, ia akan dianggap sebagai seperseratusan dan hasil akan menjadi    nilai tunggal yang sepadan dengan kemungkinan tersebut. Jika nilai <code>percentiles</code> ialah senarai nombor dengan nilai antara 0.0 hingga 1.0, hasil akan menjadi senarai seperseratusan    yang sepadan dengan kemungkinan input. Mod PercentileMode dalam <code>options</code> boleh digunakan oleh pengguna lanjutan untuk memilih kaedah sisipan yang lebih khusus tetapi tidak disyorkan untuk kebanyakan pengguna.    Simbol yang dipratakrif <code>PercentileMode.ExcelInc</code> dan <code>PercentileMode.ExcelExc</code> sepadan dengan kaedah sisipan yang digunakan oleh fungsi Excel    <code>PERCENTILE.INC</code> dan <code>PERCENTILE.EXC</code>. Tingkah laku lalai sepadan dengan <code>PercentileMode.ExcelInc</code>. Simbol    <code>PercentileMode.SqlCont</code> dan <code>PercentileMode.SqlDisc</code> sepadan dengan tingkah laku Pelayan SQL untuk <code>PERCENTILE_CONT</code> dan    <code>PERCENTILE_DISC</code>, masing-masing.  


## Examples

### Example #1 
Cari kuartil pertama bagi senarai &lt;code&gt;\{5, 3, 1, 7, 9}&lt;/code&gt;.
```powerquery
List.Percentile({5, 3, 1, 7, 9}, 0.25)
```

Result: 
```powerquery
3
```


### Example #2 
Cari kuartil bagi senarai &lt;code&gt;\{5, 3, 1, 7, 9}&lt;/code&gt; menggunakan kaedah sisipan yang sepadan dengan &lt;code&gt;PERCENTILE.EXC&lt;/code&gt; Excel.
```powerquery
List.Percentile({5, 3, 1, 7, 9}, {0.25, 0.5, 0.75}, [PercentileMode=PercentileMode.ExcelExc])
```

Result: 
```powerquery
{2, 5, 8}
```




## Category
List.Ordering
