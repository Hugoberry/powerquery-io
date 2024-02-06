---
title: Combiner.CombineTextByPositions
---

# Combiner.CombineTextByPositions


Retorna uma função que combina uma lista de texto usando posições de saída especificadas.


## Syntax

```powerquery
Combiner.CombineTextByPositions(
    positions as list,
    optional template as text
) as function
```


## Remarks

Retorna uma função que combina uma lista de texto em um valor de texto único usando o posições de saída especificados.


## Examples

### Example #1 
Combina uma lista de valores de texto colocando-os na saída nas posições especificadas.
```powerquery
Combiner.CombineTextByPositions({0, 5, 10})({"abc", "def", "ghi"})
```

Result: 
```powerquery
"abc  def  ghi"
```




## Category
Combiner
