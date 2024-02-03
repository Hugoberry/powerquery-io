---
title: Splitter.SplitTextByWhitespace
---

# Splitter.SplitTextByWhitespace


## Description

Pateikiama funkcija, kuri išskaido tekstą į teksto sąrašą ties tarpu.


## Syntax

```powerquery
Splitter.SplitTextByWhitespace(
    optional quoteStyle as QuoteStyle.Type
) as function
```


## Details

Pateikiama funkcija, kuri išskaido tekstą į teksto sąrašą ties tarpu.


## Examples

### Example #1 
Išskaidykite įvestį tarpo simboliais, kabutes traktuodami kaip bet kurį kitą simbolį.
```powerquery
Splitter.SplitTextByWhitespace(QuoteStyle.None)("a b#(tab)c")
```

Result: 
```powerquery
{"a", "b", "c"}
```




## Category
Splitter
