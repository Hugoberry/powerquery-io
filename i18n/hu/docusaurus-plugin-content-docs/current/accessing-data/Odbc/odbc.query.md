---
title: Odbc.Query
---

# Odbc.Query


Egy natív lekérdezés ODBC-adatforráson való futtatásának eredményét adja vissza.


## Syntax

```powerquery
Odbc.Query(
    connectionString as any,
    query as text,
    optional options as record
) as table
```


## Remarks

A(z) `query` a(z) `connectionString` kapcsolati sztringgel és az ODBC-vel való futtatásának eredményét adja vissza. A(z) `connectionString` szöveg vagy tulajdonságérték-párok rekordja lehet. A tulajdonságérték szöveg vagy szám lehet. A(z) `options` elhagyható rekordparaméterrel további tulajdonságok határozhatók meg. A rekord a következő mezőket tartalmazhatja:

-   `ConnectionTimeout` : Egy időtartam, amely azt vezérli, hogy a rendszer mennyi ideig várjon, mielőtt feladja a kiszolgálóhoz való csatlakozási kísérletet. Az alapértelmezett érték 15 másodperc.
-   `CommandTimeout` : Egy időtartam, amely azt vezérli, hogy a kiszolgálóoldali lekérdezés mennyi ideig futhat, mielőtt megszakadna. Az alapértelmezett érték tíz perc.
-   `SqlCompatibleWindowsAuth` : Logikai (igaz/hamis) érték, amely meghatározza, hogy létrejöjjenek-e SQL Server-kompatibilis kapcsolatisztring-beállítások a Windows-hitelesítéshez. Az alapértelmezett érték true (igaz).


## Examples

### Example #1
Egyszerű lekérdezés futtatásának eredményét küldi vissza a megadott kapcsolati sztring alapján.
```powerquery
Odbc.Query("dsn=your_dsn", "select * from Customers")
```

Result: 
```powerquery
table
```




## Category
Accessing data
