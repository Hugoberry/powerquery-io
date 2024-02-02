---
title: Splitter.SplitTextByDelimiter
---

# Splitter.SplitTextByDelimiter


## Description

Retourne une fonction qui fractionne le texte en une liste de textes selon le délimiteur spécifié.


## Syntax

```powerquery
Splitter.SplitTextByDelimiter(
    delimiter as text,
    optional quoteStyle as QuoteStyle.Type
) as function
```


## Details

Retourne une fonction qui fractionne le texte en une liste de textes selon le délimiteur spécifié.


## Examples

### Example #1 
Divise l&#39;entrée par virgule, en ignorant les virgules citées.
```powerquery
Splitter.SplitTextByDelimiter(",", QuoteStyle.Csv)("a,""b,c"",d")
```

Result: 
```powerquery
{"a", "b,c", "d"}
```




## Category
Splitter
