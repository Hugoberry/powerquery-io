---
title: Table.AddRankColumn
---

# Table.AddRankColumn


Dodaje kolonu sa rangiranjem nekih drugih kolona.


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

Dodaje kolonu sa imenom `newColumnName` u `table` sa rangiranjem nekih drugih kolona koje opisuje `comparisonCriteria`. Opciju RankKind u `options` napredni korisnici mogu da koriste za izbor specifičnijih metoda rangiranja.


## Examples

### Example #1
Dodajte kolonu sa nazivom „RevenueRank“ u tabelu koja rangira kolonu „Prihod“ od najvišeg do najnižeg.
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
