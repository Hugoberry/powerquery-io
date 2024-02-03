---
title: Table.ApproximateRowCount
---

# Table.ApproximateRowCount


## Description

Retorna o número de linhas aproximado na tabela.


## Syntax

```powerquery
Table.ApproximateRowCount(
    table as table
) as number
```


## Details

Retorna o número aproximado de linhas no <code>table</code>ou um erro se a fonte de dados não dá suporte à aproximação.


## Examples

### Example #1 
Estime o número de combinações distintas de cidade e estado em uma tabela grande, que pode ser usada como uma estimativa de cardinalidade para as colunas. Estimativas de cardinalidade são importantes o suficiente para que várias fontes de dados (como SQL Server) dão suporte a essa aproximação específica, geralmente usando um algoritmo chamado HyperLogLog.
```powerquery
Table.ApproximateRowCount(Table.Distinct(Table.SelectColumns(sqlTable, {"city", "state"})))
```

Result: 
```powerquery
number
```




## Category
Table.Information
