---
title: Table.AddRankColumn
---

# Table.AddRankColumn


## Description

Egy oszlop hozzáfűzése egy vagy több másik oszlop rangsorolásával.


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

Hozzáfűz egy <code>newColumnName</code> nevű oszlopot a(z) <code>comparisonCriteria</code> által leírt egy vagy több oszlop rangsorolásával a következőhöz: <code>table</code>.A <code>options</code> RankKind beállítását speciálisabb rangsorolási módszer kiválasztására használhatják a haladó felhasználók.


## Examples

### Example #1 
Adjon hozzá egy RevenueRank nevű oszlopot a táblához, amely a Bevétel oszlopot rangsorolja a legmagasabbtól a legalacsonyabbig.
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
