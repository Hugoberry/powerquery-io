---
title: Table.AddRankColumn
---

# Table.AddRankColumn


Anexa uma coluna com a classificação de uma ou mais colunas.


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

Anexa uma coluna com o nome `newColumnName` a `table` com a classificação de uma ou mais colunas descritas por `comparisonCriteria`. A opção RankKind no `options` pode ser usada por utilizadores avançados para escolher um método de classificação mais específico.


## Examples

### Example #1
Adicione uma coluna com o nome "RevenueRank" à tabela que classifica a coluna "Receita" por ordem decrescente.
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
