---
title: Table.AddRankColumn
---

# Table.AddRankColumn


Anexa unha columna coa clasificación dunha ou máis columnas.


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

Anexa unha columna co nome `newColumnName` a `table` coa clasificación dunha ou máis columnas descritas por `comparisonCriteria`. Os usuarios avanzados poden usar a opción RankKind en `options` para escoller un método de clasificación máis específico.


## Examples

### Example #1
Engade unha columna co nome "RevenueRank" á táboa que clasifica a columna "Revenue" de maior a menor.
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
