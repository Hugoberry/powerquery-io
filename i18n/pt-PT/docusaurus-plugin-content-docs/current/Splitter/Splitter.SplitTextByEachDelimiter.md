---
title: Splitter.SplitTextByEachDelimiter
---

# Splitter.SplitTextByEachDelimiter


## Description

Devolve uma função que divide texto numa lista de texto em cada delimitador especificado em sequência.


## Syntax

```powerquery
Splitter.SplitTextByEachDelimiter(
    delimiters as list,
    optional quoteStyle as QuoteStyle.Type,
    optional startAtEnd as logical
) as function
```


## Details

Devolve uma função que divide texto numa lista de texto em cada delimitador especificado em sequência.


## Examples

### Example #1 
Divida a entrada por vírgula e, em seguida, ponto e vírgula, a partir do início da entrada.
```powerquery
Splitter.SplitTextByEachDelimiter({",", ";"})("a,b;c,d")
```

Result: 
```powerquery
{"a", "b", "c,d"}
```


### Example #2 
Divida a entrada por vírgula e, em seguida, ponto e vírgula, trate as aspas como qualquer outro caráter e a partir do fim da entrada.
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
