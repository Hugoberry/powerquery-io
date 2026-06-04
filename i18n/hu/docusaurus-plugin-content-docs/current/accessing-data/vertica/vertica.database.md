---
title: Vertica.Database
---

# Vertica.Database


Adatok importálása a Verticából


## Syntax

```powerquery
Vertica.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

A `database` paraméter által megnevezett adatbázisban található `server` paraméter által megnevezett kiszolgálón elérhető sémák tábláját adja vissza. Egy opcionális rekordparaméter, az `options` is megadható további tulajdonságok meghatározásához. A rekord a következő mezőket tartalmazhatja:

-   `ConnectionTimeout`: Az időtartam, amennyit a rendszer vár, mielőtt felhagyna a kiszolgálóhoz való csatlakozásra tett kísérletekkel. Az alapértelmezett érték illesztőtől függ.
-   `CommandTimeout` : Az időtartam, ameddig a kiszolgálóoldali lekérdezés futhat, mielőtt a rendszer megszakítaná. Az alapértelmezett érték illesztőtől függ.


## Examples

### Example #1
A Verticában található táblák listája
```powerquery

```



