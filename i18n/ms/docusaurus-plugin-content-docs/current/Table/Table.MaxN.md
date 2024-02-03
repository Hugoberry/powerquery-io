---
title: Table.MaxN
---

# Table.MaxN


## Description

Mengembalikan baris terbesar menggunakan kriteria yang ditentukan.


## Syntax

```powerquery
Table.MaxN(
    table as table,
    comparisonCriteria as any,
    countOrCondition as any
) as table
```


## Details

Mengembalikan baris terbesar dalam <code>table</code>, <code>comparisonCriteria</code> ditentukan.     Selepas baris disusun, parameter <code>countOrCondition</code> mesti ditentukan untuk menapis selanjutnya hasil. Ambil perhatian bahawa algoritma susunan tidak menjamin hasil susunan tetap. Parameter <code>countOrCondition</code> boleh mengambil berbilang bentuk:    <ul>        <li> Jika nombor ditentukan, senarai sehingga <code>countOrCondition</code> item dalam urutan menaik dikembalikan. </li>        <li> Jika syarat ditentukan, senarai item yang pada asalnya memenuhi syarat dikembalikan. Setelah item gagal memenuhi syarat tersebut, tiada item selanjutnya akan dipertimbangkan. </li>  </ul>


## Examples

### Example #1 
Car baris dengan nilai terbesar dalam lajur [a] dengan syarat [a] &gt; 0, dalam jadual. Ingat bahawa baris diisih sebelum penapis digunakan.
```powerquery
Table.MaxN(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 0, b = 0],
        [a = 6, b = 2]
    }),
    "a",
    each [a] > 0
)
```

Result: 
```powerquery
Table.FromRecords({
    [a = 6, b = 2],
    [a = 2, b = 4]
})
```


### Example #2 
Car baris dengan nilai terbesar dalam lajur [a] dengan syarat [b] &gt; 0, dalam jadual. Ingat bahawa baris diisih sebelum penapis digunakan.
```powerquery
Table.MaxN(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 8, b = 0],
        [a = 6, b = 2]
    }),
    "a",
    each [b] > 0
)
```

Result: 
```powerquery
Table.FromRecords({})
```




## Category
Table.Ordering
