---
title: Splitter.SplitTextByWhitespace
---

# Splitter.SplitTextByWhitespace


## Description

Returnerer en funktion, der opdeler tekst på en liste med tekst ved mellemrum.


## Syntax

```powerquery
Splitter.SplitTextByWhitespace(
    optional quoteStyle as QuoteStyle.Type
) as function
```


## Details

Returnerer en funktion, der opdeler tekst på en liste med tekst ved mellemrum.


## Examples

### Example #1 
Opdel input med hvidt mellemrum, hvor anførselstegn behandles som ethvert andet tegn.
```powerquery
Splitter.SplitTextByWhitespace(QuoteStyle.None)("a b#(tab)c")
```

Result: 
```powerquery
{"a", "b", "c"}
```




## Category
Splitter
