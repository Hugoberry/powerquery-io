---
title: AnalysisServices.Databases
---

# AnalysisServices.Databases


Returnerar Analysis Services-databaser hos en viss värd.


## Syntax

```powerquery
AnalysisServices.Databases(
    server as text,
    optional options as record
) as table
```


## Remarks

Returnerar databaser i Analysis Services-instansen `server`. Du kan ange en valfri parameter, `options`, om du vill ange ytterligare egenskaper. Posten kan innehålla följande fält:

-   `TypedMeasureColumns` : Ett logiskt värde som indikerar om den typ som anges i flerdimensions- eller tabellmodellen kommer att användas för de tillagda måttkolumnernas typer. När det ges värdet false används typen number för alla måttkolumner. Standardvärdet för det här alternativet är false.
-   `Culture` : Ett kulturnamn anger datakulturen. Detta motsvarar anslutningssträngsegenskapen Locale Identifier.
-   `CommandTimeout` : En varaktighet som styr hur länge frågan på serversidan tillåts köra innan den avbryts. Standardvärdet är drivrutinsberoende.
-   `ConnectionTimeout` : En varaktighet som styr väntetiden innan ett försök ska göras för att upprätta en anslutning till servern. Standardvärdet är drivrutinsberoende.
-   `SubQueries` : Ett nummer (0, 1 eller 2) som anger värdet för "SubQueries"-egenskapen i anslutningssträngen. Det här styr beteendet för beräknade medlemmar på delmarkeringar eller subcutes. (Standardvärdet är 2).
-   `Implementation`



## Category
Accessing data
