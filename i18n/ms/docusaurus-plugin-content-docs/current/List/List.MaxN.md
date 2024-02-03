---
title: List.MaxN
---

# List.MaxN


## Description

Mengembalikan nilai maksimum dalam senarai. Bilangan nilai untuk dikembalikan atau syarat penapisan mesti ditentukan.


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

Mengembalikan nilai maksimum dalam senarai, <code>list</code>.    Selepas baris disusun, parameter pilihan boleh ditentukan untuk menapis selanjutnya hasil. Parameter pilihan <code>countOrCondition</code> menentukan bilangan nilai untuk dikembalikan atau syarat penapisan. Parameter pilihan <code>comparisonCriteria</code> menentukan cara untuk membandingkan nilai dalam senarai. <ul>        <li> <code>list</code>: Senarai nilai.</li>        <li> <code>countOrCondition</code>: Jika nombor ditentukan, senarai sehingga <code>countOrCondition</code> item dalam urutan menaik dikembalikan. Jika syarat ditentukan, senarai item yang pada asalnya memenuhi syarat dikembalikan. Setelah item gagal syarat tersebut, tiada item selanjutnya akan dipertimbangkan.</li><li><code>comparisonCriteria</code>: <i>[Pilihan]</i> Nilai <code>comparisonCriteria</code> pilihan boleh ditentukan untuk menentukan cara untuk membandingkan item dalam senarai. Jika parameter ini ialah nol, pembanding lalai digunakan. </li></ul>



## Category
List.Ordering
