---
title: Splitter.SplitTextByWhitespace
---

# Splitter.SplitTextByWhitespace


Retourne une fonction qui fractionne le texte en une liste de textes au niveau de l'espace.


## Syntax

```powerquery
Splitter.SplitTextByWhitespace(
    optional quoteStyle as QuoteStyle.Type
) as function
```


## Remarks

Retourne une fonction qui fractionne le texte en une liste de textes au niveau de l'espace.


## Examples

### Example #1
Divise l'entrée par les caractères d'espacement, en traitant les guillemets comme n'importe quel autre caractère.
```powerquery
Splitter.SplitTextByWhitespace(QuoteStyle.None)("a b#(tab)c")
```

Result: 
```powerquery
{"a", "b", "c"}
```




## Category
Splitter
