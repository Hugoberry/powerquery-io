---
title: List.MaxN
---

# List.MaxN


Returnerer den eller de maksimale værdier på listen. Antallet af værdier, der skal returneres, eller en filtreringsbetingelse skal angives.


## Syntax

```powerquery
List.MaxN(
    list as list,
    countOrCondition as any,
    optional comparisonCriteria as any,
    optional includeNulls as logical
) as list
```


## Remarks

Returnerer den eller de maksimale værdier på listen, <code>list</code>.    Når rækkerne er sorteret, kan valgfrie parametre angives for yderligere at filtrere resultatet. Den valgfri parameter <code>countOrCondition</code> angiver antallet af værdier, der skal returneres, eller en filtreringsbetingelse. Den valgfri parameter <code>comparisonCriteria</code> angiver, hvordan man sammenligner værdier på listen. <ul>        <li> <code>list</code>: Listen med værdier.</li>        <li> <code>countOrCondition</code>: Hvis et nummer er angivet, returneres en liste med op til <code>countOrCondition</code> elementer i stigende rækkefølge. Hvis en betingelse er angivet, returneres en liste over elementer, der oprindeligt opfylder betingelsen. Når et element ikke opfylder betingelsen, tages der ikke flere elementer i betragtning.</li><li><code>comparisonCriteria</code>: <i>[Valgfri]</i> En valgfri <code>comparisonCriteria</code> værdi kan angives for at bestemme, hvordan elementerne på listen skal sammenlignes. Hvis denne parameter er nul, bruges standardsammenligningen. </li></ul>



## Category
List.Ordering
