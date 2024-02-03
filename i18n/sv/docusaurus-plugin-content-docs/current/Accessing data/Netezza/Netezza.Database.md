---
title: Netezza.Database
---

# Netezza.Database


## Description

Importera data från en IBM Netezza-databas.


## Syntax

```powerquery
Netezza.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Details

Returnerar en tabell över Netezza-tabeller, vyer och lagrade funktioner från Netezza Server-databasen <code>database</code> på servern <code>server</code>. Porten kan anges med servern åtskilt med ett kolon. En valfri postparameter <code>options</code> kan anges för att styra följande alternativ:<ul>        <li><code>CreateNavigationProperties</code>: En logik (sant/falskt) som fastställer om navigeringsegenskaper för de returnerade värdena ska skapas (standardvärdet är sant)</li>        <li><code>HierarchicalNavigation</code>: En logik (sant/falskt) som fastställer om tabellerna ska visas grupperade efter sina schemanamn (standardvärdet är falskt)</li>        <li><code>HierarchicalNavigation</code>: En varaktighet som styr väntetiden innan ett försök ska göras för att upprätta en anslutning till servern. Standardvärdet är drivrutinsberoende.</li>        <li><code>CommandTimeout</code>: En varaktighet som styr hur länge frågan på serversidan tillåts köra innan den avbryts. Standardvärdet är drivrutinsberoende.</li><li><code>NormalizeDatabaseName</code>: En logik (sant/falskt) som anger om databasnamn ska normaliseras till versaler eller tolkas i bokstäver (standardvärdet är sant).</li></ul>Postparametern anges som [option1 = value1, option2 = value2...].


## Examples

### Example #1 
Lista tabellerna i ett IBM Netezza-projekt.
```powerquery
Netezza.Database("netezza:5480", "netezza_database")
```



