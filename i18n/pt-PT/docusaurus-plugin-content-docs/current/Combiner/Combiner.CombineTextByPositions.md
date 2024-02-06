---
title: Combiner.CombineTextByPositions
---

# Combiner.CombineTextByPositions


Devolve uma função que combina uma lista de texto ao utilizar as posições de saída especificadas.


## Syntax

```powerquery
Combiner.CombineTextByPositions(
    positions as list,
    optional template as text
) as function
```


## Remarks

Devolve uma função que combina uma lista de valores de texto num único valor de texto, ao utilizar as posições de saída especificadas.


## Examples

### Example #1 
Combine uma lista de valores de texto ao colocá-los na saída nas posições especificadas.
```powerquery
Combiner.CombineTextByPositions({0, 5, 10})({"abc", "def", "ghi"})
```

Result: 
```powerquery
"abc  def  ghi"
```




## Category
Combiner
