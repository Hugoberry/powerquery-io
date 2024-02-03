---
title: Table.ApproximateRowCount
---

# Table.ApproximateRowCount


## Description

Returnerer det omtrentlige antal af rækker i tabellen.


## Syntax

```powerquery
Table.ApproximateRowCount(
    table as table
) as number
```


## Details

Returnerer det omtrentlige antal rækker i <code>table</code>, eller en fejl, hvis datakilden ikke understøtter tilnærmelsen.


## Examples

### Example #1 
Estimer antallet af forskellige kombinationer af by og stat i en stor tabel, som kan bruges som et kardinalitetsestimat for kolonnerne. Kardinalitetsestimater er vigtige nok til, at forskellige datakilder (såsom SQL Server) understøtter denne særlige tilnærmelse, ofte ved hjælp af en algoritme kaldet HyperLogLog.
```powerquery
Table.ApproximateRowCount(Table.Distinct(Table.SelectColumns(sqlTable, {"city", "state"})))
```

Result: 
```powerquery
number
```




## Category
Table.Information
