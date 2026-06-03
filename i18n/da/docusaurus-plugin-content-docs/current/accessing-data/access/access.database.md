---
title: Access.Database
---

# Access.Database


Returnerer en strukturel repræsentation af en Access-database.


## Syntax

```powerquery
Access.Database(
    database as binary,
    optional options as record
) as table
```


## Remarks

Returnerer en strukturel repræsentation af en Access-database, `database`. En valgfri parameter for post, `options`, kan være angivet for at kontrollere følgende indstillinger:

-   `CreateNavigationProperties` : En logisk værdi (true/false), der angiver, om der skal genereres navigationsegenskaber på de returnerede værdier (standard er false).
-   `NavigationPropertyNameGenerator` : En funktion, der anvendes til at oprette navne til navigationsegenskaber.

Postparameteren angives f.eks. som \[option1 = value1, option2 = value2...\].



## Category
Accessing data
