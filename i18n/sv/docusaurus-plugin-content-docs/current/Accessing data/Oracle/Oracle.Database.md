---
title: Oracle.Database
---

# Oracle.Database


## Description

Returnerar en tabell med SQL-tabeller och vyer från Oracle-databasen.


## Syntax

```powerquery
Oracle.Database(
    server as text,
    optional options as record
) as table
```


## Details

Returnerar en tabell med SQL-tabeller och vyer från Oracle-databasen på servern <code>server</code>. Du kan också välja att ange porten med servern, avgränsad med ett kolon. En valfri postparameter, <code>options</code>, kan anges för att styra följande alternativ:    <ul><li><code>CreateNavigationProperties</code> : Ett logiskt v&#228;rde (sant/falskt) som anger om navigeringsegenskaper ska genereras f&#246;r returnerade v&#228;rden eller inte (standard &#228;r sant).</li><li><code>NavigationPropertyNameGenerator</code> : En funktion som anv&#228;nds f&#246;r att skapa namn f&#246;r navigeringsegenskaper.</li><li><code>Query</code> : En intern SQL-fr&#229;ga som anv&#228;nds f&#246;r att h&#228;mta data. Om fr&#229;gan producerar flera resultatupps&#228;ttningar, s&#229; returneras enbart den f&#246;rsta.</li><li><code>CommandTimeout</code> : En varaktighet som styr hur l&#228;nge fr&#229;gan p&#229; serversidan till&#229;ts k&#246;ra innan den avbryts. Standardv&#228;rdet &#228;r tio minuter.</li><li><code>ConnectionTimeout</code> : En varaktighet som styr v&#228;ntetiden innan ett f&#246;rs&#246;k ska g&#246;ras f&#246;r att uppr&#228;tta en anslutning till servern. Standardv&#228;rdet &#228;r drivrutinsberoende.</li><li><code>HierarchicalNavigation</code> : Ett logiskt v&#228;rde (sant/falskt) som anger om du vill visa vilka tabeller som &#228;r grupperade efter schemanamn (standard &#228;r falskt).</li></ul>    Postparametern anges exempelvis som [option1 = value1, option2 = value2 ... ] eller [Query= "select ... "].    



## Category
Accessing data
