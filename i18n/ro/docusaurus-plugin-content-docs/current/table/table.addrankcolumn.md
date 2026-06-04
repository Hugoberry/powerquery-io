---
title: Table.AddRankColumn
---

# Table.AddRankColumn


Adaugă o coloană cu ierarhizare a uneia sau mai multor alte coloane.


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

Adaugă o coloană cu numele `newColumnName` la `table` cu ierarhizare a uneia sau mai multor alte coloane descrise de `comparisonCriteria`. Opțiunea RankKind din `options` poate fi utilizată de utilizatorii avansați pentru a alege o metodă de ierarhizare mai specifică.


## Examples

### Example #1
Adăugați o coloană denumită „RevenueRank” la tabelul care clasifică coloana „Revenue” de la cel mai mare la cel mai mic.
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
