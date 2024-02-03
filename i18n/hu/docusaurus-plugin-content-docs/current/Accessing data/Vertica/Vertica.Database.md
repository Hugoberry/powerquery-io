---
title: Vertica.Database
---

# Vertica.Database


## Description

Adatok importálása a Verticából


## Syntax

```powerquery
Vertica.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Details

A <code>database</code> paraméter által megnevezett adatbázisban található <code>server</code> paraméter által megnevezett kiszolgálón elérhető sémák tábláját adja vissza.Egy opcionális rekordparaméter, az <code>options</code> is megadható további tulajdonságok meghatározásához. A rekord a következő mezőket tartalmazhatja:<ul>    <li><code>ConnectionTimeout</code>: Az időtartam, amennyit a rendszer vár, mielőtt felhagyna a kiszolgálóhoz való csatlakozásra tett kísérletekkel. Az alapértelmezett érték illesztőtől függ.</li>    <li><code>CommandTimeout </code>: Az időtartam, ameddig a kiszolgálóoldali lekérdezés futhat, mielőtt a rendszer megszakítaná. Az alapértelmezett érték illesztőtől függ.</li></ul>


## Examples

### Example #1 
A Verticában található táblák listája
```powerquery

```



