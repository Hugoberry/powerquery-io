---
title: Splitter.SplitTextByLengths
---

# Splitter.SplitTextByLengths


Retorna uma função que divide o texto em uma lista de texto por cada comprimento especificado.


## Syntax

```powerquery
Splitter.SplitTextByLengths(
    lengths as list,
    optional startAtEnd as logical
) as function
```


## Remarks

Retorna uma função que divide o texto em uma lista de texto por cada comprimento especificado.


## Examples

### Example #1 
Divida a entrada nos dois primeiros caracteres seguidos pelos três próximos, começando do início da entrada.
```powerquery
Splitter.SplitTextByLengths({2, 3})("AB123")
```

Result: 
```powerquery
{"AB", "123"}
```


### Example #2 
Divida a entrada nos três primeiros caracteres seguidos pelos dois próximos, começando no final da entrada.
```powerquery
let
    startAtEnd = true
in
    Splitter.SplitTextByLengths({5, 2}, startAtEnd)("RedmondWA98052")
```

Result: 
```powerquery
{"WA", "98052"}
```




## Category
Splitter
