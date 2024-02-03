---
title: Table.AddRankColumn
---

# Table.AddRankColumn


## Description

Pridedamas stulpelis su vieno ar daugiau kitų stulpelių reitingu.


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

Pridedamas stulpelis pavadinimu <code>newColumnName</code> prie <code>table</code> su vieno ar kelių <code>comparisonCriteria</code> aprašytų stulpelių reitingu.Parinktį RankKind <code>options</code> gali naudoti pažengę vartotojai, norėdami pasirinkti konkretesnį reitingavimo metodą.


## Examples

### Example #1 
Įtraukite stulpelį pavadinimu „RevenueRank“ į lentelę, kurioje stulpelis „Pajamos“ reitinguojamas nuo aukščiausios iki žemiausio.
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
