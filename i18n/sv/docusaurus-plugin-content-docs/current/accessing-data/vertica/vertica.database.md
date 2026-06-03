---
title: Vertica.Database
---

# Vertica.Database


Importera data från Vertica


## Syntax

```powerquery
Vertica.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Returnerar en tabell med scheman som är tillgängliga på servern som namnges av `server`parametern i databasen som namnges av `databas`parametern. En valfri post-parameter `alternativ`, kan tillhandahållas för att ange ytterligare egenskaper. Posten kan innehålla följande fält:

-   `ConnectionTimeout`: en varaktighet som anger hur lång väntan ska vara innan försök att ansluta till servern avbryts. Standardvärdet är drivrutinsberoende.
-   `CommandTimeout` : en varaktighet som anger hur länge servern frågan kan köras innan den avbryts. Standardvärdet är drivrutinsberoende.


## Examples

### Example #1
Lista tabellerna i Vertica
```powerquery

```



