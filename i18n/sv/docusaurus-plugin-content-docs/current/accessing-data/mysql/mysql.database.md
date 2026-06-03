---
title: MySQL.Database
---

# MySQL.Database


Returnerar en tabell med SQL-tabeller, vyer och lagrade skalärfunktioner som är tillgängliga i en MySQL-databas.


## Syntax

```powerquery
MySQL.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Returnerar en tabell med SQL-tabeller, vyer och lagrade skalärfunktioner som är tillgängliga i en MySQL-databas på servern `server` i databasinstansen `database`. Du kan också välja att ange porten med servern, avgränsad med ett kolon. En valfri postparameter `options`, kan anges för att styra följande alternativ:

-   `Encoding` : Ett TextEncoding-värde som anger den teckenuppsättning som används för att koda alla frågor som skickas till servern (standard är null).
-   `CreateNavigationProperties` : Ett logiskt värde (sant/falskt) som anger om navigeringsegenskaper ska genereras för returnerade värden eller inte (standard är sant).
-   `NavigationPropertyNameGenerator` : En funktion som används för att skapa namn för navigeringsegenskaper.
-   `Query` : En intern SQL-fråga som används för att hämta data. Om frågan producerar flera resultatuppsättningar, så returneras enbart den första.
-   `CommandTimeout` : En varaktighet som styr hur länge frågan på serversidan tillåts köra innan den avbryts. Standardvärdet är tio minuter.
-   `ConnectionTimeout` : En varaktighet som styr väntetiden innan ett försök ska göras för att upprätta en anslutning till servern. Standardvärdet är drivrutinsberoende.
-   `TreatTinyAsBoolean` : En logisk värde (sant/falskt) som avgör om du vill tvinga tinyint-kolumner på servern som logiska värden. Standardvärdet är sant.
-   `OldGuids` : Ett logiskt värde (sant/falskt) som anger om char(36)-kolumner (om falskt) eller binary(16)-kolumner (om sant) kommer att behandlas som GUID. Standardvärdet är falskt.
-   `ReturnSingleDatabase` : En logiskt värde (sant/falskt) som anger om du vill returnera alla tabeller i alla databaser (om falskt) eller returnera tabeller och vyer i den angivna databasen (om sant). Standardvärdet är falskt.
-   `HierarchicalNavigation` : Ett logiskt värde (sant/falskt) som anger om du vill visa vilka tabeller som är grupperade efter schemanamn (standard är falskt).

Postparametern anges t.ex. som \[option1 = value1, option2 = value2...\] or \[Query = "select ..."\].



## Category
Accessing data
