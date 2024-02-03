---
title: Splitter.SplitTextByWhitespace
---

# Splitter.SplitTextByWhitespace


## Description

Restituisce una funzione che suddivide il testo in un elenco di testo in corrispondenza dello spazio vuoto.


## Syntax

```powerquery
Splitter.SplitTextByWhitespace(
    optional quoteStyle as QuoteStyle.Type
) as function
```


## Details

Restituisce una funzione che suddivide il testo in un elenco di testo in corrispondenza dello spazio vuoto.


## Examples

### Example #1 
Divide l&#39;input in base a spazi vuoti, trattando le virgolette come qualsiasi altro carattere.
```powerquery
Splitter.SplitTextByWhitespace(QuoteStyle.None)("a b#(tab)c")
```

Result: 
```powerquery
{"a", "b", "c"}
```




## Category
Splitter
