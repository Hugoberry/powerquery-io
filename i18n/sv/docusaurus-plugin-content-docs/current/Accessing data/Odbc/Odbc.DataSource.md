---
title: Odbc.DataSource
---

# Odbc.DataSource


Returnerar en tabell med SQL-tabeller och vyer från ODBC-datakällan. 


## Syntax

```powerquery
Odbc.DataSource(
    connectionString as any,
    optional options as record
) as table
```


## Remarks

Returnerar en tabell med SQL-tabeller och vyer från den ODBC-datakälla som har angetts av anslutningssträngen <code>connectionString</code>. <code>connectionString</code> kan vara text eller en post med egenskapsvärdepar. Egenskapsvärdena kan antingen vara text eller siffror. En valfri postparameter, <code>options</code>, kan anges för att specificera ytterligare egenskaper. Posten kan innehålla följande fält:    <ul><li><code>CreateNavigationProperties</code> : Ett logiskt v&#228;rde (sant/falskt) som anger om navigeringsegenskaper ska genereras f&#246;r returnerade v&#228;rden eller inte (standard &#228;r sant).</li><li><code>HierarchicalNavigation</code> : Ett logiskt v&#228;rde (sant/falskt) som anger om du vill visa vilka tabeller som &#228;r grupperade efter schemanamn (standard &#228;r falskt).</li><li><code>ConnectionTimeout</code> : En varaktighet som styr v&#228;ntetiden innan ett f&#246;rs&#246;k ska g&#246;ras f&#246;r att uppr&#228;tta en anslutning till servern. Standardv&#228;rdet &#228;r 15 sekunder.</li><li><code>CommandTimeout</code> : En varaktighet som styr hur l&#228;nge fr&#229;gan p&#229; serversidan till&#229;ts k&#246;ra innan den avbryts. Standardv&#228;rdet &#228;r tio minuter.</li><li><code>SqlCompatibleWindowsAuth</code> : Ett logiskt (sant/falskt) som fastst&#228;ller om alternativ f&#246;r SQL Server-kompatibla anslutningsstr&#228;ngpar ska skapas f&#246;r Windows-autentisering. Standardv&#228;rdet &#228;r sant.</li></ul>


## Examples

### Example #1 
Returnera SQL-tabeller och vyer från den angivna anslutningssträngen.
```powerquery
Odbc.DataSource("dsn=your_dsn")
```

Result: 
```powerquery
table
```




## Category
Accessing data
