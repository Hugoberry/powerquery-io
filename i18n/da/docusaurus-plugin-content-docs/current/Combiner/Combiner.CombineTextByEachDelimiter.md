---
title: Combiner.CombineTextByEachDelimiter
---

# Combiner.CombineTextByEachDelimiter


Returnerer en funktion, der kombinerer en liste over tekst ved hjælp af en sekvens af afgrænsere.


## Syntax

```powerquery
Combiner.CombineTextByEachDelimiter(
    delimiters as list,
    optional quoteStyle as QuoteStyle.Type
) as function
```


## Remarks

Returnerer en funktion, der kombinerer en liste over tekstværdier til en enkelt tekstværdi ved hjælp af en sekvens af afgrænsere.


## Examples

### Example #1 
Kombiner en liste over tekstværdier ved hjælp af en sekvens af afgrænsere.
```powerquery
Combiner.CombineTextByEachDelimiter({"=", "+"})({"a", "b", "c"})
```

Result: 
```powerquery
"a=b+c"
```




## Category
Combiner
