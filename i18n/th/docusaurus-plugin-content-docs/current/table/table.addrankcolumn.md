---
title: Table.AddRankColumn
---

# Table.AddRankColumn


ผนวกคอลัมน์กับการจัดอันดับของคอลัมน์อื่นอย่างน้อยหนึ่งคอลัมน์


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

ผนวกคอลัมน์ที่ชื่อ `newColumnName` เข้ากับ`table`ด้วยการจัดอันดับคอลัมน์อื่นอย่างน้อยหนึ่งคอลัมน์ที่อธิบายโดย`comparisonCriteria` ตัวเลือก RankKind ใน`options`สามารถใช้โดยผู้ใช้ขั้นสูงเพื่อเลือกวิธีการจัดอันดับที่เฉพาะเจาะจงมากขึ้น


## Examples

### Example #1
เพิ่มคอลัมน์ที่ชื่อ "RevenueRank" ลงในตารางที่จัดอันดับคอลัมน์ "รายได้" จากสูงสุดไปต่ำสุด
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
