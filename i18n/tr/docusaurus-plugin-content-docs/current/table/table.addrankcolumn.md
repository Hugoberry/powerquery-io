---
title: Table.AddRankColumn
---

# Table.AddRankColumn


Bir sütunu bir veya daha fazla sütunun sıralamasıyla ekler.


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

`newColumnName` adlı bir kolonu `table`sütununa `comparisonCriteria` tarafından açıklanan bir veya daha fazla sütunun sıralamasıyla ekler.`options` öğesindeki RankKind seçeneği, gelişmiş kullanıcılar tarafından daha belirli bir sıralama yöntemi seçmek için kullanılabilir.


## Examples

### Example #1
"Revenue" sütununu en yüksekten en düşüğe sıralayan tabloya "Revenue Rank" adlı bir sütun ekleyin.
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
