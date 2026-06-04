---
title: Table.AddRankColumn
---

# Table.AddRankColumn


Liittää sarakkeen, jossa on yhden tai useamman muun sarakkeen luokitus.


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

Liittää `newColumnName`\-nimisen sarakkeen `table``comparisonCriteria`kuvailemalla yhden tai useamman muun sarakkeen sijoituksella. edistyneet käyttäjät voivat käyttää `options` RankKind-vaihtoehtoa tarkemman luokitusmenetelmän valitsemiseen.


## Examples

### Example #1
Lisää taulukkoon sarake nimeltä "RevenueRank", joka sijoittaa Tuotto-sarakkeen suurimmasta pienimpään.
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
