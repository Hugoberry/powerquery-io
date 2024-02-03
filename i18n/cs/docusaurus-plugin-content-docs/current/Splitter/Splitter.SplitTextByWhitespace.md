---
title: Splitter.SplitTextByWhitespace
---

# Splitter.SplitTextByWhitespace


## Description

Vrátí funkci, která rozdělí text na seznam textových hodnot na základě mezer.


## Syntax

```powerquery
Splitter.SplitTextByWhitespace(
    optional quoteStyle as QuoteStyle.Type
) as function
```


## Details

Vrátí funkci, která rozdělí text na seznam textových hodnot na základě mezer.


## Examples

### Example #1 
Rozdělte vstup prázdnými znaky, zpracovávat uvozovky jako jakýkoli jiný znak.
```powerquery
Splitter.SplitTextByWhitespace(QuoteStyle.None)("a b#(tab)c")
```

Result: 
```powerquery
{"a", "b", "c"}
```




## Category
Splitter
