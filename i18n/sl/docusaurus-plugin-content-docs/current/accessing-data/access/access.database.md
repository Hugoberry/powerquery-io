---
title: Access.Database
---

# Access.Database


Vrne strukturno predstavitev zbirke podatkov programa Access.


## Syntax

```powerquery
Access.Database(
    database as binary,
    optional options as record
) as table
```


## Remarks

Vrne strukturno predstavitev Accessove zbirke podatkov `database`. Navedete lahko izbirni parameter zapisa `options`, s katerim nadzorujete te možnosti:

-   `CreateNavigationProperties` : Logična vrednost (true/false), ki določa, ali je treba za vrnjene vrednosti ustvariti lastnosti krmarjenja (privzeta vrednost je"false").
-   `NavigationPropertyNameGenerator` : Funkcija, ki se uporablja za ustvarjanje imen lastnosti krmarjenja.

Parameter zapisa je na primer naveden kot \[možnost1 = vrednost1, možnost2 = vrednost2...\].



## Category
Accessing data
