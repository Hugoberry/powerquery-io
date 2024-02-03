---
title: Table.AddRankColumn
---

# Table.AddRankColumn


## Description

Добавляет столбец с ранжированием одного или нескольких других столбцов.


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

Добавляет столбец с именем <code>newColumnName</code> к <code>table</code> с ранжированием одного или нескольких других столбцов, описанных посредством <code>comparisonCriteria</code>.Параметр RankKind в <code>options</code> может использоваться продвинутыми пользователями для выбора более конкретного метода ранжирования.


## Examples

### Example #1 
Добавьте столбец с именем RevenueRank в таблицу, которая ранжирует столбец &#34;Доход&#34; от максимального к минимальному значению.
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
