---
title: Table.AddRankColumn
---

# Table.AddRankColumn


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


## Remarks

Doda stolpec z imenom `newColumnName` k `table` z razvrstitvijo enega ali več drugih stolpcev, ki jih opisuje `comparisonCriteria`. Možnost RankKind v `options` lahko izkušeni uporabniki uporabijo za izbiro bolj specifične metode razvrstitve.


## Examples

### Example #1
Dodajte stolpec z imenom"RevenueRank"v tabelo, ki razvrsti stolpec"Prihodek"od najvišjega do najnižjega.
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
