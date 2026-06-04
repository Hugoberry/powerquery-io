---
title: OleDb.DataSource
---

# OleDb.DataSource


Az OLE DB-adatforrásból származó SQL-táblák és nézetek tábláját adja vissza.


## Syntax

```powerquery
OleDb.DataSource(
    connectionString as any,
    optional options as record
) as table
```


## Remarks

SQL-táblák és -nézetek tábláját adja vissza a(z) `connectionString` kapcsolati sztring által meghatározott OLE DB-adatforrásból. A(z) `connectionString` lehet szöveg vagy tulajdonságérték-párok rekordja. A tulajdonságértékek szövegek vagy számok lehetnek. Egy választható rekordparaméterrel (`options`) további tulajdonságok is megadhatók. A rekord a következő mezőket tartalmazhatja:

-   `CreateNavigationProperties` : Logikai (igaz/hamis) érték, amely megadja, hogy a visszaadott értékekhez létrejöjjenek-e navigációs tulajdonságok (az alapértelmezett érték a true (igaz)).
-   `NavigationPropertyNameGenerator` : A navigációs tulajdonságok nevének létrehozására használható függvény.
-   `Query` : Adatok lekérésére használt natív SQL-lekérdezés. Ha a lekérdezés több találathalmazt is eredményez, a rendszer csak az elsőt adja vissza.
-   `HierarchicalNavigation` : Logikai (igaz/hamis) érték, amely megadja, hogy a táblák a sémanevek szerint csoportosítva jelenjenek-e meg (az alapértelmezett érték a true, azaz igaz).
-   `ConnectionTimeout` : Egy időtartam, amely azt vezérli, hogy a rendszer mennyi ideig várjon, mielőtt feladja a kiszolgálóhoz való csatlakozási kísérletet. Az alapértelmezett érték az illesztőtől függ.
-   `CommandTimeout` : Egy időtartam, amely azt vezérli, hogy a kiszolgálóoldali lekérdezés mennyi ideig futhat, mielőtt megszakadna. Az alapértelmezett érték tíz perc.
-   `SqlCompatibleWindowsAuth` : Logikai (igaz/hamis) érték, amely meghatározza, hogy létrejöjjenek-e SQL Server-kompatibilis kapcsolatisztring-beállítások a Windows-hitelesítéshez. Az alapértelmezett érték true (igaz).

A rekordparaméter meghatározása lehet például \[option1 = value1, option2 = value2…\] vagy \[Query = "select ..."\].



## Category
Accessing data
