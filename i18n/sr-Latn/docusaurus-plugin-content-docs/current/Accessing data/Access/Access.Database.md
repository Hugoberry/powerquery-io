---
title: Access.Database
---

# Access.Database


## Description

Vraća strukturalnu reprezentaciju Access baze podataka.


## Syntax

```powerquery
Access.Database(
    database as binary,
    optional options as record
) as table
```


## Details

Vraća strukturalnu reprezentaciju Access baze podataka, <code>database</code>. Moguće je navesti opcionalni parametar zapisa, <code>options</code>, da bi se kontrolisale sledeće opcije:    <ul><li><code>CreateNavigationProperties</code> : Logička vrednost (true/false) koja određuje da li će se generisati svojstva navigacije za vraćene vrednosti (podrazumevana vrednost je true).</li><li><code>NavigationPropertyNameGenerator</code> : Funkcija koja se koristi za pravljenje imena za svojstva navigacije.</li></ul>    Parametar zapisa se navodi kao [opcija1 = vrednost1, opcija2 = vrednost2...], na primer.



## Category
Accessing data
