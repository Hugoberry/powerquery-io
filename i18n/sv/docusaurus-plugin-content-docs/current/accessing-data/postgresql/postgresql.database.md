---
title: PostgreSQL.Database
---

# PostgreSQL.Database


Returnerar en tabell med SQL-tabeller och vyer som är tillgängliga i en PostgreSQL-databas.


## Syntax

```powerquery
PostgreSQL.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Returnerar en tabell med SQL-tabeller och vyer som är tillgängliga i en PostgreSQL-databas på servern `server` i databasinstansen `database`. Du kan också välja att ange porten med servern, avgränsad med ett kolon. En valfri postparameter `options`, kan anges för att styra följande alternativ:

-   `CreateNavigationProperties` : Ett logiskt värde (sant/falskt) som anger om navigeringsegenskaper ska genereras för returnerade värden eller inte (standard är sant).
-   `NavigationPropertyNameGenerator` : En funktion som används för att skapa namn för navigeringsegenskaper.
-   `Query` : En intern SQL-fråga som används för att hämta data. Om frågan producerar flera resultatuppsättningar, så returneras enbart den första.
-   `CommandTimeout` : En varaktighet som styr hur länge frågan på serversidan tillåts köra innan den avbryts. Standardvärdet är tio minuter.
-   `ConnectionTimeout` : En varaktighet som styr väntetiden innan ett försök ska göras för att upprätta en anslutning till servern. Standardvärdet är drivrutinsberoende.
-   `HierarchicalNavigation` : Ett logiskt värde (sant/falskt) som anger om du vill visa vilka tabeller som är grupperade efter schemanamn (standard är falskt).

Postparametern anges t.ex. som \[option1 = value1, option2 = value2...\] or \[Query = "select ..."\].



## Category
Accessing data
