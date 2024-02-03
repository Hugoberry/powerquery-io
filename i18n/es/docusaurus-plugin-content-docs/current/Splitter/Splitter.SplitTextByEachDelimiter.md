---
title: Splitter.SplitTextByEachDelimiter
---

# Splitter.SplitTextByEachDelimiter


## Description

Devuelve una función que divide el texto en una lista de texto en cada delimitador especificado en secuencia.


## Syntax

```powerquery
Splitter.SplitTextByEachDelimiter(
    delimiters as list,
    optional quoteStyle as QuoteStyle.Type,
    optional startAtEnd as logical
) as function
```


## Details

Devuelve una función que divide el texto en una lista de texto en cada delimitador especificado en secuencia.


## Examples

### Example #1 
Divida la entrada por coma y, a continuación, punto y coma, empezando desde el principio de la entrada.
```powerquery
Splitter.SplitTextByEachDelimiter({",", ";"})("a,b;c,d")
```

Result: 
```powerquery
{"a", "b", "c,d"}
```


### Example #2 
Divida la entrada con coma y, a continuación, punto y coma, tratando las comillas como cualquier otro carácter y empezando desde el final de la entrada.
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
