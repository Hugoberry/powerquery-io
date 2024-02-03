---
title: Table.AddRankColumn
---

# Table.AddRankColumn


## Description

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


## Details

Pripojí stĺpec s názvom <code>newColumnName</code> k <code>table</code> s poradím jedného alebo viacerých stĺpcov popísaných v <code>comparisonCriteria</code>.Možnosť RankKind v <code>options</code> môžu pokročilí používatelia použiť na výber špecifickejšej metódy poradia.


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
