---
title: Table.AddRankColumn
---

# Table.AddRankColumn


Додає стовпець із ранжируванням одного або кількох інших стовпців.


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

Додає стовпець з іменем `newColumnName` до `table` з ранжируванням одного або кількох інших стовпців, описаних `comparisonCriteria`. Досвідчені користувачі можуть використовувати параметр RankKind у `options`, щоб вибрати більш конкретний метод ранжирування.


## Examples

### Example #1
Додайте стовпець під назвою "RevenueRank" до таблиці, яка визначає стовпець "Дохід" від найвищого до найнижчого значення.
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
