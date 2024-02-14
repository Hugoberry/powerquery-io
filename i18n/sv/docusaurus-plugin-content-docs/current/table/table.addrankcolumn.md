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

Lägger till en kolumn med namnet <code>newColumnName</code> till <code>table</code> med rangordningen av en eller flera andra kolumner som beskrivs av <code>comparisonCriteria</code>.Alternativet RankKind i <code>options</code> kan användas av avancerade användare för att välja en mer specifik rankningsmetod.


## Examples

### Example #1 
Lägg till en kolumn med namnet &#34; RevenueRank&#34; till tabellen som rangordnar kolumnen &#34;Intäkter&#34; från högsta till lägsta.
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
