---
title: Splitter.SplitTextByRepeatedLengths
---

# Splitter.SplitTextByRepeatedLengths


Retourne une fonction qui fractionne le texte en une liste de textes après la longueur spécifiée, de façon répétée.


## Syntax

```powerquery
Splitter.SplitTextByRepeatedLengths(
    length as number,
    optional startAtEnd as logical
) as function
```


## Remarks

Retourne une fonction qui fractionne le texte en une liste de textes après la longueur spécifiée, de façon répétée.


## Examples

### Example #1 
Diviser de façon répétée l&#39;entrée en morceaux de trois caractères, en commençant par le début de l&#39;entrée
```powerquery
Splitter.SplitTextByRepeatedLengths(3)("12345678")
```

Result: 
```powerquery
{"123", "456", "78"}
```


### Example #2 
Diviser de façon répétée l&#39;entrée en morceaux de trois caractères, en commençant par la fin de l&#39;entrée.
```powerquery
let
    startAtEnd = true
in
    Splitter.SplitTextByRepeatedLengths(3, startAtEnd)("87654321")
```

Result: 
```powerquery
{"87", "654", "321"}
```




## Category
Splitter
