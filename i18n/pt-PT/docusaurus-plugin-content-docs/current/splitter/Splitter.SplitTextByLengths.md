---
title: Splitter.SplitTextByLengths
---

# Splitter.SplitTextByLengths


Devolve uma função que divide texto numa lista de texto por cada comprimento especificado.


## Syntax

```powerquery
Splitter.SplitTextByLengths(
    lengths as list,
    optional startAtEnd as logical
) as function
```


## Remarks

Devolve uma função que divide texto numa lista de texto por cada comprimento especificado.


## Examples

### Example #1 
Divida a entrada nos dois primeiros caracteres seguidos dos três seguintes, a partir do início da entrada.
```powerquery
Splitter.SplitTextByLengths({2, 3})("AB123")
```

Result: 
```powerquery
{"AB", "123"}
```


### Example #2 
Divida a entrada nos três primeiros caracteres seguidos dos dois seguintes, a partir do fim da entrada.
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
