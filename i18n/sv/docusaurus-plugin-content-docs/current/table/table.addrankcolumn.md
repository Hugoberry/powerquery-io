---
title: Table.AddRankColumn
---

# Table.AddRankColumn


Lägger till en kolumn med rangordningen för en eller flera andra kolumner.


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

Lägger till en kolumn med namnet `newColumnName` till `table` med rangordningen av en eller flera andra kolumner som beskrivs av `comparisonCriteria`. Alternativet RankKind i `options` kan användas av avancerade användare för att välja en mer specifik rankningsmetod.


## Examples

### Example #1
Lägg till en kolumn med namnet " RevenueRank" till tabellen som rangordnar kolumnen "Intäkter" från högsta till lägsta.
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
