---
title: OleDb.DataSource
---

# OleDb.DataSource


Returnerar en tabell med SQL-tabeller och -vyer från OLE DB-datakällan.


## Syntax

```powerquery
OleDb.DataSource(
    connectionString as any,
    optional options as record
) as table
```


## Remarks

Returnerar en tabell med SQL-tabeller och vyer från den OLE DB-datakälla som har angivits av anslutningssträngen <code>connectionString</code>. <code>connectionString</code> kan vara text eller en post med egenskapsvärdespar. Egenskapsvärden kan antingen vara text eller siffror. Du kan tillhandahålla en valfri postparameter, <code>options</code>, om du vill ange ytterligare egenskaper. Posten kan innehålla följande fält:    <ul><li><code>CreateNavigationProperties</code> : Ett logiskt v&#228;rde (sant/falskt) som anger om navigeringsegenskaper ska genereras f&#246;r returnerade v&#228;rden eller inte (standard &#228;r sant).</li><li><code>NavigationPropertyNameGenerator</code> : En funktion som anv&#228;nds f&#246;r att skapa namn f&#246;r navigeringsegenskaper.</li><li><code>Query</code> : En intern SQL-fr&#229;ga som anv&#228;nds f&#246;r att h&#228;mta data. Om fr&#229;gan producerar flera resultatupps&#228;ttningar, s&#229; returneras enbart den f&#246;rsta.</li><li><code>HierarchicalNavigation</code> : Ett logiskt v&#228;rde (sant/falskt) som anger om tabellerna ska visas grupperade efter sina schemanamn (standard &#228;r sant).</li><li><code>ConnectionTimeout</code> : En varaktighet som styr v&#228;ntetiden innan ett f&#246;rs&#246;k ska g&#246;ras f&#246;r att uppr&#228;tta en anslutning till servern. Standardv&#228;rdet &#228;r drivrutinsberoende.</li><li><code>CommandTimeout</code> : En varaktighet som styr hur l&#228;nge fr&#229;gan p&#229; serversidan till&#229;ts k&#246;ra innan den avbryts. Standardv&#228;rdet &#228;r tio minuter.</li><li><code>SqlCompatibleWindowsAuth</code> : Ett logiskt (sant/falskt) som fastst&#228;ller om alternativ f&#246;r SQL Server-kompatibla anslutningsstr&#228;ngpar ska skapas f&#246;r Windows-autentisering. Standardv&#228;rdet &#228;r sant.</li></ul>    Postparametern anges t.ex. som [option1 = value1, option2 = value2...] or [Query = "select ..."].



## Category
Accessing data
