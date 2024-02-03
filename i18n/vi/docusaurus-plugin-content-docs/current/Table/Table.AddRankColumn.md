---
title: Table.AddRankColumn
---

# Table.AddRankColumn


## Description

Nối một cột với xếp hạng của một hoặc nhiều cột khác.


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

Nối một cột có tên <code>newColumnName</code> vào <code>table</code> với xếp hạng của một hoặc nhiều cột khác được mô tả bởi <code>comparisonCriteria</code>.Người dùng nâng cao có thể dùng tùy chọn <code>options</code> RankKind để chọn một phương pháp xếp hạng cụ thể hơn.


## Examples

### Example #1 
Thêm cột có tên &#34;RevenueRank&#34; vào bảng xếp hạng cột &#34;Doanh thu&#34; từ cao nhất đến thấp nhất.
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
