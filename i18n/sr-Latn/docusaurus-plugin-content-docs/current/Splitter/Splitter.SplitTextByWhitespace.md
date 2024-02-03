---
title: Splitter.SplitTextByWhitespace
---

# Splitter.SplitTextByWhitespace


## Description

Vraća funkciju koja deli tekst na listu teksta kod razmaka.


## Syntax

```powerquery
Splitter.SplitTextByWhitespace(
    optional quoteStyle as QuoteStyle.Type
) as function
```


## Details

Vraća funkciju koja deli tekst na listu teksta kod razmaka.


## Examples

### Example #1 
Razdelite unos po znakovima razmaka, tretirajući navodnike kao bilo koji drugi znak.
```powerquery
Splitter.SplitTextByWhitespace(QuoteStyle.None)("a b#(tab)c")
```

Result: 
```powerquery
{"a", "b", "c"}
```




## Category
Splitter
