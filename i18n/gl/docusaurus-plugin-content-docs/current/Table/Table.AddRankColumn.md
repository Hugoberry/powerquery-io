---
title: Table.AddRankColumn
---

# Table.AddRankColumn


## Description

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


## Details

Anexa unha columna co nome <code>newColumnName</code> a <code>table</code> coa clasificación dunha ou máis columnas descritas por <code>comparisonCriteria</code>. Os usuarios avanzados poden usar a opción RankKind en <code>options</code> para escoller un método de clasificación máis específico.


## Examples

### Example #1 
Engade unha columna co nome &#34;RevenueRank&#34; á táboa que clasifica a columna &#34;Revenue&#34; de maior a menor.
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
