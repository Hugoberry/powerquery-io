---
title: Table.Profile
---

# Table.Profile


Vrne profil stolpcev tabele.


## Syntax

```powerquery
Table.Profile(
    table as table,
    optional additionalAggregates as list
) as table
```


## Remarks

Vrne profil za stolpce v `table`.

Za vsak stolpec (kadar je na voljo) so vrnjene te informacije:

-   minimalno
-   maksimalno
-   povprečno
-   standardni odklon
-   število
-   štetje vrednosti null
-   razlikovalno štetje



## Category
Table.Information
