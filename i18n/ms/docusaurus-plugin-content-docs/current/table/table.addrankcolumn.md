---
title: Table.AddRankColumn
---

# Table.AddRankColumn


Menambah lajur dengan kedudukan satu atau lebih lajur lain.


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

Menambah lajur bernama `newColumnName` pada `table` dengan penarafan satu atau lebih lajur lain yang diterangkan oleh `comparisonCriteria`. Opsyen RankKind dalam `options` boleh digunakan oleh pengguna lanjutan untuk memilih kaedah penarafan yang lebih khusus.


## Examples

### Example #1
Tambah lajur bernama "RevenueRank" pada jadual yang menarafkan lajur "Hasil" daripada yang tertinggi kepada terendah.
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
