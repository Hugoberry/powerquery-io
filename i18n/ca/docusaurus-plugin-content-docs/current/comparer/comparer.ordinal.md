---
title: Comparer.Ordinal
---

# Comparer.Ordinal


Retorna una funció de comparador que utilitza normes ordinals per comparar valors.


## Syntax

```powerquery
Comparer.Ordinal(
    x as any,
    y as any
) as number
```


## Remarks

Retorna una funció de comparador que utilitza normes ordinals per comparar els valors proporcionats `x` i `y`.  
  
Una funció de comparador accepta dos arguments i retorna -1, 0 o 1 en funció de si el primer valor és menor, igual o superior al segon.


## Examples

### Example #1
Mitjançant les normes ordinals, compareu si "encyclopædia" i "encyclopaedia" són equivalents. Tingueu en compte que són equivalents amb `Comparer.FromCulture("en-US")`.
```powerquery
Comparer.Equals(Comparer.Ordinal, "encyclopædia", "encyclopaedia")
```

Result: 
```powerquery
false
```




## Category
Comparer
