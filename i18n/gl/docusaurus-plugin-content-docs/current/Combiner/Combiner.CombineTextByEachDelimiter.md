---
title: Combiner.CombineTextByEachDelimiter
---

# Combiner.CombineTextByEachDelimiter


## Description

Devolve unha función que combina unha lista de texto utilizando a secuencia de delimitadores.


## Syntax

```powerquery
Combiner.CombineTextByEachDelimiter(
    delimiters as list,
    optional quoteStyle as QuoteStyle.Type
) as function
```


## Details

Devolve unha función que combina unha lista de valores de texto nun valor de texto único mediante unha secuencia de delimitadores.


## Examples

### Example #1 
Combina unha lista de valores de texto usando un delimitador de secuencia.
```powerquery
Combiner.CombineTextByEachDelimiter({"=", "+"})({"a", "b", "c"})
```

Result: 
```powerquery
"a=b+c"
```




## Category
Combiner
