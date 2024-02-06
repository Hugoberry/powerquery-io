---
title: Combiner.CombineTextByEachDelimiter
---

# Combiner.CombineTextByEachDelimiter


Retorna uma função que combina uma lista de texto usando uma sequência de delimitadores.


## Syntax

```powerquery
Combiner.CombineTextByEachDelimiter(
    delimiters as list,
    optional quoteStyle as QuoteStyle.Type
) as function
```


## Remarks

Retorna uma função que combina uma lista de valores texto em um único valor de texto usando uma sequência de delimitadores.


## Examples

### Example #1 
Combina uma lista de valores de texto usando uma sequência de delimitadores.
```powerquery
Combiner.CombineTextByEachDelimiter({"=", "+"})({"a", "b", "c"})
```

Result: 
```powerquery
"a=b+c"
```




## Category
Combiner
