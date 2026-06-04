---
title: MySQL.Database
---

# MySQL.Database


Egy MySQL-adatbázisban elérhető SQL-táblák és -nézetek, valamint tárolt skaláris függvények tábláját adja vissza.


## Syntax

```powerquery
MySQL.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

A(z) `server` nevű adatbázispéldányban, a(z) `database` kiszolgálón lévő MySQL-adatbázisban elérhető SQL-táblák, nézetek és tárolt skaláris függvények tábláját adja vissza. A portot megadhatja a kiszolgálóval együtt, kettősponttal elválasztva. Egy opcionális rekordparaméterrel (`options`) meghatározhatja a következő beállításokat:

-   `Encoding` : Egy TextEncoding érték, amely a kiszolgálóra küldött összes lekérdezés kódolásához használt karakterkészletet határozza meg (az alapértelmezett értéke null).
-   `CreateNavigationProperties` : Logikai (igaz/hamis) érték, amely megadja, hogy a visszaadott értékekhez létrejöjjenek-e navigációs tulajdonságok (az alapértelmezett érték a true (igaz)).
-   `NavigationPropertyNameGenerator` : A navigációs tulajdonságok nevének létrehozására használható függvény.
-   `Query` : Adatok lekérésére használt natív SQL-lekérdezés. Ha a lekérdezés több találathalmazt is eredményez, a rendszer csak az elsőt adja vissza.
-   `CommandTimeout` : Egy időtartam, amely azt vezérli, hogy a kiszolgálóoldali lekérdezés mennyi ideig futhat, mielőtt megszakadna. Az alapértelmezett érték tíz perc.
-   `ConnectionTimeout` : Egy időtartam, amely azt vezérli, hogy a rendszer mennyi ideig várjon, mielőtt feladja a kiszolgálóhoz való csatlakozási kísérletet. Az alapértelmezett érték az illesztőtől függ.
-   `TreatTinyAsBoolean` : Logikai (igaz/hamis) érték, amely meghatározza, hogy logikai értékekként kényszeríti-e a tinyint-oszlopokat. Az alapértelmezett érték az igaz.
-   `OldGuids` : Logikai (igaz/hamis) érték, amely beállítja, hogy a char(36)-oszlopokat (ha hamis) vagy a binary(16)-oszlopokat (ha igaz) kezelje-e GUID-ként a rendszer. Az alapértelmezett érték a hamis.
-   `ReturnSingleDatabase` : Logikai (igaz/hamis) érték, amely beállítja, hogy a rendszer az összes adatbázis összes tábláját adja vissza (ha hamis), vagy a megadott adatbázis tábláit és nézeteit adja vissza (ha igaz). Az alapértelmezett érték a hamis.
-   `HierarchicalNavigation` : Logikai (igaz/hamis) érték, amely megadja, hogy a táblák a sémanevek szerint csoportosítva jelenjenek-e meg (az alapértelmezett érték a false (hamis)).

A rekordparaméter meghatározása lehet például \[option1 = value1, option2 = value2…\] vagy \[Query = "select ..."\].



## Category
Accessing data
