---
title: Splitter.SplitTextByWhitespace
---

# Splitter.SplitTextByWhitespace


Retorna una funció que divideix el text en una llista de text a l'espai en blanc.


## Syntax

```powerquery
Splitter.SplitTextByWhitespace(
    optional quoteStyle as QuoteStyle.Type
) as function
```


## Remarks

Retorna una funció que divideix el text en una llista de text a l'espai en blanc.


## Examples

### Example #1
Divideix l'entrada per caràcters d'espai en blanc. Tracta les cometes com qualsevol altre caràcter.
```powerquery
Splitter.SplitTextByWhitespace(QuoteStyle.None)("a b#(tab)c")
```

Result: 
```powerquery
{"a", "b", "c"}
```




## Category
Splitter
