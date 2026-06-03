---
title: SapHana.Database
---

# SapHana.Database


Returnerar paketet i en SAP HANA-databas.


## Syntax

```powerquery
SapHana.Database(
    server as text,
    optional options as record
) as table
```


## Remarks

Returnerar en tabell med multidimensionella paket från SAP HANA-databasen `server`. Du kan ange en valfri postparameter, `options`, om du vill styra följande alternativ:

-   `Query` : En intern SQL-fråga som används för att hämta data. Om frågan producerar flera resultatuppsättningar, så returneras enbart den första.
-   `Distribution` : En SapHanaDistribution som ställer in värdet för Distribution-egenskapen i anslutningssträngen. Instruktionsroutning är metoden för att utvärdera korrekt servernod för ett distribuerat system innan instruktionsutförande. Standardvärdet är SapHanaDistribution.All.
-   `Implementation` : Anger den implementering av SAP HANA-anslutningsappen som ska användas.
-   `EnableColumnBinding` : Binder variabler till kolumnerna i en SAP HANA resultatuppsättning när data hämtas. Kan potentiellt förbättra prestanda på bekostnad av något högre minnesanvändning. Standardvärdet är falskt.
-   `ConnectionTimeout` : En varaktighet som styr väntetiden innan ett försök ska göras för att upprätta en anslutning till servern. Standardvärdet är 15 sekunder.
-   `CommandTimeout` : En varaktighet som styr hur länge frågan på serversidan tillåts köra innan den avbryts. Standardvärdet är tio minuter.



## Category
Accessing data
