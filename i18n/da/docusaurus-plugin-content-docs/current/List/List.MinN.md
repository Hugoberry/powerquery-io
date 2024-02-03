---
title: List.MinN
---

# List.MinN


## Description

Returnerer den eller de mindste værdier på listen. Antallet af værdier, der skal returneres, eller en filtreringsbetingelse kan angives.


## Syntax

```powerquery
List.MinN(
    list as list,
    countOrCondition as any,
    optional comparisonCriteria as any,
    optional includeNulls as logical
) as list
```


## Details

Returnerer den eller de mindste værdier på listen, <code>list</code>.    Parameteren, <code>countOrCondition</code>, angiver antallet af værdier, der skal returneres, eller en filtreringsbetingelse. Den valgfri parameter, <code>comparisonCriteria</code>, angiver, hvordan man sammenligner værdier på listen. <ul>        <li> <code>list</code>: Listen med værdier.</li>        <li> <code>countOrCondition</code>: Hvis et nummer er angivet, returneres en liste med op til <code>countOrCondition</code> elementer i stigende rækkefølge. Hvis en betingelse er angivet, returneres en liste over elementer, der oprindeligt opfylder betingelsen. Når et element ikke opfylder betingelsen, tages der ikke flere elementer i betragtning. Hvis denne parameter er nul, returneres den mindste værdi på listen.</li><li><code>comparisonCriteria</code>: <i>[Valgfri]</i> En valgfri <code>comparisonCriteria</code> værdi kan angives til at bestemme, hvordan man sammenligner elementerne på listen. Hvis denne parameter er nul, bruges standardsammenligningen. </li></ul>


## Examples

### Example #1 
Find de 5 mindste værdier på listen &lt;code&gt;\{3, 4, 5, -1, 7, 8, 2}&lt;/code&gt;.
```powerquery
List.MinN({3, 4, 5, -1, 7, 8, 2}, 5)
```

Result: 
```powerquery
{-1, 2, 3, 4, 5}
```




## Category
List.Ordering
