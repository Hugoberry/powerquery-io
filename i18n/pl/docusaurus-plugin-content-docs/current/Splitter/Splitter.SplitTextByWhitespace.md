---
title: Splitter.SplitTextByWhitespace
---

# Splitter.SplitTextByWhitespace


## Description

Zwraca funkcję dzielącą tekst na listę wartości tekstowych w miejscach występowania znaków odstępu.


## Syntax

```powerquery
Splitter.SplitTextByWhitespace(
    optional quoteStyle as QuoteStyle.Type
) as function
```


## Details

Zwraca funkcję dzielącą tekst na listę wartości tekstowych w miejscach występowania znaków odstępu.


## Examples

### Example #1 
Podziel dane wejściowe według białych znaków, traktując cudzysłowy jak dowolny inny znak.
```powerquery
Splitter.SplitTextByWhitespace(QuoteStyle.None)("a b#(tab)c")
```

Result: 
```powerquery
{"a", "b", "c"}
```




## Category
Splitter
