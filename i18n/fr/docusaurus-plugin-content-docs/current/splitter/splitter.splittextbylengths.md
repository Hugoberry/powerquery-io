---
title: Splitter.SplitTextByLengths
---

# Splitter.SplitTextByLengths


Retourne une fonction qui fractionne le texte en une liste de textes en fonction de chaque longueur spécifiée.


## Syntax

```powerquery
Splitter.SplitTextByLengths(
    lengths as list,
    optional startAtEnd as logical
) as function
```


## Remarks

Retourne une fonction qui fractionne le texte en une liste de textes en fonction de chaque longueur spécifiée.


## Examples

### Example #1 
Divise l&#39;entrée en deux caractères suivis des trois suivants, en commençant par le début de l&#39;entrée.
```powerquery
Splitter.SplitTextByLengths({2, 3})("AB123")
```

Result: 
```powerquery
{"AB", "123"}
```


### Example #2 
Divise l&#39;entrée en trois premiers caractères suivis des deux suivants, en commençant par la fin de l&#39;entrée.
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
