---
title: Combiner.CombineTextByPositions
---

# Combiner.CombineTextByPositions


Devuelve una función que combina una lista de texto utilizando las posiciones de salida especificadas.


## Syntax

```powerquery
Combiner.CombineTextByPositions(
    positions as list,
    optional template as text
) as function
```


## Remarks

Devuelve una función que combina una lista de valores de texto en un único valor de texto utilizando el delimitador especificado.


## Examples

### Example #1 
Combine una lista de valores de texto colocándolos en la salida en las posiciones especificadas.
```powerquery
Combiner.CombineTextByPositions({0, 5, 10})({"abc", "def", "ghi"})
```

Result: 
```powerquery
"abc  def  ghi"
```




## Category
Combiner
