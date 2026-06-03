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

Gibt ein Profil der Spalten in `table` zurück.

Für jede Spalte werden die folgenden Informationen zurückgegeben (sofern zutreffend):

-   Minimum
-   Maximum
-   Durchschnitt
-   Standardabweichung
-   Anzahl
-   NULL-Anzahl
-   Diskrete Anzahl



## Category
Table.Information
