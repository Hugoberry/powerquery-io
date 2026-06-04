---
title: Table.Profile
---

# Table.Profile


Vráti profil stĺpcov tabuľky.


## Syntax

```powerquery
Table.Profile(
    table as table,
    optional additionalAggregates as list
) as table
```


## Remarks

Vráti profil pre stĺpce v tabuľke `table`.

Pre každý stĺpec sa vrátia nasledujúce informácie (podľa vhodnosti):

-   minimum
-   maximum
-   priemer
-   štandardná odchýlka
-   počet
-   počet hodnôt typu null
-   počet jedinečných hodnôt



## Category
Table.Information
