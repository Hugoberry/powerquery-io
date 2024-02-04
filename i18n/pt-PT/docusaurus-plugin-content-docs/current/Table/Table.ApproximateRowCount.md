---
title: Table.ApproximateRowCount
---

# Table.ApproximateRowCount


## Description

Devolve o número aproximado de linhas na tabela.


## Syntax

```powerquery
Table.ApproximateRowCount(
    table as table
) as number
```


## Details

Devolve o número aproximado de linhas no <code>table</code> ou um erro se a origem de dados não suportar aproximação.


## Examples

### Example #1 
Estime o número de combinações distintas de cidade e estado numa tabela grande, que pode ser utilizada como uma estimativa de cardinalidade para as colunas. As estimativas de cardinalidade são suficientemente importantes para que várias origens de dados (como o SQL Server) suportem esta aproximação específica, muitas vezes através de um algoritmo denominado HyperLogLog.
```powerquery
Table.ApproximateRowCount(Table.Distinct(Table.SelectColumns(sqlTable, {"city", "state"})))
```

Result: 
```powerquery
number
```




## Category
Table.Information
