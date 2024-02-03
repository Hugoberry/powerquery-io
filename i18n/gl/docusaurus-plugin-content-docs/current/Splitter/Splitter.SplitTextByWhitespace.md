---
title: Splitter.SplitTextByWhitespace
---

# Splitter.SplitTextByWhitespace


## Description

Devolve unha función que divide texto nunha lista de texto no espazo en branco.


## Syntax

```powerquery
Splitter.SplitTextByWhitespace(
    optional quoteStyle as QuoteStyle.Type
) as function
```


## Details

Devolve unha función que divide texto nunha lista de texto no espazo en branco.


## Examples

### Example #1 
Divide a entrada por espazos en branco, tratando as comiñas como calquera outro carácter.
```powerquery
Splitter.SplitTextByWhitespace(QuoteStyle.None)("a b#(tab)c")
```

Result: 
```powerquery
{"a", "b", "c"}
```




## Category
Splitter
