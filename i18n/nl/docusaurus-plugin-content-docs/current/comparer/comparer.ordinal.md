---
title: Comparer.Ordinal
---

# Comparer.Ordinal


Retourneert een vergelijkingsfunctie waarbij rangtelwoordregels worden gebruikt om waarden te vergelijken.


## Syntax

```powerquery
Comparer.Ordinal(
    x as any,
    y as any
) as number
```


## Remarks

Hiermee wordt een vergelijkingsfunctie geretourneerd die rangtelwoordregels gebruikt om de opgegeven waarden `x` en `y` te vergelijken.  
  
Een vergelijkingsfunctie accepteert twee argumenten en retourneert -1, 0 of 1 op basis van of de eerste waarde kleiner dan, gelijk aan of groter is dan de tweede.


## Examples

### Example #1
Vergelijk aan de hand van rangtelwoordregels of 'encyclopædia' en 'encyclopaedia' equivalent zijn. Houd er rekening mee dat deze equivalent zijn met `Comparer.FromCulture("en-US")`.
```powerquery
Comparer.Equals(Comparer.Ordinal, "encyclopædia", "encyclopaedia")
```

Result: 
```powerquery
false
```




## Category
Comparer
