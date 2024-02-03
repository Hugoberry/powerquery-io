---
title: Table.AddRankColumn
---

# Table.AddRankColumn


## Description

하나 이상의 다른 열 순위와 함께 열을 추가합니다.


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

<code>comparisonCriteria</code>에서 설명하는 하나 이상의 다른 열 순위와 함께 <code>newColumnName</code>이라는 열을 <code>table</code>에 추가합니다.<code>options</code>의 RankKind 옵션은 고급 사용자가 보다 구체적인 순위 지정 방법을 선택하는 데 사용할 수 있습니다.


## Examples

### Example #1 
&#34;Revenue&#34; 열의 순위를 가장 높은 것에서 가장 낮은 순서로 지정하는 테이블에 &#34;RevenueRank&#34;라는 열을 추가합니다.
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
