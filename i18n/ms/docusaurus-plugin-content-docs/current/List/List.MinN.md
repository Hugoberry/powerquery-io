---
title: List.MinN
---

# List.MinN


## Description

Mengembalikan nilai minimum dalam senarai. Bilangan nilai untuk dikembalikan atau syarat penapisan boleh ditentukan.


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

Mengembalikan nilai minimum dalam senarai, <code>list</code>.    Parameter, <code>countOrCondition</code>, menentukan bilangan nilai untuk dikembalikan atau syarat penapisan. Parameter pilihan, <code>comparisonCriteria</code>, menentukan cara untuk membandingkan nilai dalam senarai. <ul>        <li> <code>list</code>: Senarai nilai.</li>        <li> <code>countOrCondition</code>: Jika nombor ditentukan, senarai sehingga <code>countOrCondition</code> item dalam urutan menaik dikembalikan. Jika syarat ditentukan, senarai item yang pada asalnya memenuhi syarat dikembalikan. Setelah item gagal syarat tersebut, tiada item selanjutnya akan dipertimbangkan. Jika parameter ini ialah nol, nilai terkecil tunggal dalam senarai akan dikembalikan.</li><li><code>comparisonCriteria</code>: <i>[Pilihan]</i> Nilai <code>comparisonCriteria</code> pilihan boleh ditentukan untuk menentukan cara untuk membandingkan item dalam senarai. Jika parameter ini ialah nol, pembanding lalai digunakan. </li></ul>


## Examples

### Example #1 
Cari 5 nilai terkecil dalam senarai &lt;code&gt;\{3, 4, 5, -1, 7, 8, 2}&lt;/code&gt;.
```powerquery
List.MinN({3, 4, 5, -1, 7, 8, 2}, 5)
```

Result: 
```powerquery
{-1, 2, 3, 4, 5}
```




## Category
List.Ordering
