---
title: Splitter.SplitTextByWhitespace
---

# Splitter.SplitTextByWhitespace


## Description

Retorna una funció que divideix el text en una llista de text a l&#39;espai en blanc.


## Syntax

```powerquery
Splitter.SplitTextByWhitespace(
    optional quoteStyle as QuoteStyle.Type
) as function
```


## Details

Retorna una funció que divideix el text en una llista de text a l'espai en blanc.


## Examples

### Example #1 
Divideix l&#39;entrada per caràcters d&#39;espai en blanc. Tracta les cometes com qualsevol altre caràcter.
```powerquery
Splitter.SplitTextByWhitespace(QuoteStyle.None)("a b#(tab)c")
```

Result: 
```powerquery
{"a", "b", "c"}
```




## Category
Splitter
