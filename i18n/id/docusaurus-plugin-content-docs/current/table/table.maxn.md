---
title: Table.MaxN
---

# Table.MaxN


Menghasilkan baris terbesar menggunakan kriteria yang diberikan.


## Syntax

```powerquery
Table.MaxN(
    table as table,
    comparisonCriteria as any,
    countOrCondition as any
) as table
```


## Remarks

Mengembalikan baris terbesar di `table`, memberikan `comparisonCriteria`. Setelah baris diurutkan, parameter `countOrCondition` harus ditetapkan untuk lebih lanjut memfilter hasil. Perhatikan bahwa algoritma pengurutan tidak dapat menjamin hasil pengurutan yang tetap. Parameter `countOrCondition` dapat menggunakan beberapa bentuk:

-   Jika jumlah ditetapkan, daftar hingga `countOrCondition` item dalam urutan naik akan dihasilkan.
-   Jika kondisi ditetapkan, daftar item yang awalnya memenuhi syarat kondisi akan dihasilkan. Jika ternyata salah satu item tidak sesuai dengan kondisi, item lainnya tidak akan diperhitungkan.


## Examples

### Example #1
Mencari baris dengan nilai terbesar di kolom \[a\] dengan ketentuan \[a\] > 0, dalam tabel . Baris akan diurutkan sebelum filter diterapkan.
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
Mencari baris dengan nilai terbesar di kolom \[a\] dengan ketentuan \[b\] > 0, dalam tabel. Baris akan diurutkan sebelum filter diterapkan.
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
