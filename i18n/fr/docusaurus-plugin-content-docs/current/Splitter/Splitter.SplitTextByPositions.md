---
title: Splitter.SplitTextByPositions
---

# Splitter.SplitTextByPositions


Retourne une fonction qui fractionne le texte en une liste de textes à chaque position spécifiée.


## Syntax

```powerquery
Splitter.SplitTextByPositions(
    positions as list,
    optional startAtEnd as logical
) as function
```


## Remarks

Retourne une fonction qui fractionne le texte en une liste de textes à chaque position spécifiée.


## Examples

### Example #1 
Divise l&#39;entrée aux positions spécifiées, en commençant par le début de l&#39;entrée.
```powerquery
Splitter.SplitTextByPositions({0, 3, 4})("ABC|12345")
```

Result: 
```powerquery
{"ABC", "|", "12345"}
```


### Example #2 
Divise l&#39;entrée aux positions spécifiées, en commençant par la fin de l&#39;entrée.
```powerquery
let
    startAtEnd = true
in
    Splitter.SplitTextByPositions({0, 5}, startAtEnd)("Redmond98052")
```

Result: 
```powerquery
{"Redmond", "98052"}
```




## Category
Splitter
