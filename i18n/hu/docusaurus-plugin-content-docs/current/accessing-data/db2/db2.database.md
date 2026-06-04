---
title: DB2.Database
---

# DB2.Database


A Db2-adatbázisban elérhető SQL-táblák és nézetek tábláját adja vissza.


## Syntax

```powerquery
DB2.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

A(z) `server` nevű adatbázispéldányban, `database` kiszolgálón lévő Db2-adatbázisban elérhető SQL-táblák és nézetek tábláját adja vissza. A portot megadhatja a kiszolgálóval együtt, kettősponttal elválasztva. Egy opcionális rekordparaméterrel (`options`) meghatározhatja a következő beállításokat:

-   `CreateNavigationProperties` : Logikai (igaz/hamis) érték, amely megadja, hogy a visszaadott értékekhez létrejöjjenek-e navigációs tulajdonságok (az alapértelmezett érték a true (igaz)).
-   `NavigationPropertyNameGenerator` : A navigációs tulajdonságok nevének létrehozására használható függvény.
-   `Query` : Adatok lekérésére használt natív SQL-lekérdezés. Ha a lekérdezés több találathalmazt is eredményez, a rendszer csak az elsőt adja vissza.
-   `CommandTimeout` : Egy időtartam, amely azt vezérli, hogy a kiszolgálóoldali lekérdezés mennyi ideig futhat, mielőtt megszakadna. Az alapértelmezett érték tíz perc.
-   `ConnectionTimeout` : Egy időtartam, amely azt vezérli, hogy a rendszer mennyi ideig várjon, mielőtt feladja a kiszolgálóhoz való csatlakozási kísérletet. Az alapértelmezett érték az illesztőtől függ.
-   `HierarchicalNavigation` : Logikai (igaz/hamis) érték, amely megadja, hogy a táblák a sémanevek szerint csoportosítva jelenjenek-e meg (az alapértelmezett érték a false (hamis)).
-   `Implementation` : Megadja a használni kívánt belső adatbázisszolgáltatói implementációt. Az érvényes értékek az IBM és a Microsoft.
-   `BinaryCodePage` : Olyan szám, amely a CCSID (Coded Character Set Identifier) alapján DB2 FOR BIT bináris adatokat karakterláncokra dekódol. Akkor használható, ha az implementáció értéke „Microsoft”. 0-ra állítva kikapcsolhatja az átalakítást (ez az alapértelmezett beállítás). 1 értékre állítva adatbázis-kódolás alapján történik az átalakítás. Más CCSID-számra állítva a rendszer alkalmazáskódolásra alakít át.
-   `PackageCollection` : Meghatároz egy sztringértéket a csomagok gyűjtéséhez (alapértelmezett érték: NULLID), amely lehetővé teszi az SQL-utasítások feldolgozásához szükséges megosztott csomagok használatát. Microsoft értékű implementáció esetén érvényes.
-   `UseDb2ConnectGateway` : Meghatározza, hogy a kapcsolat egy DB2 Connect-átjárón keresztül történjen-e. A Microsoft implementációra vonatkozik.

A rekordparaméter meghatározása lehet például \[option1 = value1, option2 = value2…\] vagy \[Query = "select ..."\].



## Category
Accessing data
