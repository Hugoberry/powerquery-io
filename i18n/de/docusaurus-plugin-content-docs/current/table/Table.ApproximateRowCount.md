---
title: Table.ApproximateRowCount
---

# Table.ApproximateRowCount


Gibt die ungefähre Anzahl der Zeilen in der Tabelle zurück.


## Syntax

```powerquery
Table.ApproximateRowCount(
    table as table
) as number
```


## Remarks

Gibt die ungefähre Anzahl von Zeilen im <code>table</code> zurück, oder einen Fehler, wenn die Datenquelle keine Näherung unterstützt.


## Examples

### Example #1 
Schätzen Sie die Anzahl unterschiedlicher Kombinationen aus Stadt und Bundesland in einer großen Tabelle, die als Kardinalitätsschätzung für die Spalten verwendet werden kann. Kardinalitätsschätzungen sind wichtig genug, sodass verschiedene Datenquellen (z. B. SQL Server) diese spezifische Näherung unterstützen und häufig einen Algorithmus namens HyperLogLog verwenden.
```powerquery
Table.ApproximateRowCount(Table.Distinct(Table.SelectColumns(sqlTable, {"city", "state"})))
```

Result: 
```powerquery
number
```




## Category
Table.Information
