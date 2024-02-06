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

Returnerar de minsta värdena i listan: <code>list</code>.    Parametern, <code>countOrCondition</code>, anger antalet värden som ska returneras eller ett filtreringsvillkor. Den valfria parametern, <code>comparisonCriteria</code>, anger hur värdena i listan ska jämföras. <ul>        <li> <code>list</code>: Listan med värden.</li>        <li> <code>countOrCondition</code>: Om ett tal anges returneras en lista med upp till <code>countOrCondition</code> objekt i stigande ordning. Om ett villkor anges returneras en lista med objekt som inledningsvis uppfyller villkoret. Om ett objekt inte uppfyller villkoret utvärderas inga fler objekt. Om den här parametern är null returneras det enskilt minsta värdet i listan.</li><li><code>comparisonCriteria</code>: <i>[Valfritt]</i> Ett valfritt <code>comparisonCriteria</code>-värde kan anges för att fastställa hur objekten i listan ska jämföras. Om den här parametern är null används standardjämförelsefunktionen.  </li></ul>


## Examples

### Example #1 
Hitta de 5 minsta värdena i listan &lt;code&gt;\{3, 4, 5, -1, 7, 8, 2}&lt;/code&gt;.
```powerquery
List.MinN({3, 4, 5, -1, 7, 8, 2}, 5)
```

Result: 
```powerquery
{-1, 2, 3, 4, 5}
```




## Category
List.Ordering
