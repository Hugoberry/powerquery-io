---
title: Table.ApproximateRowCount
---

# Table.ApproximateRowCount


## Description

Hiermee wordt het juiste aantal rijen in de tabel geretourneerd.


## Syntax

```powerquery
Table.ApproximateRowCount(
    table as table
) as number
```


## Details

Retourneert het geschatte aantal rijen in de <code>table</code>, of een fout als de gegevensbron geen schatting ondersteunt.


## Examples

### Example #1 
Geef een schatting van het aantal unieke combinaties van plaats en staat in een grote tabel, die kan worden gebruikt als een kardinaliteitsschatting voor de kolommen. Kardinaliteitsramingen zijn belangrijk genoeg dat verschillende gegevensbronnen (zoals SQL Server) deze specifieke benadering ondersteunen, vaak met behulp van een algoritme met de naam HyperLogLog.
```powerquery
Table.ApproximateRowCount(Table.Distinct(Table.SelectColumns(sqlTable, {"city", "state"})))
```

Result: 
```powerquery
number
```




## Category
Table.Information
