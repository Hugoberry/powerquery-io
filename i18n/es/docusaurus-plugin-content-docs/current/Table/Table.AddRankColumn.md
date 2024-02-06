---
title: Table.AddRankColumn
---

# Table.AddRankColumn


Anexa una columna con la clasificación de una o más columnas.


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

Anexa una columna denominada <code>newColumnName</code> al <code>table</code> con la clasificación de una o más columnas descrita por <code>comparisonCriteria</code>.Los usuarios avanzados pueden usar la opción RankKind de <code>options</code> para elegir un método de clasificación más específico.


## Examples

### Example #1 
Agregar una columna denominada &#34;RevenueRank&#34; a la tabla que clasifica la columna &#34;Ingresos&#34; de mayor a menor.
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
