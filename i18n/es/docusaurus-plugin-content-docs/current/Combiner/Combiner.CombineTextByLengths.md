---
title: Combiner.CombineTextByLengths
---

# Combiner.CombineTextByLengths


## Description

Devuelve una función que combina una lista de texto con las longitudes especificadas.


## Syntax

```powerquery
Combiner.CombineTextByLengths(
    lengths as list,
    optional template as text
) as function
```


## Details

Devuelve una función que combina una lista de valores de texto en un solo valor de texto utilizando las longitudes especificadas.


## Examples

### Example #1 
Combine una lista de valores de texto extrayendo los números de caracteres especificados de cada valor de entrada.
```powerquery
Combiner.CombineTextByLengths({1, 2, 3})({"aaa", "bbb", "ccc"})
```

Result: 
```powerquery
"abbccc"
```


### Example #2 
Combine una lista de valores de texto extrayendo los números de caracteres especificados, después de rellenar previamente el resultado con el texto de la plantilla.
```powerquery
Combiner.CombineTextByLengths({1, 2, 3}, "*********")({"aaa", "bbb", "ccc"})
```

Result: 
```powerquery
"abbccc***"
```




## Category
Combiner
