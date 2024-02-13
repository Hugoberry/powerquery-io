---
title: Splitter.SplitTextByAnyDelimiter
---

# Splitter.SplitTextByAnyDelimiter


Devolve uma função que divide texto numa lista de texto em qualquer um dos delimitadores especificados.


## Syntax

```powerquery
Splitter.SplitTextByAnyDelimiter(
    delimiters as list,
    optional quoteStyle as QuoteStyle.Type,
    optional startAtEnd as logical
) as function
```


## Remarks

Devolve uma função que divide texto numa lista de texto em qualquer um dos delimitadores especificados.


## Examples

### Example #1 
Divida a entrada por vírgula ou ponto e vírgula, ignorando aspas e delimitadores entre aspas e a partir do início da entrada.
```powerquery
Splitter.SplitTextByAnyDelimiter({",", ";"}, QuoteStyle.Csv)("a,b;""c,d;e"",f")
```

Result: 
```powerquery
{"a", "b", "c,d;e", "f"}
```


### Example #2 
Divida a entrada por vírgula ou ponto e vírgula, ignorando aspas e delimitadores entre aspas e a partir do fim da entrada.
```powerquery
let
    startAtEnd = true
in
    Splitter.SplitTextByAnyDelimiter({",", ";"}, QuoteStyle.Csv, startAtEnd)("a,""b;c,d")
```

Result: 
```powerquery
{"a,b", "c", "d"}
```




## Category
Splitter
