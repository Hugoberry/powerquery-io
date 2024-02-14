---
title: Table.AddRankColumn
---

# Table.AddRankColumn


Acrescenta uma coluna com a classificação de uma ou mais colunas.


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

Acrescenta uma coluna chamada <code>newColumnName</code> ao <code>table</code> com a classificação de uma ou mais colunas descritas por <code>comparisonCriteria</code>.A opção RankKind em <code>options</code> pode ser usada por usuários avançados para escolher um método de classificação mais específico.


## Examples

### Example #1 
Adicione uma coluna chamada &#34;RevenueRank&#34; à tabela que classifica a coluna &#34;Receita&#34; do mais alto para o mais baixo.
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
