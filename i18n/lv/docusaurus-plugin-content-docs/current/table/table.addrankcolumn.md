---
title: Table.AddRankColumn
---

# Table.AddRankColumn


Pievieno kolonnu ar vienas vai vairāku citu kolonnu rangu.


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

Pievieno kolonnai ar nosaukumu `newColumnName` `table` ar vienas vai vairāku citu kolonnu rangu, ko apraksta `comparisonCriteria`. Detalizētās informācijas opciju RankKind `options` izmantot pieredzējuši lietotāji, lai izvēlētos precīzāku vērtēšanas metodi.


## Examples

### Example #1
Pievienojiet tabulai kolonnu ar nosaukumu "RevenueRank", kuras rangs ir "Revenue" kolonna no augstākās līdz zemākajai.
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
