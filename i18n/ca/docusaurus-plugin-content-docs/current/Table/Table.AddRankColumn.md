---
title: Table.AddRankColumn
---

# Table.AddRankColumn


## Description

Afegeix una columna amb la classificació d&#39;una o més columnes.


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

Afegeix una columna anomenada <code>newColumnName</code> al <code>table</code> amb la classificació d'una o més columnes descrites per <code>comparisonCriteria</code>.L'opció RankKind en <code>options</code> pot ser utilitzada pels usuaris avançats per triar un mètode de classificació més específic.


## Examples

### Example #1 
Afegiu una columna anomenada &#34;RevenueRank&#34; a la taula que classifica la columna &#34;Ingressos&#34; de major a menor.
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
