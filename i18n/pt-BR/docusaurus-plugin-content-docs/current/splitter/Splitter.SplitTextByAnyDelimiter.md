---
title: Splitter.SplitTextByAnyDelimiter
---

# Splitter.SplitTextByAnyDelimiter


Retorna uma função que divide o texto em uma lista de texto em qualquer delimitador especificado.


## Syntax

```powerquery
Splitter.SplitTextByAnyDelimiter(
    delimiters as list,
    optional quoteStyle as QuoteStyle.Type,
    optional startAtEnd as logical
) as function
```


## Remarks

Retorna uma função que divide o texto em uma lista de texto em qualquer delimitador especificado.


## Examples

### Example #1 
Divida a entrada por vírgula ou ponto e vírgula, ignorando aspas e delimitadores entre aspas e começando do início da entrada.
```powerquery
Splitter.SplitTextByAnyDelimiter({",", ";"}, QuoteStyle.Csv)("a,b;""c,d;e"",f")
```

Result: 
```powerquery
{"a", "b", "c,d;e", "f"}
```


### Example #2 
Divida a entrada por vírgula ou ponto e vírgula, ignorando aspas e delimitadores entre aspas e começando do final da entrada.
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
