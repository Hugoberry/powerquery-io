---
title: Comparer.Equals
---

# Comparer.Equals


Returnerer en logisk værdi på baggrund af lighedskontrollen af de to angivne værdier.


## Syntax

```powerquery
Comparer.Equals(
    comparer as function,
    x as any,
    y as any
) as logical
```


## Remarks

Returnerer en `logisk` værdi baseret på lighedskontrol af de to angivne værdier, `x` og `y`, ved hjælp af den angivne `comparer`.

`comparer` er en `Comparer` som bruges til at styre sammenligningen. En sammenligningsfunktion er en funktion, der accepterer to argumenter og returnerer -1, 0 eller 1 baseret på, om den første værdi er mindre end, lig med eller større end sekundet. Sammenligninger kan bruges til at skelne mellem store og små bogstaver eller kultur- og landestandardafhængige sammenligninger.

Følgende indbyggede sammenligningsfunktioner er tilgængelige på formelsproget:

-   `Comparer.Ordinal`: Bruges til at udføre en nøjagtig sammenligning af ordenstal
-   `Comparer.OrdinalIgnoreCase`: Bruges til at udføre en nøjagtig sammenligning, hvor der ikke skelnes mellem store og små bogstaver
-   `Comparer.FromCulture`: Bruges til at udføre en kulturorienteret sammenligning


## Examples

### Example #1
Sammenlign "1" og "A" ved hjælp af landestandarden "en-US" for at se, om værdierne er de samme.
```powerquery
Comparer.Equals(Comparer.FromCulture("en-US"), "1", "A")
```

Result: 
```powerquery
false
```




## Category
Comparer
