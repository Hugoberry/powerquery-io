---
title: Splitter.SplitTextByWhitespace
---

# Splitter.SplitTextByWhitespace


## Description

Vrne funkcijo, ki razdeli besedilo v seznam besedila pri presledku.


## Syntax

```powerquery
Splitter.SplitTextByWhitespace(
    optional quoteStyle as QuoteStyle.Type
) as function
```


## Details

Vrne funkcijo, ki razdeli besedilo v seznam besedila pri presledku.


## Examples

### Example #1 
Razdelite vnos s presledki in obravnavajte narekovaje kot kateri koli drug znak.
```powerquery
Splitter.SplitTextByWhitespace(QuoteStyle.None)("a b#(tab)c")
```

Result: 
```powerquery
{"a", "b", "c"}
```




## Category
Splitter
