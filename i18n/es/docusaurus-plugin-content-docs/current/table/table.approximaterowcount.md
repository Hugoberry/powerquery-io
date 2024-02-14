---
title: Table.ApproximateRowCount
---

# Table.ApproximateRowCount


Devuelve el número aproximado de filas de la tabla.


## Syntax

```powerquery
Table.ApproximateRowCount(
    table as table
) as number
```


## Remarks

Devuelve el número aproximado de filas del <code>table</code>, o un error si el origen de datos no admite la aproximación.


## Examples

### Example #1 
Calcula el número de combinaciones distintas de ciudad y estado en una tabla grande, que se puede usar como estimación de cardinalidad para las columnas. Las estimaciones de cardinalidad son lo suficientemente importantes como para que varios orígenes de datos (como SQL Server) admitan esta aproximación concreta, a menudo usando un algoritmo llamado HyperLogLog.
```powerquery
Table.ApproximateRowCount(Table.Distinct(Table.SelectColumns(sqlTable, {"city", "state"})))
```

Result: 
```powerquery
number
```




## Category
Table.Information
