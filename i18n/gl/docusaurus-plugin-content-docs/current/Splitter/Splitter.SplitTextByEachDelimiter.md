---
title: Splitter.SplitTextByEachDelimiter
---

# Splitter.SplitTextByEachDelimiter


## Description

Devolve unha función que divide texto nunha lista de texto en cada delimitador especificado en secuencia.


## Syntax

```powerquery
Splitter.SplitTextByEachDelimiter(
    delimiters as list,
    optional quoteStyle as QuoteStyle.Type,
    optional startAtEnd as logical
) as function
```


## Details

Devolve unha función que divide texto nunha lista de texto en cada delimitador especificado en secuencia.


## Examples

### Example #1 
Divide a entrada por coma, despois punto e coma, comezando dende o principio da entrada.
```powerquery
Splitter.SplitTextByEachDelimiter({",", ";"})("a,b;c,d")
```

Result: 
```powerquery
{"a", "b", "c,d"}
```


### Example #2 
Divide a entrada por coma, despois punto e coma, tratando as comiñas como calquera outro carácter e comezando desde o final da entrada.
```powerquery
let
    startAtEnd = true
in
    Splitter.SplitTextByEachDelimiter({",", ";"}, QuoteStyle.None, startAtEnd)("a,""b;c"",d")
```

Result: 
```powerquery
{"a,""b", "c""", "d"}
```




## Category
Splitter
