---
title: Table.AddRankColumn
---

# Table.AddRankColumn


स्तंभ को एक या अधिक स्तंभों की रैंकिंग के साथ जोड़ता है.


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

<code>comparisonCriteria</code>द्वारा वर्णित एक या अधिक स्तंभों की रैंकिंग के साथ <code>table</code> में <code>newColumnName</code> नाम का स्तंभ जोड़ता है.<code>options</code> में RankKind विकल्प का उपयोग उन्नत उपयोगकर्ताओं द्वारा अधिक-विशिष्ट रैंकिंग पद्धति चुनने के लिए किया जा सकता है.


## Examples

### Example #1 
तालिका में &#34;RevenueRank&#34; नाम का एक स्तंभ जोड़ें, जो &#34;आय&#34; स्तंभ को उच्चतम से न्यूनतम की रैंक में रखता है.
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
