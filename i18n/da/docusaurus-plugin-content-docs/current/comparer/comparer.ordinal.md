---
title: Comparer.Ordinal
---

# Comparer.Ordinal


Returnerer en sammenligningsfunktion, som bruger regler for ordenstal til sammenligning af værdier.


## Syntax

```powerquery
Comparer.Ordinal(
    x as any,
    y as any
) as number
```


## Remarks

Returnerer en sammenligningsfunktion, der bruger ordensregler til at sammenligne de angivne værdier `x` og `y`.  
  
En sammenligningsfunktion accepterer to argumenter og returnerer -1, 0 eller 1 baseret på, om den første værdi er mindre end, lig med eller større end den anden.


## Examples

### Example #1
Ved hjælp af regler for ordenstal skal du sammenligne "encyclopædia" med "encyclopaedia", for at se, om de er ækvivalenter. Bemærk, at de er ækvivalenter, når du bruger `Comparer.FromCulture("en-US")`.
```powerquery
Comparer.Equals(Comparer.Ordinal, "encyclopædia", "encyclopaedia")
```

Result: 
```powerquery
false
```




## Category
Comparer
