---
title: Table.ApproximateRowCount
---

# Table.ApproximateRowCount


## Description

Возвращает приблизительное количество строк в таблице.


## Syntax

```powerquery
Table.ApproximateRowCount(
    table as table
) as number
```


## Details

Возвращает приблизительное количество строк в <code>table</code> или ошибку, если источник данных не поддерживает приблизительное значение.


## Examples

### Example #1 
Оценка количества различных комбинаций города и области в большой таблице, которую можно использовать в качестве оценки кратности для столбцов. Оценки кратности достаточно важны, и различные источники данных (например, SQL Server) поддерживают это приблизительное значение, часто используя алгоритм HyperLogLog.
```powerquery
Table.ApproximateRowCount(Table.Distinct(Table.SelectColumns(sqlTable, {"city", "state"})))
```

Result: 
```powerquery
number
```




## Category
Table.Information
