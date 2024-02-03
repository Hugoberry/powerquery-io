---
title: List.MaxN
---

# List.MaxN


## Description

Returnerar de största värdena i listan. Antalet värden som ska returneras eller filtreringsvillkoret måste anges.


## Syntax

```powerquery
List.MaxN(
    list as list,
    countOrCondition as any,
    optional comparisonCriteria as any,
    optional includeNulls as logical
) as list
```


## Details

Returnerar de största värdena i listan <code>list</code>.    När raderna har sorterats kan valfria parametrar anges för att filtrera resultatet ytterligare. Den valfria parametern <code>countOrCondition</code>, anger antalet värden som ska returneras eller ett filtreringsvillkor. Den valfria parametern <code>comparisonCriteria</code>, anger hur värdena i listan ska jämföras. <ul>        <li> <code>list</code>: Listan med värden.</li>        <li> <code>countOrCondition</code>: Om ett tal anges returneras en lista med upp till <code>countOrCondition</code> objekt i stigande ordning. Om ett villkor anges returneras en lista med objekt som inledningsvis uppfyller villkoret. Om ett objekt inte uppfyller villkoret utvärderas inga fler objekt.</li><li><code>comparisonCriteria</code>: <i>[Valfritt]</i> Ett valfritt <code>comparisonCriteria</code>-värde kan anges för att fastställa hur objekten i listan ska jämföras. Om den här parametern är null används standardjämförelsefunktionen.  </li></ul>



## Category
List.Ordering
