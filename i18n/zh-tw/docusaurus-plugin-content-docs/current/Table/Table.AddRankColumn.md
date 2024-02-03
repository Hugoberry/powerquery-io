---
title: Table.AddRankColumn
---

# Table.AddRankColumn


## Description

附加一欄，並使用一或多個其他欄進行排名。


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

將名為 <code>newColumnName</code> 的欄附加到 <code>table</code>，並使用<code>comparisonCriteria</code>描述的一或多個其他欄進行排名。高級用戶可以使用<code>options</code>中的 RankKind 選項來選擇更具體的排名方法。


## Examples

### Example #1 
新增一個名為 &#34;RevenueRank&#34; 的欄至資料表中，並將 &#34;Revenue&#34; 欄從最高到最低排名。
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
