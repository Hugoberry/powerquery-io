---
title: Table.ApproximateRowCount
---

# Table.ApproximateRowCount


## Description

Daje približan broj redova u tabeli.


## Syntax

```powerquery
Table.ApproximateRowCount(
    table as table
) as number
```


## Details

Vraća približan broj redova u tabeli <code>table</code> ili grešku ako izvor podataka ne podržava aproksimaciju.


## Examples

### Example #1 
Procenite broj različitih kombinacija grada i države u velikoj tabeli, što može da se koristi kao procena kardinalnosti za kolone. Procene kardinalnosti su dovoljno važne da različiti izvori podataka (na primer SQL Server) podržavaju ovu određenu aproksimaciju, često pomoću algoritma koji se zove HyperLogLog.
```powerquery
Table.ApproximateRowCount(Table.Distinct(Table.SelectColumns(sqlTable, {"city", "state"})))
```

Result: 
```powerquery
number
```




## Category
Table.Information
