---
title: Combiner.CombineTextByRanges
---

# Combiner.CombineTextByRanges


## Description

Devolve unha función que combina unha lista de texto utilizando as posicións e lonxitudes especificadas.


## Syntax

```powerquery
Combiner.CombineTextByRanges(
    ranges as list,
    optional template as text
) as function
```


## Details

Devolve unha función que combina unha lista de valores de texto nun valor de texto único mediante as posicións e lonxitudes de saída. Unha lonxitude nula indica que se debe incluír todo o valor do texto.


## Examples

### Example #1 
Combina unha lista dos valores de texto usando as posicións e lonxitudes de saída especificadas.
```powerquery
Combiner.CombineTextByRanges({{0, 1}, {3, 2}, {6, null}})({"abc", "def", "ghijkl"})
```

Result: 
```powerquery
"a  de ghijkl"
```




## Category
Combiner
