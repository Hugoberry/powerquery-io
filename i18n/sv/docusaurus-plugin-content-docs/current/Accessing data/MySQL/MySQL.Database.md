---
title: MySQL.Database
---

# MySQL.Database


## Description

Returnerar en tabell med SQL-tabeller, vyer och lagrade skalärfunktioner som är tillgängliga i en MySQL-databas.


## Syntax

```powerquery
MySQL.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Details

Returnerar en tabell med SQL-tabeller, vyer och lagrade skalärfunktioner som är tillgängliga i en MySQL-databas på servern <code>server</code> i databasinstansen <code>database</code>. Du kan också välja att ange porten med servern, avgränsad med ett kolon. En valfri postparameter, <code>options</code>, kan anges för att styra följande alternativ:    <ul><li><code>Encoding</code> : Ett TextEncoding-v&#228;rde som anger den teckenupps&#228;ttning som anv&#228;nds f&#246;r att koda alla fr&#229;gor som skickas till servern (standard &#228;r null).</li><li><code>CreateNavigationProperties</code> : Ett logiskt v&#228;rde (sant/falskt) som anger om navigeringsegenskaper ska genereras f&#246;r returnerade v&#228;rden eller inte (standard &#228;r sant).</li><li><code>NavigationPropertyNameGenerator</code> : En funktion som anv&#228;nds f&#246;r att skapa namn f&#246;r navigeringsegenskaper.</li><li><code>Query</code> : En intern SQL-fr&#229;ga som anv&#228;nds f&#246;r att h&#228;mta data. Om fr&#229;gan producerar flera resultatupps&#228;ttningar, s&#229; returneras enbart den f&#246;rsta.</li><li><code>CommandTimeout</code> : En varaktighet som styr hur l&#228;nge fr&#229;gan p&#229; serversidan till&#229;ts k&#246;ra innan den avbryts. Standardv&#228;rdet &#228;r tio minuter.</li><li><code>ConnectionTimeout</code> : En varaktighet som styr v&#228;ntetiden innan ett f&#246;rs&#246;k ska g&#246;ras f&#246;r att uppr&#228;tta en anslutning till servern. Standardv&#228;rdet &#228;r drivrutinsberoende.</li><li><code>TreatTinyAsBoolean</code> : En logisk v&#228;rde (sant/falskt) som avg&#246;r om du vill tvinga tinyint-kolumner p&#229; servern som logiska v&#228;rden. Standardv&#228;rdet &#228;r sant.</li><li><code>OldGuids</code> : Ett logiskt v&#228;rde (sant/falskt) som anger om char(36)-kolumner (om falskt) eller binary(16)-kolumner (om sant) kommer att behandlas som GUID. Standardv&#228;rdet &#228;r falskt.</li><li><code>ReturnSingleDatabase</code> : En logiskt v&#228;rde (sant/falskt) som anger om du vill returnera alla tabeller i alla databaser (om falskt) eller returnera tabeller och vyer i den angivna databasen (om sant). Standardv&#228;rdet &#228;r falskt.</li><li><code>HierarchicalNavigation</code> : Ett logiskt v&#228;rde (sant/falskt) som anger om du vill visa vilka tabeller som &#228;r grupperade efter schemanamn (standard &#228;r falskt).</li></ul>    Postparametern anges exempelvis som [option1 = value1, option2 = value2...] eller [Query = "select ..."].    



## Category
Accessing data
