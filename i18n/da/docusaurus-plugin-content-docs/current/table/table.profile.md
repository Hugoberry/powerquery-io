---
title: Table.Profile
---

# Table.Profile


Returnerer en profil for en tabels kolonner.


## Syntax

```powerquery
Table.Profile(
    table as table,
    optional additionalAggregates as list
) as table
```


## Remarks

Returnerer en profil for kolonnerne i `table`.

Følgende oplysninger returneres for hver kolonne (når relevant):

-   minimum
-   maksimum
-   gennemsnit
-   standardafvigelse
-   antal
-   null antal
-   distinkt antal



## Category
Table.Information
