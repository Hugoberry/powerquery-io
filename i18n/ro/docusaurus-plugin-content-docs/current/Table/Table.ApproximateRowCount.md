---
title: Table.ApproximateRowCount
---

# Table.ApproximateRowCount


## Description

Returnează numărul aproximativ de rânduri din tabel.


## Syntax

```powerquery
Table.ApproximateRowCount(
    table as table
) as number
```


## Details

Returnează numărul aproximativ de rânduri în <code>table</code>sau o eroare dacă sursa de date nu acceptă aproximarea.


## Examples

### Example #1 
Estimează numărul de combinații distincte între localitate și stat într-un tabel mare, care poate fi utilizat ca estimare de cardinalitate pentru coloane. Estimările de cardinalitate sunt suficient de importante pentru ca diverse surse de date (cum ar fi SQL Server) acceptă această aproximare anume, utilizând adesea un algoritm numit HyperLogLog.
```powerquery
Table.ApproximateRowCount(Table.Distinct(Table.SelectColumns(sqlTable, {"city", "state"})))
```

Result: 
```powerquery
number
```




## Category
Table.Information
