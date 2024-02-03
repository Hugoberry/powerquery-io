---
title: Table.ApproximateRowCount
---

# Table.ApproximateRowCount


## Description

Tiek atgriezts aptuvenais rindu skaits tabulā.


## Syntax

```powerquery
Table.ApproximateRowCount(
    table as table
) as number
```


## Details

Atgriež aptuveno rindu skaitu kolonnā<code>table</code> vai kļūdu, ja datu avots neatbalsta aptuveno skaitu.


## Examples

### Example #1 
Novērtējiet lielas tabulas atšķirīgo pilsētas un novada kombināciju skaitu, ko var izmantot kolonnu kardinalitātes novērtējumam. Kardinalitātes novērtējumi ir pietiekami svarīgi, lai dažādi datu avoti (piemēram, SQL Server) atbalsta šo konkrēto attēlojumu, bieži izmantojot algoritmu HyperLogLog.
```powerquery
Table.ApproximateRowCount(Table.Distinct(Table.SelectColumns(sqlTable, {"city", "state"})))
```

Result: 
```powerquery
number
```




## Category
Table.Information
