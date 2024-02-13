---
title: Table.AddRankColumn
---

# Table.AddRankColumn


Fügt eine Spalte mit der Rangfolge einer oder mehrerer anderer Spalten an.


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

Fügt eine Spalte mit dem Namen <code>newColumnName</code> an die <code>table</code> mit der Rangfolge einer oder mehrerer anderer Spalten an, die von <code>comparisonCriteria</code> beschrieben werden.Die RankKind-Option in <code>options</code> kann von fortgeschrittenen Benutzern verwendet werden, um eine spezifischere Rangfolgemethode auszuwählen.


## Examples

### Example #1 
Fügen Sie der Tabelle eine Spalte mit dem Namen „Umsatzrangfolge“ hinzu, welche die Spalte „Umsatz“ vom höchsten zum niedrigsten Wert einstuft.
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
