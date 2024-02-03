---
title: Combiner.CombineTextByPositions
---

# Combiner.CombineTextByPositions


## Description

Devolve unha función que combina unha lista de texto utilizando as posicións de saída especificadas.


## Syntax

```powerquery
Combiner.CombineTextByPositions(
    positions as list,
    optional template as text
) as function
```


## Details

Devolve unha función que combina unha lista de valores de texto nun valor de texto único mediante as posicións de saída.


## Examples

### Example #1 
Combina unha lista de valores de texto colocándoos na saída nas posicións especificadas.
```powerquery
Combiner.CombineTextByPositions({0, 5, 10})({"abc", "def", "ghi"})
```

Result: 
```powerquery
"abc  def  ghi"
```




## Category
Combiner
