---
title: List.MaxN
---

# List.MaxN


## Description

Menghasilkan nilai maksimum dalam daftar. Jumlah nilai yang akan dihasilkan atau ketentuan pemfilteran harus ditetapkan.


## Syntax

```powerquery
List.MaxN(
    list as list,
    countOrCondition as any,
    optional comparisonCriteria as any,
    optional includeNulls as logical
) as list
```


## Details

Menghasilkan nilai maksimum dalam daftar, <code>list</code>.    Setelah baris diurutkan, parameter opsional dapat ditetapkan untuk memfilter hasil lebih lanjut. Parameter opsional <code>countOrCondition</code> menentukan jumlah nilai yang akan dihasilkan atau ketentuan pemfilteran. Parameter opsional <code>comparisonCriteria</code> menentukan cara membandingkan nilai dalam daftar. <ul>        <li> <code>list</code>: Daftar nilai.</li>        <li> <code>countOrCondition</code>: Jika jumlah ditetapkan, daftar berisi maksimum <code>countOrCondition</code> item dalam urutan naik akan dihasilkan. Jika ketentuan ditetapkan, daftar item yang awalnya memenuhi ketentuan akan dihasilkan. Jika ternyata salah satu item tidak memenuhi ketentuan, item lainnya tidak akan diperhitungkan.</li><li><code>comparisonCriteria</code>: <i>[Optional]</i> Nilai <code>comparisonCriteria</code> opsional dapat ditetapkan untuk menentukan cara membandingkan item dalam daftar. Jika parameter ini null, pembanding default akan digunakan. </li></ul>



## Category
List.Ordering
