---
title: Table.AddRankColumn
---

# Table.AddRankColumn


## Description

Appends a column with the ranking of one or more other columns.


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

Appends a column named <code>newColumnName</code> to the <code>table</code> with the ranking of one or more other columns described by <code>comparisonCriteria</code>.The RankKind option in <code>options</code> can be used by advanced users to pick a more-specific ranking method.


## Examples

### Example #1 
Add a column named &#34;RevenueRank&#34; to the table which ranks the &#34;Revenue&#34; column from highest to lowest.
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
