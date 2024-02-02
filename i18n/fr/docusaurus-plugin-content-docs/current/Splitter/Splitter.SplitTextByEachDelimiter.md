---
title: Splitter.SplitTextByEachDelimiter
---

# Splitter.SplitTextByEachDelimiter


## Description

Retourne une fonction qui fractionne le texte en une liste de textes au niveau de chaque délimiteur spécifié en séquence.


## Syntax

```powerquery
Splitter.SplitTextByEachDelimiter(
    delimiters as list,
    optional quoteStyle as QuoteStyle.Type,
    optional startAtEnd as logical
) as function
```


## Details

Retourne une fonction qui fractionne le texte en une liste de textes au niveau de chaque délimiteur spécifié en séquence.


## Examples

### Example #1 
Divise l&#39;entrée par une virgule, puis un point-virgule, en commençant par le début de l&#39;entrée.
```powerquery
Splitter.SplitTextByEachDelimiter({",", ";"})("a,b;c,d")
```

Result: 
```powerquery
{"a", "b", "c,d"}
```


### Example #2 
Divise l&#39;entrée par une virgule, puis un point-virgule, en traitant les guillemets comme tout autre caractère et en commençant par la fin de l&#39;entrée.
```powerquery
let
    startAtEnd = true
in
    Splitter.SplitTextByEachDelimiter({",", ";"}, QuoteStyle.None, startAtEnd)("a,""b;c"",d")
```

Result: 
```powerquery
{"a,""b", "c""", "d"}
```




## Category
Splitter
