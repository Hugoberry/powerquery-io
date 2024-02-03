---
title: DB2.Database
---

# DB2.Database


## Description

Returnerar en tabell med SQL-tabeller och vyer som är tillgängliga i en DB2-databas.


## Syntax

```powerquery
DB2.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Details

Returnerar en tabell med SQL-tabeller och vyer som är tillgängliga i en DB2-databas på servern <code>server</code> i databasinstansen med namnet <code>database</code>. Porten kan också valfritt anges med servern, avgränsat med ett kolon. En valfri postparameter, <code>options</code>, kan anges för att styra följande alternativ:    <ul><li><code>CreateNavigationProperties</code> : Ett logiskt v&#228;rde (sant/falskt) som anger om navigeringsegenskaper ska genereras f&#246;r returnerade v&#228;rden eller inte (standard &#228;r sant).</li><li><code>NavigationPropertyNameGenerator</code> : En funktion som anv&#228;nds f&#246;r att skapa namn f&#246;r navigeringsegenskaper.</li><li><code>Query</code> : En intern SQL-fr&#229;ga som anv&#228;nds f&#246;r att h&#228;mta data. Om fr&#229;gan producerar flera resultatupps&#228;ttningar, s&#229; returneras enbart den f&#246;rsta.</li><li><code>CommandTimeout</code> : En varaktighet som styr hur l&#228;nge fr&#229;gan p&#229; serversidan till&#229;ts k&#246;ra innan den avbryts. Standardv&#228;rdet &#228;r tio minuter.</li><li><code>ConnectionTimeout</code> : En varaktighet som styr v&#228;ntetiden innan ett f&#246;rs&#246;k ska g&#246;ras f&#246;r att uppr&#228;tta en anslutning till servern. Standardv&#228;rdet &#228;r drivrutinsberoende.</li><li><code>HierarchicalNavigation</code> : Ett logiskt v&#228;rde (sant/falskt) som anger om du vill visa vilka tabeller som &#228;r grupperade efter schemanamn (standard &#228;r falskt).</li><li><code>Implementation</code> : Anger vilken intern implementering av databasleverant&#246;r som ska anv&#228;ndas. Giltiga v&#228;rden &#228;r: IBM och Microsoft.</li><li><code>BinaryCodePage</code> : Ett nummer f&#246;r CCSID (Coded Character Set Identifier) f&#246;r att avkoda DB2 FOR BIT-bin&#228;ra data till teckenstr&#228;ngar. Till&#228;mpas f&#246;r implementeringen = &quot;Microsoft&quot;. Ange 0 f&#246;r att inaktivera konvertering (standard). Ange 1 f&#246;r att konvertera baserat p&#229; databaskodning. Ange ett annat CCSID-nummer f&#246;r att konvertera till programkodning.</li><li><code>PackageCollection</code> : Anger ett stringv&#228;rde f&#246;r paketsamling (standard &#228;r NULLID) f&#246;r att aktivera anv&#228;ndning av delade paket som kr&#228;vs f&#246;r att bearbeta SQL-uttryck. G&#228;ller f&#246;r implementeringen = Microsoft.</li><li><code>UseDb2ConnectGateway</code> : Anger om anslutningen g&#246;rs via en DB2 Connect-Gateway. G&#228;ller Implementering = &quot;Microsoft&quot;.</li></ul>    Postparametern anges till exempel som [option1 = value1, option2 = value2...] eller [Query = "select ..."].    



## Category
Accessing data
