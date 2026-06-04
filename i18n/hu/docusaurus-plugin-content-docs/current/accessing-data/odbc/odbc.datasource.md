---
title: Odbc.DataSource
---

# Odbc.DataSource


Az ODBC-adatforrásban elérhető SQL-táblák és -nézetek tábláját adja vissza.


## Syntax

```powerquery
Odbc.DataSource(
    connectionString as any,
    optional options as record
) as table
```


## Remarks

SQL-táblák és -nézetek tábláját adja vissza a(z) `connectionString` kapcsolati sztring által meghatározott ODBC-adatforrásból. A(z) `connectionString` szöveg vagy tulajdonságérték-párok rekordja lehet. A tulajdonságérték szöveg vagy szám lehet. A(z) `options` elhagyható rekordparaméterrel további tulajdonságok határozhatók meg. A rekord a következő mezőket tartalmazhatja:

-   `CreateNavigationProperties` : Logikai (igaz/hamis) érték, amely megadja, hogy a visszaadott értékekhez létrejöjjenek-e navigációs tulajdonságok (az alapértelmezett érték a true (igaz)).
-   `HierarchicalNavigation` : Logikai (igaz/hamis) érték, amely megadja, hogy a táblák a sémanevek szerint csoportosítva jelenjenek-e meg (az alapértelmezett érték a false (hamis)).
-   `ConnectionTimeout` : Egy időtartam, amely azt vezérli, hogy a rendszer mennyi ideig várjon, mielőtt feladja a kiszolgálóhoz való csatlakozási kísérletet. Az alapértelmezett érték 15 másodperc.
-   `CommandTimeout` : Egy időtartam, amely azt vezérli, hogy a kiszolgálóoldali lekérdezés mennyi ideig futhat, mielőtt megszakadna. Az alapértelmezett érték tíz perc.
-   `SqlCompatibleWindowsAuth` : Logikai (igaz/hamis) érték, amely meghatározza, hogy létrejöjjenek-e SQL Server-kompatibilis kapcsolatisztring-beállítások a Windows-hitelesítéshez. Az alapértelmezett érték true (igaz).


## Examples

### Example #1
Az SQL-táblákat és -nézeteket küldi vissza a megadott kapcsolati sztringből.
```powerquery
Odbc.DataSource("dsn=your_dsn")
```

Result: 
```powerquery
table
```




## Category
Accessing data
