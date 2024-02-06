---
title: Table.ApproximateRowCount
---

# Table.ApproximateRowCount


Returnerar det ungefärliga antalet rader i tabellen.


## Syntax

```powerquery
Table.ApproximateRowCount(
    table as table
) as number
```


## Remarks

Returnerar det ungefärliga antalet rader i <code>table</code>, eller ett fel om datakällan inte stöder uppskattning.


## Examples

### Example #1 
Uppskatta antalet distinkta kombinationer av ort och delstat i en stor tabell, som kan användas som kardinalitetsuppskattning för kolumnerna. Kardinalitetsuppskattningar är tillräckligt viktiga för att olika datakällor (till exempel SQL Server) ska ha stöd för just den här uppskattningen, ofta med hjälp av en algoritm som kallas HyperLogLog.
```powerquery
Table.ApproximateRowCount(Table.Distinct(Table.SelectColumns(sqlTable, {"city", "state"})))
```

Result: 
```powerquery
number
```




## Category
Table.Information
