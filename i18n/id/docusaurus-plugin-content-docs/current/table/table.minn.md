---
title: Table.MinN
---

# Table.MinN


Menghasilkan baris terkecil menggunakan kriteria yang diberikan.


## Syntax

```powerquery
Table.MinN(
    table as table,
    comparisonCriteria as any,
    countOrCondition as any
) as table
```


## Remarks

Menghasilkan baris terkecil di `table`, memberikan `comparisonCriteria`. Setelah baris diurutkan, parameter `countOrCondition` harus ditetapkan untuk lebih lanjut memfilter hasil. Perhatikan bahwa algoritme pengurutan tidak dapat menjamin hasil pengurutan yang tetap. Parameter `countOrCondition` dapat menggunakan beberapa form:

-   Jika jumlah ditetapkan, daftar hingga `countOrCondition` item dalam urutan naik akan dihasilkan.
-   Jika kondisi ditetapkan, daftar item yang awalnya memenuhi syarat kondisi akan dihasilkan. Jika ternyata salah satu item tidak sesuai dengan kondisi, item lainnya tidak akan diperhitungkan.


## Examples

### Example #1
Mencari baris dengan nilai terkecil di kolom \[a\] dengan ketentuan \[a\] &lt; 3, dalam tabel. Baris akan diurutkan sebelum filter diterapkan.
```powerquery
Table.MinN(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 0, b = 0],
        [a = 6, b = 4]
    }),
    "a",
    each [a] < 3
)
```

Result: 
```powerquery
Table.FromRecords({
    [a = 0, b = 0],
    [a = 2, b = 4]
})
```


### Example #2
Mencari baris dengan nilai terkecil di kolom \[a\] dengan ketentuan \[b\] &lt; 0, dalam tabel. Baris akan diurutkan sebelum filter diterapkan.
```powerquery
Table.MinN(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 8, b = 0],
        [a = 6, b = 2]
    }),
    "a",
    each [b] < 0
)
```

Result: 
```powerquery
Table.FromRecords({})
```




## Category
Table.Ordering
