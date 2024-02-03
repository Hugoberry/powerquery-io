---
title: Table.AddRankColumn
---

# Table.AddRankColumn


## Description

Бір немесе бірнеше басқа бағандардың рейтингісі бар бағанды ​​қосады.


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

<code>comparisonCriteria</code> арқылы сипатталған бір немесе бірнеше бағандардың рейтингісі бар <code>newColumnName</code> бастап <code>table</code> дейінгі атауы бар бағанды ​​қосады.<code>options</code> ішіндегі RankKind параметрін озық пайдаланушылар нақтырақ бағалау әдісін таңдау үшін пайдалана алады.


## Examples

### Example #1 
&#34;Кіріс&#34; бағанын жоғарыдан төменге дәрежелейтін кестеге &#34;RevenueRank&#34; деп аталатын бағанды қосыңыз.
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
