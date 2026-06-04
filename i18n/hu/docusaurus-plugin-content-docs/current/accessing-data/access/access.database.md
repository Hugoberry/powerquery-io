---
title: Access.Database
---

# Access.Database


Az Access-adatbázisok szerkezeti ábrázolását adja vissza.


## Syntax

```powerquery
Access.Database(
    database as binary,
    optional options as record
) as table
```


## Remarks

Visszaadja egy Access-adatbázis (`database`) szerkezeti ábrázolását. Egy opcionális rekordparaméterrel (`options`) meghatározhatja a következő beállításokat:

-   `CreateNavigationProperties` : Logikai (igaz/hamis) érték, amely megadja, hogy a visszaadott értékekhez létrejöjjenek-e navigációs tulajdonságok (az alapértelmezett érték a false, azaz hamis).
-   `NavigationPropertyNameGenerator` : A navigációs tulajdonságok nevének létrehozására használható függvény.

A rekordparaméter például a következők szerint adható meg: \[lehetőség1 = érték1, lehetőség2 = érték2...\].



## Category
Accessing data
