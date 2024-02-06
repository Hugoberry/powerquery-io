---
title: Table.AddRankColumn
---

# Table.AddRankColumn


Dołącza kolumnę z klasyfikacją co najmniej jednej innej kolumny.


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

Dołącza kolumnę o nazwie <code>newColumnName</code> do <code>table</code> z klasyfikacją co najmniej jednej innej kolumny opisanej przez <code>comparisonCriteria</code>.Opcja RodzajKlasyfikacji w <code>options</code> może być używana przez zaawansowanych użytkowników do wybrania bardziej szczegółowej metody klasyfikacji.


## Examples

### Example #1 
Dodaj kolumnę o nazwie „KlasyfikacjaPrzychodów” do tabeli, która szereguje kolumnę „Przychody” od tej z wartością najwyższą do najniższej.
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
