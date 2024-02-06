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

<code>newColumnName</code> adlı bir kolonu <code>table</code>sütununa <code>comparisonCriteria</code> tarafından açıklanan bir veya daha fazla sütunun sıralamasıyla ekler.<code>options</code> öğesindeki RankKind seçeneği, gelişmiş kullanıcılar tarafından daha belirli bir sıralama yöntemi seçmek için kullanılabilir.


## Examples

### Example #1 
&#34;Revenue&#34; sütununu en yüksekten en düşüğe sıralayan tabloya &#34;Revenue Rank&#34; adlı bir sütun ekleyin.
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
