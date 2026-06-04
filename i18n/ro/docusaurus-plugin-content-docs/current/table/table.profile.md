---
title: Table.Profile
---

# Table.Profile


Returnează un profil al coloanelor unui tabel.


## Syntax

```powerquery
Table.Profile(
    table as table,
    optional additionalAggregates as list
) as table
```


## Remarks

Returnează un profil pentru coloanele din `table`.

Sunt returnate următoarele informații pentru fiecare coloană (când este cazul):

-   minim
-   maxim
-   medie
-   deviație standard
-   contor
-   contor nule
-   număr distinct



## Category
Table.Information
