---
title: SapHana.Database
---

# SapHana.Database


Returnerar paketet i en SAP HANA-databas.


## Syntax

```powerquery
SapHana.Database(
    server as text,
    optional options as record
) as table
```


## Remarks

Returnerar en tabell med multidimensionella paket från SAP HANA-databasen <code>server</code>. Du kan ange en valfri postparameter, <code>options</code>, om du vill styra följande alternativ:    <ul><li><code>Query</code> : En intern SQL-fr&#229;ga som anv&#228;nds f&#246;r att h&#228;mta data. Om fr&#229;gan producerar flera resultatupps&#228;ttningar, s&#229; returneras enbart den f&#246;rsta.</li><li><code>Distribution</code> : En SapHanaDistribution som st&#228;ller in v&#228;rdet f&#246;r Distribution-egenskapen i anslutningsstr&#228;ngen. Instruktionsroutning &#228;r metoden f&#246;r att utv&#228;rdera korrekt servernod f&#246;r ett distribuerat system innan instruktionsutf&#246;rande. Standardv&#228;rdet &#228;r SapHanaDistribution.All.</li><li><code>Implementation</code> : Anger den implementering av SAP HANA-anslutningsappen som ska anv&#228;ndas.</li><li><code>EnableColumnBinding</code> : Binder variabler till kolumnerna i en SAP HANA resultatupps&#228;ttning n&#228;r data h&#228;mtas. Kan potentiellt f&#246;rb&#228;ttra prestanda p&#229; bekostnad av n&#229;got h&#246;gre minnesanv&#228;ndning. Standardv&#228;rdet &#228;r falskt.</li><li><code>ConnectionTimeout</code> : En varaktighet som styr v&#228;ntetiden innan ett f&#246;rs&#246;k ska g&#246;ras f&#246;r att uppr&#228;tta en anslutning till servern. Standardv&#228;rdet &#228;r 15 sekunder.</li><li><code>CommandTimeout</code> : En varaktighet som styr hur l&#228;nge fr&#229;gan p&#229; serversidan till&#229;ts k&#246;ra innan den avbryts. Standardv&#228;rdet &#228;r tio minuter.</li></ul>    



## Category
Accessing data
