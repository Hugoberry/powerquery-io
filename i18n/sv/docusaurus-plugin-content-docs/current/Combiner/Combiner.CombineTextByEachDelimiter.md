---
title: Combiner.CombineTextByEachDelimiter
---

# Combiner.CombineTextByEachDelimiter


## Description

Returnerar en funktion som kombinerar en lista med text med hjälp av en sekvens med avgränsare.


## Syntax

```powerquery
Combiner.CombineTextByEachDelimiter(
    delimiters as list,
    optional quoteStyle as QuoteStyle.Type
) as function
```


## Details

Returnerar en funktion som kombinerar en lista med textvärden till ett enda textvärde med hjälp av en sekvens med avgränsare.


## Examples

### Example #1 
Kombinera en lista med textvärden med hjälp av en sekvens med avgränsare.
```powerquery
Combiner.CombineTextByEachDelimiter({"=", "+"})({"a", "b", "c"})
```

Result: 
```powerquery
"a=b+c"
```




## Category
Combiner
