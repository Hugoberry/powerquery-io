---
title: Comparer.OrdinalIgnoreCase
---

# Comparer.OrdinalIgnoreCase


Returnerer en sammenligningsfunktion, hvor der ikke skelnes mellem store og små bogstaver, og hvor der bruges regler for ordenstal til at sammenligne værdier.


## Syntax

```powerquery
Comparer.OrdinalIgnoreCase(
    x as any,
    y as any
) as number
```


## Remarks

Returnerer en sammenligningsfunktion, hvor der ikke skelnes mellem store og små bogstaver, og som bruger ordenstalsregler til at sammenligne de angivne værdier `x` og `y`.  
  
En sammenligningsfunktion accepterer to argumenter og returnerer -1, 0 eller 1 baseret på, om den første værdi er mindre end, lig med eller større end sekundet.


## Examples

### Example #1
Når der bruges regler for ordenstal, hvor der ikke skelnes mellem store og små bogstaver, kan "Abc" sammenlignes med "abc". Bemærk, at "Abc" er mindre end "abc", når koden `Comparer.Ordinal`. bruges
```powerquery
Comparer.OrdinalIgnoreCase("Abc", "abc")
```

Result: 
```powerquery
0
```




## Category
Comparer
