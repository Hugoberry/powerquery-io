---
title: Combiner.CombineTextByLengths
---

# Combiner.CombineTextByLengths


## Description

Devolve unha función que combina unha lista de texto utilizando as lonxitudes especificadas.


## Syntax

```powerquery
Combiner.CombineTextByLengths(
    lengths as list,
    optional template as text
) as function
```


## Details

Devolve unha función que combina unha lista de valores de texto nun valor de texto único mediante as lonxitudes especificadas.


## Examples

### Example #1 
Combina unha lista dos valores de texto extraendo os números especificados de caracteres de cada valor de entrada.
```powerquery
Combiner.CombineTextByLengths({1, 2, 3})({"aaa", "bbb", "ccc"})
```

Result: 
```powerquery
"abbccc"
```


### Example #2 
Combina unha lista de valores de texto extraendo os números especificados de caracteres, despois de preencher o resultado co texto do modelo.
```powerquery
Combiner.CombineTextByLengths({1, 2, 3}, "*********")({"aaa", "bbb", "ccc"})
```

Result: 
```powerquery
"abbccc***"
```




## Category
Combiner
