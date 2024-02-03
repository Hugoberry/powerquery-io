---
title: Combiner.CombineTextByRanges
---

# Combiner.CombineTextByRanges


## Description

Devuelve una función que combina una lista de texto utilizando las posiciones y longitudes especificadas.


## Syntax

```powerquery
Combiner.CombineTextByRanges(
    ranges as list,
    optional template as text
) as function
```


## Details

Devuelve una función que combina una lista de valores de texto en un solo valor de texto utilizando las posiciones y longitudes de salida especificadas. Una longitud nula indica que se debe incluir el valor de texto completo.


## Examples

### Example #1 
Combine una lista de valores de texto con las posiciones y longitudes de salida especificadas.
```powerquery
Combiner.CombineTextByRanges({{0, 1}, {3, 2}, {6, null}})({"abc", "def", "ghijkl"})
```

Result: 
```powerquery
"a  de ghijkl"
```




## Category
Combiner
