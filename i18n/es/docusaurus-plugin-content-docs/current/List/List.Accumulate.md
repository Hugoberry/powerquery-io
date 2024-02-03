---
title: List.Accumulate
---

# List.Accumulate


## Description

Acumula un valor de resumen de los elementos de la lista.


## Syntax

```powerquery
List.Accumulate(
    list as list,
    seed as any,
    accumulator as function
) as any
```


## Details

Acumula un valor de resumen de los elementos de la lista <code>list</code>, usando <code>accumulator</code>.    Puede establecerse un parámetro opcional de inicialización <code>seed</code>.


## Examples

### Example #1 
Acumula el valor de resumen de los elementos de la lista \{1, 2, 3, 4, 5} usando ((estado, actual)=&gt; estado + actual).
```powerquery
List.Accumulate({1, 2, 3, 4, 5}, 0, (state, current) => state + current)
```

Result: 
```powerquery
15
```




## Category
List.Transformation functions
