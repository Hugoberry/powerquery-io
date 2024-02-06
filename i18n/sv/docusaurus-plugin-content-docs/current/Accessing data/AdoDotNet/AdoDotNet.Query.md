---
title: AdoDotNet.Query
---

# AdoDotNet.Query


Returnerar resultatet för en intern fråga som körs på en ADO.NET-datakälla.


## Syntax

```powerquery
AdoDotNet.Query(
    providerName as text,
    connectionString as any,
    query as text,
    optional options as record
) as table
```


## Remarks

Returnerar resultatet av att köra <code>query</code> med anslutningssträngen <code>connectionString</code> med ADO.NET-providern <code>providerName</code>. <code>connectionString</code> kan vara text eller en post med egenskapsvärdepar. Egenskapsvärdena kan antingen vara text eller siffror. En valfri postparameter, <code>options</code>, kan anges för att specificera ytterligare egenskaper. Posten kan innehålla följande fält:    <ul><li><code>CommandTimeout</code> : En varaktighet som styr hur l&#228;nge fr&#229;gan p&#229; serversidan till&#229;ts k&#246;ra innan den avbryts. Standardv&#228;rdet &#228;r tio minuter.</li><li><code>SqlCompatibleWindowsAuth</code> : Ett logiskt (sant/falskt) som fastst&#228;ller om alternativ f&#246;r SQL Server-kompatibla anslutningsstr&#228;ngpar ska skapas f&#246;r Windows-autentisering. Standardv&#228;rdet &#228;r sant.</li></ul>



## Category
Accessing data
