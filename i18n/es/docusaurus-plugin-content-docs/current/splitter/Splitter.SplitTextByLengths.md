---
title: Splitter.SplitTextByLengths
---

# Splitter.SplitTextByLengths


Devuelve una función que divide el texto en una lista de texto de cada longitud especificada.


## Syntax

```powerquery
Splitter.SplitTextByLengths(
    lengths as list,
    optional startAtEnd as logical
) as function
```


## Remarks

Devuelve una función que divide el texto en una lista de texto de cada longitud especificada.


## Examples

### Example #1 
Divida la entrada en los dos primeros caracteres seguidos de los tres siguientes, empezando desde el principio de la entrada.
```powerquery
Splitter.SplitTextByLengths({2, 3})("AB123")
```

Result: 
```powerquery
{"AB", "123"}
```


### Example #2 
Divida la entrada en los tres primeros caracteres seguidos de los dos siguientes, empezando desde el final de la entrada.
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
