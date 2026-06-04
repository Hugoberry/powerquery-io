---
title: Table.AddRankColumn
---

# Table.AddRankColumn


Připojí sloupec s řazením jednoho nebo více dalších sloupců.


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

Připojí sloupec s názvem `newColumnName` k `table` s řazením jednoho nebo více dalších sloupců popsaných v `comparisonCriteria`. Možnost RankKind v `options` můžou pokročilí uživatelé použít k výběru konkrétnější metody řazení.


## Examples

### Example #1
Přidá do tabulky sloupec s názvem RevenueRank, který seřadí sloupec Výnosy od nejvyšších po nejnižší.
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
