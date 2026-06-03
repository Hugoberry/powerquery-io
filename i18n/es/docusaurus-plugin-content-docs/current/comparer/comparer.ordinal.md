---
title: Comparer.Ordinal
---

# Comparer.Ordinal


Devuelve una función de comparador que usa reglas ordinales para comparar valores.


## Syntax

```powerquery
Comparer.Ordinal(
    x as any,
    y as any
) as number
```


## Remarks

Devuelve una función comparadora que utiliza reglas ordinales para comparar los valores proporcionados `x` y `y`.  
  
Una función comparadora acepta dos argumentos y devuelve -1, 0 o 1 en función de si el primer valor es menor, igual o mayor que el segundo.


## Examples

### Example #1
Usando reglas ordinales, compare si "encyclopædia" y "encyclopaedia" son equivalentes. Tenga en cuenta que son equivalentes si se usa `Comparer.FromCulture("en-US")`.
```powerquery
Comparer.Equals(Comparer.Ordinal, "encyclopædia", "encyclopaedia")
```

Result: 
```powerquery
false
```




## Category
Comparer
