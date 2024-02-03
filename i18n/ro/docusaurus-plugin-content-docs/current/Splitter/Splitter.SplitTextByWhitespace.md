---
title: Splitter.SplitTextByWhitespace
---

# Splitter.SplitTextByWhitespace


## Description

Returnează o funcţie care divizează textul într-o listă de text la un spaţiu gol.


## Syntax

```powerquery
Splitter.SplitTextByWhitespace(
    optional quoteStyle as QuoteStyle.Type
) as function
```


## Details

Returnează o funcţie care divizează textul într-o listă de text la un spaţiu gol.


## Examples

### Example #1 
Divizează intrarea după caractere de spații albe, tratând ghilimelele ca orice alt caracter.
```powerquery
Splitter.SplitTextByWhitespace(QuoteStyle.None)("a b#(tab)c")
```

Result: 
```powerquery
{"a", "b", "c"}
```




## Category
Splitter
