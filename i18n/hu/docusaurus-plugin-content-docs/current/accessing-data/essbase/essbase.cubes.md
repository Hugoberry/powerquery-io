---
title: Essbase.Cubes
---

# Essbase.Cubes


Az Essbase-példányokban lévő kockákat adja vissza az Essbase-kiszolgáló által csoportosítva.


## Syntax

```powerquery
Essbase.Cubes(
    url as text,
    optional options as record
) as table
```


## Remarks

Az Essbase-kiszolgáló által csoportosított kockák tábláját adja vissza egy, a(z) `url` APS-kiszolgálón futó Essbase-példányból. A(z) `options` választható rekordparaméter megadásával szabályozhatja az alábbi beállításokat:

-   `CommandTimeout` : Egy időtartam, amely azt vezérli, hogy a kiszolgálóoldali lekérdezés mennyi ideig futhat, mielőtt megszakadna. Az alapértelmezett érték tíz perc.



## Category
Accessing data
