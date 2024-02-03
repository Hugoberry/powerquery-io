---
title: List.MinN
---

# List.MinN


## Description

Menghasilkan nilai minimum dalam daftar. Jumlah nilai yang akan dihasilkan atau ketentuan pemfilteran dapat ditetapkan.


## Syntax

```powerquery
List.MinN(
    list as list,
    countOrCondition as any,
    optional comparisonCriteria as any,
    optional includeNulls as logical
) as list
```


## Details

Menghasilkan nilai minimum dalam daftar, <code>list</code>.    Parameter, <code>countOrCondition</code>, menentukan jumlah nilai yang akan dihasilkan atau ketentuan pemfilteran. Parameter opsional, <code>comparisonCriteria</code>, menentukan cara membandingkan nilai dalam daftar. <ul>        <li> <code>list</code>: Daftar nilai.</li>        <li> <code>countOrCondition</code>: Jika jumlah ditetapkan, daftar berisi maksimum <code>countOrCondition</code> item dalam urutan naik akan dihasilkan. Jika ketentuan ditetapkan, daftar item yang awalnya memenuhi ketentuan akan dihasilkan. Jika ternyata salah satu item tidak memenuhi ketentuan, item lainnya tidak akan diperhitungkan. Jika parameter ini null, nilai terkecil tunggal dalam daftar akan dihasilkan.</li><li><code>comparisonCriteria</code>: <i>[Optional]</i> Nilai <code>comparisonCriteria</code> opsional dapat ditetapkan untuk menentukan cara membandingkan item dalam daftar. Jika parameter ini null, pembanding default akan digunakan. </li></ul>


## Examples

### Example #1 
Mencari 5 nilai terkecil dalam daftar &lt;code&gt;\{3, 4, 5, -1, 7, 8, 2}&lt;/code&gt;.
```powerquery
List.MinN({3, 4, 5, -1, 7, 8, 2}, 5)
```

Result: 
```powerquery
{-1, 2, 3, 4, 5}
```




## Category
List.Ordering
