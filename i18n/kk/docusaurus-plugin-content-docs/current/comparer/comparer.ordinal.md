---
title: Comparer.Ordinal
---

# Comparer.Ordinal


Мәндерді салыстыру үшін реттік ережелерді пайдаланатын салыстыру функциясын береді.


## Syntax

```powerquery
Comparer.Ordinal(
    x as any,
    y as any
) as number
```


## Remarks

Көрсетілген `x` және `y` мәндерін салыстыру үшін реттік ережелерді пайдаланатын салыстыру функциясын қайтарады.  
  
Салыстыру функциясы екі аргументті қабылдайды және егер бірінші мән сәйкесінше екіншісінен кіші, оған тең немесе үлкен болса -1, 0 немесе 1 мәнін қайтарады.


## Examples

### Example #1
Реттік ережелерді пайдалана отырып, "encyclopædia" және "encyclopaedia" мәндері эквивалентті екендігін анықтау. Бұл `Comparer.FromCulture("en-US")` пайдаланған кезде эквивалентті екендігін ескеріңіз.
```powerquery
Comparer.Equals(Comparer.Ordinal, "encyclopædia", "encyclopaedia")
```

Result: 
```powerquery
false
```




## Category
Comparer
