---
title: Netezza.Database
---

# Netezza.Database


## Description

Adatok importálása egy IBM Netezza-adatbázisból.


## Syntax

```powerquery
Netezza.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Details

Netezza-táblák, -nézetek és tárolt függvények tábláját adja vissza a Netezza-kiszolgáló <code>database</code> adatbázisából a(z) <code>server</code> kiszolgálón. Igény szerint a portot is megadhatja a kiszolgálóval együtt, kettősponttal elválasztva. A következő beállítások szabályozásához egy opcionális rekordparaméter (<code>options</code>) is megadható:<ul>        <li><code>CreateNavigationProperties</code>: Egy logikai (igaz/hamis) érték, amely megadja, hogy a rendszer létrehozzon-e navigációs tulajdonságokat a visszaadott értékekhez (az alapértelmezett beállítás a true (igaz))</li>        <li><code>HierarchicalNavigation</code>: Egy logikai (igaz/hamis) érték, amely megadja, hogy a táblák a sémanevük alapján csoportosítva jelenjenek-e meg (az alapértelmezett érték a false (hamis))</li>        <li><code>ConnectionTimeout</code>: Egy időtartamérték, amely azt szabályozza, hogy meddig várjon a rendszer, mielőtt felhagyna a kiszolgálóhoz való csatlakozási kísérlettel. Az alapértelmezett érték az illesztőtől függ.</li>        <li><code>CommandTimeout</code>: Egy időtartamérték, amely azt szabályozza, hogy mennyi ideig futhat egy kiszolgálóoldali lekérdezés, mielőtt a rendszer megszakítaná. Az alapértelmezett érték az illesztőtől függ.</li><li><code>NormalizeDatabaseName</code>: Egy logikai (igaz/hamis) érték, amely azt adja meg, hogy a rendszer normalizálja-e nagybetűsre az adatbázis nevét, vagy szó szerint értelmezze (az alapértelmezett a true (igaz)).</li></ul>A rekordparaméter a következőképpen határozható meg: [option1 = value1, option2 = value2...].


## Examples

### Example #1 
Egy IBM Netezza-projektben található táblák felsorolása.
```powerquery
Netezza.Database("netezza:5480", "netezza_database")
```



