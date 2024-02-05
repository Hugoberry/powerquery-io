---
title: OleDb.Query
---

# OleDb.Query


## Description

Returnerar resultatet för en intern fråga som körs på en OLE DB-datakälla.


## Syntax

```powerquery
OleDb.Query(
    connectionString as any,
    query as text,
    optional options as record
) as table
```


## Details

Returnerar resultatet av att köra <code>query</code> med anslutningssträngen <code>connectionString</code> med OLE DB. <code>connectionString</code> kan vara text eller en post med egenskapsvärdepar. Egenskapsvärdena kan antingen vara text eller siffror. En valfri postparameter, <code>options</code>, kan anges för att specificera ytterligare egenskaper. Posten kan innehålla följande fält:    <ul><li><code>ConnectionTimeout</code> : En varaktighet som styr v&#228;ntetiden innan ett f&#246;rs&#246;k ska g&#246;ras f&#246;r att uppr&#228;tta en anslutning till servern. Standardv&#228;rdet &#228;r drivrutinsberoende.</li><li><code>CommandTimeout</code> : En varaktighet som styr hur l&#228;nge fr&#229;gan p&#229; serversidan till&#229;ts k&#246;ra innan den avbryts. Standardv&#228;rdet &#228;r tio minuter.</li><li><code>SqlCompatibleWindowsAuth</code> : Ett logiskt (sant/falskt) som fastst&#228;ller om alternativ f&#246;r SQL Server-kompatibla anslutningsstr&#228;ngpar ska skapas f&#246;r Windows-autentisering. Standardv&#228;rdet &#228;r sant.</li></ul>



## Category
Accessing data
