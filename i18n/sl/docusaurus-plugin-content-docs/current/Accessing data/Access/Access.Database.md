---
title: Access.Database
---

# Access.Database


## Description

Vrne strukturno predstavitev zbirke podatkov programa Access.


## Syntax

```powerquery
Access.Database(
    database as binary,
    optional options as record
) as table
```


## Details

Vrne strukturno predstavitev Accessove zbirke podatkov <code>database</code>. Navedete lahko izbirni parameter zapisa <code>options</code>, s katerim nadzorujete te možnosti:    <ul><li><code>CreateNavigationProperties</code> : Logična vrednost (true/false), ki določa, ali je treba za vrnjene vrednosti ustvariti lastnosti krmarjenja (privzeta vrednost je &#187;false&#171;).</li><li><code>NavigationPropertyNameGenerator</code> : Funkcija, ki se uporablja za ustvarjanje imen lastnosti krmarjenja.</li></ul>    Parameter zapisa je na primer naveden kot [možnost1 = vrednost1, možnost2 = vrednost2 ...].



## Category
Accessing data
