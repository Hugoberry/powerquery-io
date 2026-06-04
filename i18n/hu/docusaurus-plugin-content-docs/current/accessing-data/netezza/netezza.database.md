---
title: Netezza.Database
---

# Netezza.Database


Adatok importálása egy IBM Netezza-adatbázisból.


## Syntax

```powerquery
Netezza.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Netezza-táblák, -nézetek és tárolt függvények tábláját adja vissza a Netezza-kiszolgáló `database` adatbázisából a(z) `server` kiszolgálón. Igény szerint a portot is megadhatja a kiszolgálóval együtt, kettősponttal elválasztva. A következő beállítások szabályozásához egy opcionális rekordparaméter (`options`) is megadható:

-   `CreateNavigationProperties`: Egy logikai (igaz/hamis) érték, amely megadja, hogy a rendszer létrehozzon-e navigációs tulajdonságokat a visszaadott értékekhez (az alapértelmezett beállítás a true (igaz))
-   `HierarchicalNavigation`: Egy logikai (igaz/hamis) érték, amely megadja, hogy a táblák a sémanevük alapján csoportosítva jelenjenek-e meg (az alapértelmezett érték a false (hamis))
-   `ConnectionTimeout`: Egy időtartamérték, amely azt szabályozza, hogy meddig várjon a rendszer, mielőtt felhagyna a kiszolgálóhoz való csatlakozási kísérlettel. Az alapértelmezett érték az illesztőtől függ.
-   `CommandTimeout`: Egy időtartamérték, amely azt szabályozza, hogy mennyi ideig futhat egy kiszolgálóoldali lekérdezés, mielőtt a rendszer megszakítaná. Az alapértelmezett érték az illesztőtől függ.
-   `NormalizeDatabaseName`: Egy logikai (igaz/hamis) érték, amely azt adja meg, hogy a rendszer normalizálja-e nagybetűsre az adatbázis nevét, vagy szó szerint értelmezze (az alapértelmezett a true (igaz)).

A rekordparaméter a következőképpen határozható meg: \[option1 = value1, option2 = value2...\].


## Examples

### Example #1
Egy IBM Netezza-projektben található táblák felsorolása.
```powerquery
Netezza.Database("netezza:5480", "netezza_database")
```



