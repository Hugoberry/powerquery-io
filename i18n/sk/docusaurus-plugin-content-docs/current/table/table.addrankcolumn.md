---
title: Table.AddRankColumn
---

# Table.AddRankColumn


Pripojí stĺpec s poradím jedného alebo viacerých ďalších stĺpcov.


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

Pripojí stĺpec s názvom `newColumnName` k `table` s poradím jedného alebo viacerých stĺpcov popísaných v `comparisonCriteria`. Možnosť RankKind v `options` môžu pokročilí používatelia použiť na výber špecifickejšej metódy poradia.


## Examples

### Example #1
Pridajte do tabuľky stĺpec s názvom RevenueBank, ktorý zoradí stĺpec Výnosy od najvyšších po najnižšie.
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
