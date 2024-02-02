---
title: Splitter.SplitTextByAnyDelimiter
---

# Splitter.SplitTextByAnyDelimiter


## Description

Retourne une fonction qui fractionne le texte en une liste de textes au niveau de l&#39;un des délimiteurs spécifiés.


## Syntax

```powerquery
Splitter.SplitTextByAnyDelimiter(
    delimiters as list,
    optional quoteStyle as QuoteStyle.Type,
    optional startAtEnd as logical
) as function
```


## Details

Retourne une fonction qui fractionne le texte en une liste de textes au niveau de l'un des délimiteurs spécifiés.


## Examples

### Example #1 
Divise l&#39;entrée par une virgule ou un point-virgule, en ignorant les guillemets et les délimiteurs de citation et en commençant par le début de l&#39;entrée.
```powerquery
Splitter.SplitTextByAnyDelimiter({",", ";"}, QuoteStyle.Csv)("a,b;""c,d;e"",f")
```

Result: 
```powerquery
{"a", "b", "c,d;e", "f"}
```


### Example #2 
Divise l&#39;entrée par une virgule ou un point-virgule, en ignorant les guillemets et les délimiteurs de citation et en commençant par la fin de l&#39;entrée.
```powerquery
let
    startAtEnd = true
in
    Splitter.SplitTextByAnyDelimiter({",", ";"}, QuoteStyle.Csv, startAtEnd)("a,""b;c,d")
```

Result: 
```powerquery
{"a,b", "c", "d"}
```




## Category
Splitter
