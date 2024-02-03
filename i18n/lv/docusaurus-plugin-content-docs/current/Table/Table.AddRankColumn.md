---
title: Table.AddRankColumn
---

# Table.AddRankColumn


## Description

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


## Details

Pievieno kolonnai ar nosaukumu <code>newColumnName</code> <code>table</code> ar vienas vai vairāku citu kolonnu rangu, ko apraksta <code>comparisonCriteria</code>.Detalizētās informācijas opciju RankKind <code>options</code> izmantot pieredzējuši lietotāji, lai izvēlētos precīzāku vērtēšanas metodi.


## Examples

### Example #1 
Pievienojiet tabulai kolonnu ar nosaukumu &#34;RevenueRank&#34;, kuras rangs ir &#34;Revenue&#34; kolonna no augstākās līdz zemākajai.
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
