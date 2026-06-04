---
title: Comparer.OrdinalIgnoreCase
---

# Comparer.OrdinalIgnoreCase


Retorna una funció de comparador sense distinció de majúscules i minúscules que utilitza normes ordinals per comparar valors.


## Syntax

```powerquery
Comparer.OrdinalIgnoreCase(
    x as any,
    y as any
) as number
```


## Remarks

Retorna una funció de comparador que no distingeix entre majúscules i minúscules que utilitza normes ordinals per comparar els valors proporcionats `x` i `y`.  
  
Una funció de comparador accepta dos arguments i retorna -1, 0 o 1 en funció de si el primer valor és menor, igual o superior al segon.


## Examples

### Example #1
Utilitzeu normes ordinals sense distinció de majúscules i minúscules per comparar "Abc" amb "abc". Nota: "Abc" és menys que "abc" amb `Comparer.Ordinal`.
```powerquery
Comparer.OrdinalIgnoreCase("Abc", "abc")
```

Result: 
```powerquery
0
```




## Category
Comparer
