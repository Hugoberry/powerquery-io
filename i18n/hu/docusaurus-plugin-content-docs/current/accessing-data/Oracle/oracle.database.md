---
title: Oracle.Database
---

# Oracle.Database


Az Oracle-adatbázisban elérhető SQL-táblák és -nézetek tábláját adja vissza.


## Syntax

```powerquery
Oracle.Database(
    server as text,
    optional options as record
) as table
```


## Remarks

A(z) `server` kiszolgálón lévő Oracle-adatbázisból származó SQL-táblák és nézetek tábláját adja vissza. A portot megadhatja a kiszolgálóval együtt, kettősponttal elválasztva. Egy opcionális rekordparaméterrel (`options`) meghatározhatja a következő beállításokat:

-   `CreateNavigationProperties` : Logikai (igaz/hamis) érték, amely megadja, hogy a visszaadott értékekhez létrejöjjenek-e navigációs tulajdonságok (az alapértelmezett érték a true (igaz)).
-   `NavigationPropertyNameGenerator` : A navigációs tulajdonságok nevének létrehozására használható függvény.
-   `Query` : Adatok lekérésére használt natív SQL-lekérdezés. Ha a lekérdezés több találathalmazt is eredményez, a rendszer csak az elsőt adja vissza.
-   `CommandTimeout` : Egy időtartam, amely azt vezérli, hogy a kiszolgálóoldali lekérdezés mennyi ideig futhat, mielőtt megszakadna. Az alapértelmezett érték tíz perc.
-   `ConnectionTimeout` : Egy időtartam, amely azt vezérli, hogy a rendszer mennyi ideig várjon, mielőtt feladja a kiszolgálóhoz való csatlakozási kísérletet. Az alapértelmezett érték az illesztőtől függ.
-   `HierarchicalNavigation` : Logikai (igaz/hamis) érték, amely megadja, hogy a táblák a sémanevek szerint csoportosítva jelenjenek-e meg (az alapértelmezett érték a false (hamis)).

A rekordparaméter meghatározása lehet például \[option1 = value1, option2 = value2…\] vagy \[Query = "select ..."\].



## Category
Accessing data
