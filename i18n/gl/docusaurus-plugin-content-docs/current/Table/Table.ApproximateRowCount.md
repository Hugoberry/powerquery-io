---
title: Table.ApproximateRowCount
---

# Table.ApproximateRowCount


## Description

Devolve o número aproximado de filas da táboa.


## Syntax

```powerquery
Table.ApproximateRowCount(
    table as table
) as number
```


## Details

Devolve o número aproximado de filas no <code>table</code>, ou un erro se a orixe de datos non admite a aproximación.


## Examples

### Example #1 
Estima o número de combinacións distintas de cidade e estado nunha táboa grande, que se pode usar como estimación de cardinalidade para as columnas. As estimacións de cardinalidade son o suficientemente importantes como para que varias orixes de datos (como SQL Server) admitan esta aproximación particular, a miúdo usando un algoritmo que se chama HyperLogLog.
```powerquery
Table.ApproximateRowCount(Table.Distinct(Table.SelectColumns(sqlTable, {"city", "state"})))
```

Result: 
```powerquery
number
```




## Category
Table.Information
