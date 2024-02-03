---
title: AnalysisServices.Databases
---

# AnalysisServices.Databases


## Description

Returnerar Analysis Services-databaser hos en viss värd.


## Syntax

```powerquery
AnalysisServices.Databases(
    server as text,
    optional options as record
) as table
```


## Details

Returnerar databaser i Analysis Services-instansen <code>server</code>.  Du kan ange en valfri parameter, <code>options</code>, om du vill ange ytterligare egenskaper. Posten kan innehålla följande fält:    <ul><li><code>TypedMeasureColumns</code> : Ett logiskt v&#228;rde som indikerar om den typ som anges i flerdimensions- eller tabellmodellen kommer att anv&#228;ndas f&#246;r de tillagda m&#229;ttkolumnernas typer. N&#228;r det ges v&#228;rdet false anv&#228;nds typen number f&#246;r alla m&#229;ttkolumner. Standardv&#228;rdet f&#246;r det h&#228;r alternativet &#228;r false.</li><li><code>Culture</code> : Ett kulturnamn anger datakulturen. Detta motsvarar anslutningsstr&#228;ngsegenskapen Locale Identifier.</li><li><code>CommandTimeout</code> : En varaktighet som styr hur l&#228;nge fr&#229;gan p&#229; serversidan till&#229;ts k&#246;ra innan den avbryts. Standardv&#228;rdet &#228;r drivrutinsberoende.</li><li><code>ConnectionTimeout</code> : En varaktighet som styr v&#228;ntetiden innan ett f&#246;rs&#246;k ska g&#246;ras f&#246;r att uppr&#228;tta en anslutning till servern. Standardv&#228;rdet &#228;r drivrutinsberoende.</li><li><code>SubQueries</code> : Ett nummer (0, 1 eller 2) som anger v&#228;rdet f&#246;r &quot;SubQueries&quot;-egenskapen i anslutningsstr&#228;ngen. Det h&#228;r styr beteendet f&#246;r ber&#228;knade medlemmar p&#229; delmarkeringar eller subcutes. (Standardv&#228;rdet &#228;r 2).</li><li><code>Implementation</code></li></ul>    



## Category
Accessing data
