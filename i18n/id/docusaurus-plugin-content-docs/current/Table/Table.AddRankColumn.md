---
title: Table.AddRankColumn
---

# Table.AddRankColumn


## Description

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


## Details

Menambahkan kolom bernama <code>newColumnName</code> ke <code>table</code> dengan peringkat satu atau lebih kolom lainnya yang dijelaskan oleh <code>comparisonCriteria</code>.Opsi RankKind di <code>options</code> dapat digunakan oleh pengguna tingkat lanjut untuk memilih metode pemeringkatan yang lebih spesifik.


## Examples

### Example #1 
Tambahkan kolom bernama &#34;RevenueRank&#34; ke tabel yang memeringkat kolom &#34;Revenue&#34; dari tertinggi ke terendah.
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
