---
title: List.MinN
---

# List.MinN


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


## Remarks

Returnerer den eller de mindste værdier på listen, `list`. Parameteren, `countOrCondition`, angiver det antal værdier, der skal returneres, eller en filtreringsbetingelse. Den valgfrie parameter, `comparisonCriteria`, angiver, hvordan værdier på listen skal sammenlignes.

-   `list`: Listen over værdier.
-   `countOrCondition`: Hvis der er angivet et tal, returneres der en liste på op til `countOrCondition` elementer i stigende rækkefølge. Hvis der er angivet en betingelse, returneres der en liste over elementer, der i starten opfylder betingelsen. Når et element ikke opfylder betingelsen, tages der ikke flere elementer med i betragtning. Hvis denne parameter er null, returneres den mindste enkeltstående værdi på listen.
-   `comparisonCriteria`: *(Valgfrit)* Du kan angive en valgfri værdi af typen `comparisonCriteria` for at bestemme, hvordan elementerne på listen skal sammenlignes. Hvis denne parameter er null, bruges standardfunktionen til sammenligning.


## Examples

### Example #1
Find de 5 mindste værdier på listen `{3, 4, 5, -1, 7, 8, 2}`.
```powerquery
List.MinN({3, 4, 5, -1, 7, 8, 2}, 5)
```

Result: 
```powerquery
{-1, 2, 3, 4, 5}
```




## Category
List.Ordering
