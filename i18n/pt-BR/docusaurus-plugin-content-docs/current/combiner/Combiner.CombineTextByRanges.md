---
title: Combiner.CombineTextByRanges
---

# Combiner.CombineTextByRanges


Retorna uma função que combina uma lista de texto usando as posições e os comprimentos especificados.


## Syntax

```powerquery
Combiner.CombineTextByRanges(
    ranges as list,
    optional template as text
) as function
```


## Remarks

Retorna uma função que combina uma lista de texto em um valor de texto único usando o posições de saída e comprimentos especificados. Um comprimento nulo indica que todo o valor do texto deve ser incluído.


## Examples

### Example #1 
Combina uma lista de valores de texto usando as posições e os comprimentos de saída especificados.
```powerquery
Combiner.CombineTextByRanges({{0, 1}, {3, 2}, {6, null}})({"abc", "def", "ghijkl"})
```

Result: 
```powerquery
"a  de ghijkl"
```




## Category
Combiner
