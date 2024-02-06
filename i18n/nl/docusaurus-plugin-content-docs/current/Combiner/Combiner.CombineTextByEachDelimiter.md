---
title: Combiner.CombineTextByEachDelimiter
---

# Combiner.CombineTextByEachDelimiter


Retourneert een functie die een lijst met tekst combineert met behulp van een reeks scheidingstekens.


## Syntax

```powerquery
Combiner.CombineTextByEachDelimiter(
    delimiters as list,
    optional quoteStyle as QuoteStyle.Type
) as function
```


## Remarks

Retourneert een functie die een lijst met tekstwaarden combineert tot één tekstwaarde met behulp van een reeks scheidingstekens.


## Examples

### Example #1 
Een lijst met tekstwaarden combineren met behulp van een reeks scheidingstekens.
```powerquery
Combiner.CombineTextByEachDelimiter({"=", "+"})({"a", "b", "c"})
```

Result: 
```powerquery
"a=b+c"
```




## Category
Combiner
