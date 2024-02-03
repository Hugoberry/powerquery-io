---
title: Table.AddRankColumn
---

# Table.AddRankColumn


## Description

Tilføjer en kolonne med rangeringen af en eller flere andre kolonner.


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

Føjer en kolonne med navnet <code>newColumnName</code> til <code>table</code> med rangeringen af en eller flere andre kolonner, der er beskrevet af <code>comparisonCriteria</code>.RankKind-indstillingen i <code>options</code> kan bruges af avancerede brugere til at vælge en mere specifik rangeringsmetode.


## Examples

### Example #1 
Føj en kolonne med navnet &#34;RevenueRank&#34; til tabellen, der rangerer kolonnen &#34;Omsætning&#34; fra højeste til laveste.
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
