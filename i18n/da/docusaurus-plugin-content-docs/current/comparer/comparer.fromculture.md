---
title: Comparer.FromCulture
---

# Comparer.FromCulture


Returnerer en sammenligningsfunktion baseret på den angivne kultur og forskel på store og små bogstaver.


## Syntax

```powerquery
Comparer.FromCulture(
    culture as text,
    optional ignoreCase as logical
) as function
```


## Remarks

Returnerer en sammenligningsfunktion, der bruger `culture` og den forskel på store og små bogstaver, der er angivet af `ignoreCase` til at udføre sammenligninger.  
  
En sammenligningsfunktion accepterer to argumenter og returnerer -1, 0 eller 1 baseret på, om den første værdi er mindre end, lig med eller større end den anden  
  
Standardværdien for `ignoreCase` er false. `culture` skal være en af de landestandarder, der understøttes af .NET Framework (f.eks. "en-US").


## Examples

### Example #1
Sammenlign "a" og "A" ved hjælp af landestandarden "en-US" for at se, om værdierne er de samme.
```powerquery
Comparer.FromCulture("en-US")("a", "A")
```

Result: 
```powerquery
-1
```


### Example #2
Sammenlign "a" og "A" ved hjælp af landestandarden "en-US", hvor der ikke skelnes mellem store og små bogstaver, for at se, om værdierne er de samme.
```powerquery
Comparer.FromCulture("en-US", true)("a", "A")
```

Result: 
```powerquery
0
```




## Category
Comparer
