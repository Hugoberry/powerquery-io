---
title: Table.AddRankColumn
---

# Table.AddRankColumn


追加一列，并使用一个或多个其他列进行排名。


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

将名为“<code>newColumnName</code>”的列追加到<code>table</code>，并使用由<code>comparisonCriteria</code>描述的一个或多个其他列进行排名。高级用户可以使用<code>options</code>中的 RankKind 选项来选择更具体的排名方法。


## Examples

### Example #1 
向表中添加名为 &#34;RevenueRank&#34; 的列，以便对 &#34;Revenue&#34; 列进行从高到低的排名。
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
