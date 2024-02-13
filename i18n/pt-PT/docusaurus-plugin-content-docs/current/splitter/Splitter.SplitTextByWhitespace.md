---
title: Splitter.SplitTextByWhitespace
---

# Splitter.SplitTextByWhitespace


Devolve uma função que divide texto numa lista de texto no espaço em branco.


## Syntax

```powerquery
Splitter.SplitTextByWhitespace(
    optional quoteStyle as QuoteStyle.Type
) as function
```


## Remarks

Devolve uma função que divide texto numa lista de texto no espaço em branco.


## Examples

### Example #1 
Divida a entrada por carateres de espaço em branco, ao tratar as aspas como qualquer outro caráter.
```powerquery
Splitter.SplitTextByWhitespace(QuoteStyle.None)("a b#(tab)c")
```

Result: 
```powerquery
{"a", "b", "c"}
```




## Category
Splitter
