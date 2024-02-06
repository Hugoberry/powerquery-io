---
title: Table.Profile
---

# Table.Profile


Gibt ein Profil der Spalten einer Tabelle zurück.


## Syntax

```powerquery
Table.Profile(
    table as table,
    optional additionalAggregates as list
) as table
```


## Remarks

Gibt ein Profil der Spalten in <code>table</code> zurück.<br />Für jede Spalte werden die folgenden Informationen zurückgegeben (sofern zutreffend):<ul>  <li>Minimum</li>  <li>Maximum</li>  <li>Durchschnitt</li>  <li>Standardabweichung</li>  <li>Anzahl</li>  <li>NULL-Anzahl</li>  <li>Diskrete Anzahl</li></ul><br />



## Category
Table.Information
