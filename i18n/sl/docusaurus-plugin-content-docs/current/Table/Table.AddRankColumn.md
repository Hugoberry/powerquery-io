---
title: Table.AddRankColumn
---

# Table.AddRankColumn


## Description

Doda stolpec z razvrstitvijo enega ali več drugih stolpcev.


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

Doda stolpec z imenom <code>newColumnName</code> k <code>table</code> z razvrstitvijo enega ali več drugih stolpcev, ki jih opisuje <code>comparisonCriteria</code>.Možnost RankKind v <code>options</code> lahko izkušeni uporabniki uporabijo za izbiro bolj specifične metode razvrstitve.


## Examples

### Example #1 
Dodajte stolpec z imenom &#34;RevenueRank&#34; v tabelo, ki razvrsti stolpec &#34;Prihodek&#34; od najvišjega do najnižjega.
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
