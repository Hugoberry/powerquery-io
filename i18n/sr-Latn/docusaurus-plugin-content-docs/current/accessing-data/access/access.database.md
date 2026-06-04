---
title: Access.Database
---

# Access.Database


Vraća strukturalnu reprezentaciju Access baze podataka.


## Syntax

```powerquery
Access.Database(
    database as binary,
    optional options as record
) as table
```


## Remarks

Vraća strukturalnu reprezentaciju Access baze podataka, `database`. Može se navesti opciona vrednost parametra zapisa, `options`, za kontrolu sledećih opcija:

-   `CreateNavigationProperties` : Logička vrednost (true/false) koja određuje da li će se generisati svojstva navigacije za vraćene vrednosti (podrazumevana vrednost je true).
-   `NavigationPropertyNameGenerator` : Funkcija koja se koristi za pravljenje imena za svojstva navigacije.

Parametar zapisa se, na primer, navodi kao \[opcija1 = vrednost1, opcija2 = vrednost2...\],.



## Category
Accessing data
