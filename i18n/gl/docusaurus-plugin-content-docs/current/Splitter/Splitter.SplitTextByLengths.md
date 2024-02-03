---
title: Splitter.SplitTextByLengths
---

# Splitter.SplitTextByLengths


## Description

Devolve unha función que divide texto nunha lista de texto por cada lonxitude especificada.


## Syntax

```powerquery
Splitter.SplitTextByLengths(
    lengths as list,
    optional startAtEnd as logical
) as function
```


## Details

Devolve unha función que divide texto nunha lista de texto por cada lonxitude especificada.


## Examples

### Example #1 
Divide a entrada nos dous primeiros caracteres seguidos dos tres seguintes, comezando dende o principio da entrada.
```powerquery
Splitter.SplitTextByLengths({2, 3})("AB123")
```

Result: 
```powerquery
{"AB", "123"}
```


### Example #2 
Divide a entrada nos tres primeiros caracteres seguidos dos dous seguintes, comezando desde o final da entrada.
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
