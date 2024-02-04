---
title: Combiner.CombineTextByRanges
---

# Combiner.CombineTextByRanges


## Description

Devolve uma função que combina uma lista de texto ao utilizar as posições e comprimentos especificados.


## Syntax

```powerquery
Combiner.CombineTextByRanges(
    ranges as list,
    optional template as text
) as function
```


## Details

Devolve uma função que combina uma lista de valores de texto num único valor de texto ao utilizar as posições e comprimentos de saída especificados. Um comprimento nulo indica que todo o valor de texto deverá ser incluído.


## Examples

### Example #1 
Combine uma lista de valores de texto ao utilizar as posições e comprimentos de saída especificados.
```powerquery
Combiner.CombineTextByRanges({{0, 1}, {3, 2}, {6, null}})({"abc", "def", "ghijkl"})
```

Result: 
```powerquery
"a  de ghijkl"
```




## Category
Combiner
