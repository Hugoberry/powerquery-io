---
title: Table.AddRankColumn
---

# Table.AddRankColumn


## Description

Ajoute une colonne avec le classement d’une ou plusieurs autres colonnes.


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

Ajoute une colonne nommée <code>newColumnName</code> au <code>table</code> avec le classement d’une ou plusieurs autres colonnes décrites par <code>comparisonCriteria</code>.L’option RankKind <code>options</code> peut être utilisée par les utilisateurs avancés pour choisir une méthode de classement plus spécifique.


## Examples

### Example #1 
Ajoutez une colonne nommée &#34;RevenueRank&#34; au tableau qui classe la colonne &#34;Revenu&#34; du plus élevé au plus bas.
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
