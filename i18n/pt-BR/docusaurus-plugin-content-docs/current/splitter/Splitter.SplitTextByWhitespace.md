---
title: Splitter.SplitTextByWhitespace
---

# Splitter.SplitTextByWhitespace


Retorna uma função que divide o texto em uma lista de texto em espaço em branco.


## Syntax

```powerquery
Splitter.SplitTextByWhitespace(
    optional quoteStyle as QuoteStyle.Type
) as function
```


## Remarks

Retorna uma função que divide o texto em uma lista de texto em espaço em branco.


## Examples

### Example #1 
Divida a entrada por caracteres de espaço em branco, tratando aspas como qualquer outro caractere.
```powerquery
Splitter.SplitTextByWhitespace(QuoteStyle.None)("a b#(tab)c")
```

Result: 
```powerquery
{"a", "b", "c"}
```




## Category
Splitter
