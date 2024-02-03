---
title: Splitter.SplitTextByAnyDelimiter
---

# Splitter.SplitTextByAnyDelimiter


## Description

Devolve unha función que divide texto nunha lista de texto en calquera dos delimitadores especificados.


## Syntax

```powerquery
Splitter.SplitTextByAnyDelimiter(
    delimiters as list,
    optional quoteStyle as QuoteStyle.Type,
    optional startAtEnd as logical
) as function
```


## Details

Devolve unha función que divide texto nunha lista de texto en calquera dos delimitadores especificados.


## Examples

### Example #1 
Divide a entrada por coma ou punto e coma, ignorando as comiñas e os delimitadores entre comiñas e comezando dende o inicio da entrada.
```powerquery
Splitter.SplitTextByAnyDelimiter({",", ";"}, QuoteStyle.Csv)("a,b;""c,d;e"",f")
```

Result: 
```powerquery
{"a", "b", "c,d;e", "f"}
```


### Example #2 
Divide a entrada por coma ou punto e coma, ignorando as comiñas e os delimitadores entre comiñas e comezando desde o final da entrada.
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
