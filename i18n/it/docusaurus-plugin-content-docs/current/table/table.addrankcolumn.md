---
title: Table.AddRankColumn
---

# Table.AddRankColumn


Aggiunge una colonna con la classificazione di una o più altre colonne.


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

Aggiunge una colonna denominata `newColumnName` al `table` con la classificazione di una o più altre colonne descritte da `comparisonCriteria`. L'opzione RankKind in `options` può essere usata dagli utenti esperti per scegliere un metodo di classificazione più specifico.


## Examples

### Example #1
Aggiungere una colonna denominata "RevenueRank" alla tabella che classifica la colonna "Revenue" dal più alto al più basso.
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
