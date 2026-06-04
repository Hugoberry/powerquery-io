---
title: Table.MaxN
---

# Table.MaxN


Mengembalikan baris terbesar menggunakan kriteria yang ditentukan.


## Syntax

```powerquery
Table.MaxN(
    table as table,
    comparisonCriteria as any,
    countOrCondition as any
) as table
```


## Remarks

Mengembalikan baris terbesar dalam `table`, `comparisonCriteria` ditentukan. Selepas baris disusun, parameter `countOrCondition` mesti ditentukan untuk menapis selanjutnya hasil. Ambil perhatian bahawa algoritma susunan tidak menjamin hasil susunan tetap. Parameter `countOrCondition` boleh mengambil berbilang bentuk:

-   Jika nombor ditentukan, senarai sehingga `countOrCondition` item dalam urutan menaik dikembalikan.
-   Jika syarat ditentukan, senarai item yang pada asalnya memenuhi syarat dikembalikan. Setelah item gagal memenuhi syarat tersebut, tiada item selanjutnya akan dipertimbangkan.


## Examples

### Example #1
Car baris dengan nilai terbesar dalam lajur \[a\] dengan syarat \[a\] > 0, dalam jadual. Ingat bahawa baris diisih sebelum penapis digunakan.
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
Car baris dengan nilai terbesar dalam lajur \[a\] dengan syarat \[b\] > 0, dalam jadual. Ingat bahawa baris diisih sebelum penapis digunakan.
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
