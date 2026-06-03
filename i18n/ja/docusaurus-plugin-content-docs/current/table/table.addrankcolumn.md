---
title: Table.AddRankColumn
---

# Table.AddRankColumn


1 つ以上の他の列のランキングが入った列を追加します。


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

`comparisonCriteria` によって説明されている 1 つ以上の他の列のランキングが入った `newColumnName` という名前の列を、`table` に追加します。 上級ユーザーは `options` の RankKind オプションを使用することで、より具体的なランキング方法を選択することができます。


## Examples

### Example #1
"Revenue" 列に対して最高から最低までのランク付けをする "RevenueRank" という名前の列を、テーブルに追加します。
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
