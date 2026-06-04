---
title: Table.AddRankColumn
---

# Table.AddRankColumn


Menambahkan kolom dengan peringkat satu atau lebih kolom lainnya.


## Syntax

```powerquery
Table.AddRankColumn(
    table as table,
    newColumnName as text,
    comparisonCriteria as any,
    optional options as record
) as table
```


## Remarks

Menambahkan kolom bernama `newColumnName` ke `table` dengan peringkat satu atau lebih kolom lainnya yang dijelaskan oleh `comparisonCriteria`. Opsi RankKind di `options` dapat digunakan oleh pengguna tingkat lanjut untuk memilih metode pemeringkatan yang lebih spesifik.


## Examples

### Example #1
Tambahkan kolom bernama "RevenueRank" ke tabel yang memeringkat kolom "Revenue" dari tertinggi ke terendah.
```powerquery
Table.AddRankColumn(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Revenue = 200],
        [CustomerID = 2, Name = "Jim", Revenue = 100],
        [CustomerID = 3, Name = "Paul", Revenue = 200],
        [CustomerID = 4, Name = "Ringo", Revenue = 50]
    }),
    "RevenueRank",
    {"Revenue", Order.Descending},
    [RankKind = RankKind.Competition]
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 1, Name = "Bob", Revenue = 200, RevenueRank = 1],
    [CustomerID = 3, Name = "Paul", Revenue = 200, RevenueRank = 1],
    [CustomerID = 2, Name = "Jim", Revenue = 100, RevenueRank = 3],
    [CustomerID = 4, Name = "Ringo", Revenue = 50, RevenueRank = 4]
})
```




## Category
Table.Ordering
