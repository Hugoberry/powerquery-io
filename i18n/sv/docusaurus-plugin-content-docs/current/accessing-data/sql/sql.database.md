---
title: Sql.Database
---

# Sql.Database


Returnerar en tabell med SQL-tabeller, vyer och lagrade funktioner från SQL Server-databasen.


## Syntax

```powerquery
Sql.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Returnerar en tabell med SQL-tabeller, vyer och lagrade funktioner från SQL Server-databasen `database` på servern `server`. Du kan också välja att ange porten med servern, avgränsad med ett kolon eller ett kommatecken. En valfri postparameter `options`, kan anges för att styra följande alternativ:

-   `Query` : En intern SQL-fråga som används för att hämta data. Om frågan producerar flera resultatuppsättningar, så returneras enbart den första.
-   `CreateNavigationProperties` : Ett logiskt värde (sant/falskt) som anger om navigeringsegenskaper ska genereras för returnerade värden eller inte (standard är sant).
-   `NavigationPropertyNameGenerator` : En funktion som används för att skapa namn för navigeringsegenskaper.
-   `MaxDegreeOfParallelism` : Ett tal som anger värdet på maxdop-frågesatsen i den genererade SQL-frågan.
-   `CommandTimeout` : En varaktighet som styr hur länge frågan på serversidan tillåts köra innan den avbryts. Standardvärdet är tio minuter.
-   `ConnectionTimeout` : En varaktighet som styr väntetiden innan ett försök ska göras för att upprätta en anslutning till servern. Standardvärdet är drivrutinsberoende.
-   `HierarchicalNavigation` : Ett logiskt värde (sant/falskt) som anger om du vill visa vilka tabeller som är grupperade efter schemanamn (standard är falskt).
-   `MultiSubnetFailover` : Ett logiskt värde (sant/falskt) som anger värdet för egenskapen MultiSubnetFailover i anslutningssträngen (standard är falskt).
-   `UnsafeTypeConversions` : Ett logiskt värde (sant/falskt) som, om det ställs in på sant, försöker delegera typomvandlingar som skulle kunna misslyckas och leda till att hela frågan misslyckas. Rekommenderas inte för allmänt bruk.
-   `ContextInfo` : Ett binärt värde som används för att ange CONTEXT\_INFO innan varje kommando körs.
-   `OmitSRID` : Ett logiskt värde (sant/falskt) som, om det är sant, utesluter SRID när WKT skapas från geometri- och geografityper.
-   `EnableCrossDatabaseFolding` : Ett logiskt värde (sant/falskt) som, om det är sant, tillåter frågedelegering av databaser på samma server. Standardvärdet är falskt.

Postparametern anges t.ex. som \[option1 = value1, option2 = value2...\] or \[Query = "select ..."\].



## Category
Accessing data
