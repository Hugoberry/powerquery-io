---
title: Combiner.CombineTextByLengths
---

# Combiner.CombineTextByLengths


## Description

Retorna uma função que combina uma lista de texto usando os comprimentos especificados.


## Syntax

```powerquery
Combiner.CombineTextByLengths(
    lengths as list,
    optional template as text
) as function
```


## Details

Retorna uma função que combina uma lista de valores de texto em um único valor de texto usando os comprimentos especificados.


## Examples

### Example #1 
Combina uma lista de valores de texto extraindo os números de caracteres especificados de cada valor de entrada.
```powerquery
Combiner.CombineTextByLengths({1, 2, 3})({"aaa", "bbb", "ccc"})
```

Result: 
```powerquery
"abbccc"
```


### Example #2 
Combina uma lista de valores de texto extraindo os números de caracteres especificados, após o primeiro pré-preenchimento do resultado com o texto do modelo.
```powerquery
Combiner.CombineTextByLengths({1, 2, 3}, "*********")({"aaa", "bbb", "ccc"})
```

Result: 
```powerquery
"abbccc***"
```




## Category
Combiner
