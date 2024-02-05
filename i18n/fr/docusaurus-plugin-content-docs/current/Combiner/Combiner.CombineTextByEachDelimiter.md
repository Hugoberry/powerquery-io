---
title: Combiner.CombineTextByEachDelimiter
---

# Combiner.CombineTextByEachDelimiter


## Description

Renvoie une fonction qui combine une liste de texte à l&#39;aide d&#39;une séquence de délimiteurs.


## Syntax

```powerquery
Combiner.CombineTextByEachDelimiter(
    delimiters as list,
    optional quoteStyle as QuoteStyle.Type
) as function
```


## Details

Renvoie une fonction qui combine une liste de valeurs de texte en une seule valeur de texte à l'aide d'une séquence de délimiteurs.


## Examples

### Example #1 
Combinez une liste de valeurs de texte à l&#39;aide d&#39;une séquence de délimiteurs.
```powerquery
Combiner.CombineTextByEachDelimiter({"=", "+"})({"a", "b", "c"})
```

Result: 
```powerquery
"a=b+c"
```




## Category
Combiner
