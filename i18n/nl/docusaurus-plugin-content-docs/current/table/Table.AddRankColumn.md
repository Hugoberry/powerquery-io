---
title: Table.AddRankColumn
---

# Table.AddRankColumn


Hiermee voegt u een kolom toe met de rangschikking van een of meer andere kolommen.


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

Hiermee voegt u een kolom met de naam <code>newColumnName</code> toe aan de <code>table</code> met de rangschikking van een of meer andere kolommen die worden beschreven door <code>comparisonCriteria</code>.De optie RankKind in <code>options</code> kan gebruikt worden door geavanceerde gebruikers om een specifiekere classificatiemethode te kiezen.


## Examples

### Example #1 
Een kolom met de naam &#39;OmzetRang&#39; toevoegen aan de tabel die de kolom &#39;Omzet&#39; van hoog naar laag rangschikt.
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
