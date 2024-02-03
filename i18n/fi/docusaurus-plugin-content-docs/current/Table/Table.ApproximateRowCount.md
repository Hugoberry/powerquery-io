---
title: Table.ApproximateRowCount
---

# Table.ApproximateRowCount


## Description

Palauttaa taulukon arvioidun rivien määrän.


## Syntax

```powerquery
Table.ApproximateRowCount(
    table as table
) as number
```


## Details

Palauttaa <code>table</code> rivien arvioidun määrän tai virheen, jos tietolähde ei tue arviota.


## Examples

### Example #1 
Arvioi suuren taulukon erillisten kaupungin ja osavaltion yhdistelmien määrä, jota voidaan käyttää sarakkeiden kardinaliteettiarviona. Kardinaliteettiarviot ovat niin tärkeitä, että eri tietolähteet (kuten SQL Server) tukevat tätä tiettyä arviota ja käyttävät usein HyperLogLog-nimistä algoritmia.
```powerquery
Table.ApproximateRowCount(Table.Distinct(Table.SelectColumns(sqlTable, {"city", "state"})))
```

Result: 
```powerquery
number
```




## Category
Table.Information
