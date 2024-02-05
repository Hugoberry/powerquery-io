---
title: Splitter.SplitTextByWhitespace
---

# Splitter.SplitTextByWhitespace


## Description

Returnerar en funktion som delar upp text i en lista med text vid blanksteg.


## Syntax

```powerquery
Splitter.SplitTextByWhitespace(
    optional quoteStyle as QuoteStyle.Type
) as function
```


## Details

Returnerar en funktion som delar upp text i en lista med text vid blanksteg.


## Examples

### Example #1 
Dela indata med blankstegstecken och behandla citattecken som andra tecken.
```powerquery
Splitter.SplitTextByWhitespace(QuoteStyle.None)("a b#(tab)c")
```

Result: 
```powerquery
{"a", "b", "c"}
```




## Category
Splitter
