---
title: OleDb.Query
---

# OleDb.Query


Egy natív lekérdezés OLE DB-adatforráson való futtatásának eredményét adja vissza.


## Syntax

```powerquery
OleDb.Query(
    connectionString as any,
    query as text,
    optional options as record
) as table
```


## Remarks

A(z) `query` a(z) `connectionString` kapcsolati sztringgel és az OLE DB-vel való futtatásának eredményét adja vissza. A(z) `connectionString` szöveg vagy tulajdonságérték-párok rekordja lehet. A tulajdonságérték szöveg vagy szám lehet. A(z) `options` elhagyható rekordparaméterrel további tulajdonságok határozhatók meg. A rekord a következő mezőket tartalmazhatja:

-   `ConnectionTimeout` : Egy időtartam, amely azt vezérli, hogy a rendszer mennyi ideig várjon, mielőtt feladja a kiszolgálóhoz való csatlakozási kísérletet. Az alapértelmezett érték az illesztőtől függ.
-   `CommandTimeout` : Egy időtartam, amely azt vezérli, hogy a kiszolgálóoldali lekérdezés mennyi ideig futhat, mielőtt megszakadna. Az alapértelmezett érték tíz perc.
-   `SqlCompatibleWindowsAuth` : Logikai (igaz/hamis) érték, amely meghatározza, hogy létrejöjjenek-e SQL Server-kompatibilis kapcsolatisztring-beállítások a Windows-hitelesítéshez. Az alapértelmezett érték true (igaz).



## Category
Accessing data
