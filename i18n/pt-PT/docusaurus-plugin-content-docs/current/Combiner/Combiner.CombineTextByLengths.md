---
title: Combiner.CombineTextByLengths
---

# Combiner.CombineTextByLengths


Devolve uma função que combina uma lista de texto ao utilizar os comprimentos especificados.


## Syntax

```powerquery
Combiner.CombineTextByLengths(
    lengths as list,
    optional template as text
) as function
```


## Remarks

Devolve uma função que combina uma lista de valores de texto num único valor de texto, ao utilizar os comprimentos especificados.


## Examples

### Example #1 
Combine uma lista de valores de texto ao extrair os números de carateres especificados de cada valor de entrada.
```powerquery
Combiner.CombineTextByLengths({1, 2, 3})({"aaa", "bbb", "ccc"})
```

Result: 
```powerquery
"abbccc"
```


### Example #2 
Combine uma lista de valores de texto ao extrair os números de carateres especificados, depois de pré-preencher previamente o resultado com o texto do modelo.
```powerquery
Combiner.CombineTextByLengths({1, 2, 3}, "*********")({"aaa", "bbb", "ccc"})
```

Result: 
```powerquery
"abbccc***"
```




## Category
Combiner
