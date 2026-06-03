---
title: Sql.Databases
---

# Sql.Databases


Returnerar en tabell med databaser på en SQL Server.


## Syntax

```powerquery
Sql.Databases(
    server as text,
    optional options as record
) as table
```


## Remarks

Returnerar en tabell med databaser på den angivna SQL-servern `server`. En valfri postparameter `options`, kan anges för att styra följande alternativ:

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

Postparametern anges exempelvis som \[option1 = value1, option2 = value2...\].  
  
Stöder inte inställning av en SQL-fråga som ska köras på servern. `Sql.Database` ska användas i stället för att köra en SQL-fråga.



## Category
Accessing data
