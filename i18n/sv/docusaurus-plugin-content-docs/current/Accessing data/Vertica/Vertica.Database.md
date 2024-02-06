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

Returnerar en tabell med scheman som är tillgängliga på servern som namnges av <code>server</code>parametern i databasen som namnges av <code>databas</code>parametern.En valfri post-parameter <code>alternativ</code>, kan tillhandahållas för att ange ytterligare egenskaper. Posten kan innehålla följande fält:<ul> <li> <code>ConnectionTimeout</code>: en varaktighet som anger hur lång väntan ska vara innan försök att ansluta till servern avbryts. Standardvärdet är drivrutinsberoende. </li> <li> <code>CommandTimeout </code>: en varaktighet som anger hur länge servern frågan kan köras innan den avbryts. Standardvärdet är drivrutinsberoende.        </li></ul>


## Examples

### Example #1 
Lista tabellerna i Vertica
```powerquery

```



