---
title: Combiner.CombineTextByEachDelimiter
---

# Combiner.CombineTextByEachDelimiter


Devolve uma função que combina uma lista de texto ao utilizar uma sequência de delimitadores.


## Syntax

```powerquery
Combiner.CombineTextByEachDelimiter(
    delimiters as list,
    optional quoteStyle as QuoteStyle.Type
) as function
```


## Remarks

Devolve uma função que combina uma lista de valores de texto num único valor de texto, ao utilizar uma sequência de delimitadores.


## Examples

### Example #1 
Combina uma lista de valores de texto ao utilizar uma sequência de delimitadores.
```powerquery
Combiner.CombineTextByEachDelimiter({"=", "+"})({"a", "b", "c"})
```

Result: 
```powerquery
"a=b+c"
```




## Category
Combiner
