---
title: Table.ApproximateRowCount
---

# Table.ApproximateRowCount


## Description

Retourne le nombre approximatif de lignes dans le tableau.


## Syntax

```powerquery
Table.ApproximateRowCount(
    table as table
) as number
```


## Details

Retourne le nombre approximatif de lignes dans le <code>table</code>, ou une erreur si la source de données ne prend pas en charge l’approximation.


## Examples

### Example #1 
Estimez le nombre de combinaisons distinctes de ville et d&#39;état dans une grande table, ce qui peut être utilisé comme une estimation de cardinalité pour les colonnes. Les estimations de cardinalité sont suffisamment importantes pour que diverses sources de données (telles que SQL Server) prennent en charge cette approximation particulière, souvent à l&#39;aide d&#39;un algorithme appelé HyperLogLog.
```powerquery
Table.ApproximateRowCount(Table.Distinct(Table.SelectColumns(sqlTable, {"city", "state"})))
```

Result: 
```powerquery
number
```




## Category
Table.Information
