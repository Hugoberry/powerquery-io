---
title: Splitter.SplitTextByWhitespace
---

# Splitter.SplitTextByWhitespace


## Description

Devuelve una función que divide el texto en una lista de texto con los espacios en blanco.


## Syntax

```powerquery
Splitter.SplitTextByWhitespace(
    optional quoteStyle as QuoteStyle.Type
) as function
```


## Details

Devuelve una función que divide el texto en una lista de texto con los espacios en blanco.


## Examples

### Example #1 
Divida la entrada por espacios en blanco y trata las comillas como cualquier otro carácter.
```powerquery
Splitter.SplitTextByWhitespace(QuoteStyle.None)("a b#(tab)c")
```

Result: 
```powerquery
{"a", "b", "c"}
```




## Category
Splitter
