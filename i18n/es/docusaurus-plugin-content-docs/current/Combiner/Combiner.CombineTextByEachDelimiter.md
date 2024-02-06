---
title: Combiner.CombineTextByEachDelimiter
---

# Combiner.CombineTextByEachDelimiter


Devuelve una función que combina una lista de texto mediante una secuencia de delimitadores.


## Syntax

```powerquery
Combiner.CombineTextByEachDelimiter(
    delimiters as list,
    optional quoteStyle as QuoteStyle.Type
) as function
```


## Remarks

Devuelve una función que combina una lista de valores de texto en un solo valor de texto mediante una secuencia de delimitadores.


## Examples

### Example #1 
Combine una lista de valores de texto mediante una secuencia de delimitadores.
```powerquery
Combiner.CombineTextByEachDelimiter({"=", "+"})({"a", "b", "c"})
```

Result: 
```powerquery
"a=b+c"
```




## Category
Combiner
