---
title: Splitter.SplitTextByWhitespace
---

# Splitter.SplitTextByWhitespace


## Description

Vráti funkciu, ktorá rozdelí text do zoznamu textu v prázdnom znaku.


## Syntax

```powerquery
Splitter.SplitTextByWhitespace(
    optional quoteStyle as QuoteStyle.Type
) as function
```


## Details

Vráti funkciu, ktorá rozdelí text do zoznamu textu v prázdnom znaku.


## Examples

### Example #1 
Rozdelí vstup prázdnymi znakmi a spracuje úvodzovky ako akýkoľvek iný znak.
```powerquery
Splitter.SplitTextByWhitespace(QuoteStyle.None)("a b#(tab)c")
```

Result: 
```powerquery
{"a", "b", "c"}
```




## Category
Splitter
