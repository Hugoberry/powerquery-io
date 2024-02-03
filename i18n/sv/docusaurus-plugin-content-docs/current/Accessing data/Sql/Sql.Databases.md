---
title: Sql.Databases
---

# Sql.Databases


## Description

Returnerar en tabell med databaser på en SQL Server.


## Syntax

```powerquery
Sql.Databases(
    server as text,
    optional options as record
) as table
```


## Details

Returnerar en tabell med databaser på den angivna SQL-servern <code>server</code>. En valfri postparameter, <code>options</code>, kan anges för att styra följande alternativ:    <ul><li><code>CreateNavigationProperties</code> : Ett logiskt v&#228;rde (sant/falskt) som anger om navigeringsegenskaper ska genereras f&#246;r returnerade v&#228;rden eller inte (standard &#228;r sant).</li><li><code>NavigationPropertyNameGenerator</code> : En funktion som anv&#228;nds f&#246;r att skapa namn f&#246;r navigeringsegenskaper.</li><li><code>MaxDegreeOfParallelism</code> : Ett tal som anger v&#228;rdet p&#229; maxdop-fr&#229;gesatsen i den genererade SQL-fr&#229;gan.</li><li><code>CommandTimeout</code> : En varaktighet som styr hur l&#228;nge fr&#229;gan p&#229; serversidan till&#229;ts k&#246;ra innan den avbryts. Standardv&#228;rdet &#228;r tio minuter.</li><li><code>ConnectionTimeout</code> : En varaktighet som styr v&#228;ntetiden innan ett f&#246;rs&#246;k ska g&#246;ras f&#246;r att uppr&#228;tta en anslutning till servern. Standardv&#228;rdet &#228;r drivrutinsberoende.</li><li><code>HierarchicalNavigation</code> : Ett logiskt v&#228;rde (sant/falskt) som anger om du vill visa vilka tabeller som &#228;r grupperade efter schemanamn (standard &#228;r falskt).</li><li><code>MultiSubnetFailover</code> : Ett logiskt v&#228;rde (sant/falskt) som anger v&#228;rdet f&#246;r egenskapen MultiSubnetFailover i anslutningsstr&#228;ngen (standard &#228;r falskt).</li><li><code>UnsafeTypeConversions</code> : Ett logiskt v&#228;rde (sant/falskt) som, om det st&#228;lls in p&#229; sant, f&#246;rs&#246;ker delegera typomvandlingar som skulle kunna misslyckas och leda till att hela fr&#229;gan misslyckas. Rekommenderas inte f&#246;r allm&#228;nt bruk.</li><li><code>ContextInfo</code> : Ett bin&#228;rt v&#228;rde som anv&#228;nds f&#246;r att ange CONTEXT_INFO innan varje kommando k&#246;rs.</li><li><code>OmitSRID</code> : Ett logiskt v&#228;rde (sant/falskt) som, om det &#228;r sant, utesluter SRID n&#228;r WKT skapas fr&#229;n geometri- och geografityper.</li><li><code>EnableCrossDatabaseFolding</code> : Ett logiskt v&#228;rde (sant/falskt) som, om det &#228;r sant, till&#229;ter fr&#229;gedelegering av databaser p&#229; samma server. Standardv&#228;rdet &#228;r falskt.</li></ul>    Postparametern anges exempelvis som [option1 = value1, option2 = value2...].    <br />    Stöder inte körning av en SQL-fråga på servern. <code>Sql.Database</code> ska användas istället för att köra en SQL-fråga.    



## Category
Accessing data
