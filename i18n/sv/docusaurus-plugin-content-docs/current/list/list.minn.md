---
title: List.MinN
---

# List.MinN


Returnerar de minsta värdena i listan. Antalet värden som ska returneras eller filtreringsvillkoret kan anges.


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

Returnerar de minsta värdena i listan: `list`. Parametern, `countOrCondition`, anger antalet värden som ska returneras eller ett filtreringsvillkor. Den valfria parametern, `comparisonCriteria`, anger hur värdena i listan ska jämföras.

-   `list`: Listan med värden.
-   `countOrCondition`: Om ett tal anges returneras en lista med upp till `countOrCondition` objekt i stigande ordning. Om ett villkor anges returneras en lista med objekt som inledningsvis uppfyller villkoret. Om ett objekt inte uppfyller villkoret utvärderas inga fler objekt. Om den här parametern är null returneras det enskilt minsta värdet i listan.
-   `comparisonCriteria`: *\[Valfritt\]* Ett valfritt `comparisonCriteria`\-värde kan anges för att fastställa hur objekten i listan ska jämföras. Om den här parametern är null används standardjämförelsefunktionen.


## Examples

### Example #1
Hitta de 5 minsta värdena i listan `{3, 4, 5, -1, 7, 8, 2}`.
```powerquery
List.MinN({3, 4, 5, -1, 7, 8, 2}, 5)
```

Result: 
```powerquery
{-1, 2, 3, 4, 5}
```




## Category
List.Ordering
