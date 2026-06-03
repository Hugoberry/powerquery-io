---
title: DB2.Database
---

# DB2.Database


Returnerar en tabell med SQL-tabeller och vyer som är tillgängliga i en DB2-databas.


## Syntax

```powerquery
DB2.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Returnerar en tabell med SQL-tabeller och vyer som är tillgängliga i en DB2-databas på servern `server` i databasinstansen med namnet `database`. Du kan också välja att ange porten med servern, avgränsad med ett kolon. En valfri postparameter `options`, kan anges för att styra följande alternativ:

-   `CreateNavigationProperties` : Ett logiskt värde (sant/falskt) som anger om navigeringsegenskaper ska genereras för returnerade värden eller inte (standard är sant).
-   `NavigationPropertyNameGenerator` : En funktion som används för att skapa namn för navigeringsegenskaper.
-   `Query` : En intern SQL-fråga som används för att hämta data. Om frågan producerar flera resultatuppsättningar, så returneras enbart den första.
-   `CommandTimeout` : En varaktighet som styr hur länge frågan på serversidan tillåts köra innan den avbryts. Standardvärdet är tio minuter.
-   `ConnectionTimeout` : En varaktighet som styr väntetiden innan ett försök ska göras för att upprätta en anslutning till servern. Standardvärdet är drivrutinsberoende.
-   `HierarchicalNavigation` : Ett logiskt värde (sant/falskt) som anger om du vill visa vilka tabeller som är grupperade efter schemanamn (standard är falskt).
-   `Implementation` : Anger vilken intern implementering av databasleverantör som ska användas. Giltiga värden är: IBM och Microsoft.
-   `BinaryCodePage` : Ett nummer för CCSID (Coded Character Set Identifier) för att avkoda DB2 FOR BIT-binära data till teckensträngar. Tillämpas för implementeringen = "Microsoft". Ange 0 för att inaktivera konvertering (standard). Ange 1 för att konvertera baserat på databaskodning. Ange ett annat CCSID-nummer för att konvertera till programkodning.
-   `PackageCollection` : Anger ett stringvärde för paketsamling (standard är NULLID) för att aktivera användning av delade paket som krävs för att bearbeta SQL-uttryck. Gäller för implementeringen = Microsoft.
-   `UseDb2ConnectGateway` : Anger om anslutningen görs via en DB2 Connect-Gateway. Gäller Implementering = "Microsoft".

Postparametern anges t.ex. som \[option1 = value1, option2 = value2...\] or \[Query = "select ..."\].



## Category
Accessing data
