---
title: Sql.Databases
---

# Sql.Databases


Egy SQL Server-kiszolgálón levő adatbázisokat tartalmazó táblát ad vissza.


## Syntax

```powerquery
Sql.Databases(
    server as text,
    optional options as record
) as table
```


## Remarks

Az adott SQL Server kiszolgálón (`server`) található adatbázisok tábláját adja vissza. Egy opcionális rekordparaméterrel (`options`) meghatározhatja a következő beállításokat:

-   `CreateNavigationProperties` : Logikai (igaz/hamis) érték, amely megadja, hogy a visszaadott értékekhez létrejöjjenek-e navigációs tulajdonságok (az alapértelmezett érték a true (igaz)).
-   `NavigationPropertyNameGenerator` : A navigációs tulajdonságok nevének létrehozására használható függvény.
-   `MaxDegreeOfParallelism` : A létrehozott SQL-lekérdezésben található maxdop lekérdezési záradék értékét meghatározó szám.
-   `CommandTimeout` : Egy időtartam, amely azt vezérli, hogy a kiszolgálóoldali lekérdezés mennyi ideig futhat, mielőtt megszakadna. Az alapértelmezett érték tíz perc.
-   `ConnectionTimeout` : Egy időtartam, amely azt vezérli, hogy a rendszer mennyi ideig várjon, mielőtt feladja a kiszolgálóhoz való csatlakozási kísérletet. Az alapértelmezett érték az illesztőtől függ.
-   `HierarchicalNavigation` : Logikai (igaz/hamis) érték, amely megadja, hogy a táblák a sémanevek szerint csoportosítva jelenjenek-e meg (az alapértelmezett érték a false (hamis)).
-   `MultiSubnetFailover` : Egy logikai (igaz/hamis) érték, amely meghatározza a „MultiSubnetFailover” tulajdonság értékét a kapcsolati sztringben (az alapértelmezett érték a hamis).
-   `UnsafeTypeConversions` : Logikai (igaz/hamis) érték. Ha Igaz, akkor a rendszer megkísérli átadni a típuskonverziókat, ami sikertelen lehet, és a teljes lekérdezés meghiúsulását okozhatja. Általános használatra nem javasolt.
-   `ContextInfo` : Az egyes parancsok futtatása előtt a CONTEXT\_INFO beállításához használt bináris érték.
-   `OmitSRID` : Logikai (igaz/hamis) érték. Ha Igaz, akkor a rendszer kihagyja az SRID azonosítót Well-Known Text formátumú szöveg geometriai vagy földrajzi típusokból való előállításakor.
-   `EnableCrossDatabaseFolding` : Logikai (igaz/hamis) érték, amely igaz érték esetén engedélyezi az adatbázisok közötti lekérdezésátadást ugyanazon a kiszolgálón. Az alapértelmezett érték a hamis.

A rekordparaméter például a következők szerint adható meg: \[lehetőség1 = érték1, lehetőség2 = érték2...\].  
  
Nem támogatja a kiszolgálón futó SQL-lekérdezések beállítását. SQL-lekérdezések futtatásához ehelyett az `Sql.Database` használandó.



## Category
Accessing data
