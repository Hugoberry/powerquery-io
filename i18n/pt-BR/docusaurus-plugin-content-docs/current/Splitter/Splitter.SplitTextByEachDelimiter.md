---
title: Splitter.SplitTextByEachDelimiter
---

# Splitter.SplitTextByEachDelimiter


Retorna uma função que divide o texto em uma lista de texto em cada delimitador especificado sequencialmente.


## Syntax

```powerquery
Splitter.SplitTextByEachDelimiter(
    delimiters as list,
    optional quoteStyle as QuoteStyle.Type,
    optional startAtEnd as logical
) as function
```


## Remarks

Retorna uma função que divide o texto em uma lista de texto em cada delimitador especificado sequencialmente.


## Examples

### Example #1 
Divida a entrada por vírgula e, em seguida, ponto e vírgula, começando do início da entrada.
```powerquery
Splitter.SplitTextByEachDelimiter({",", ";"})("a,b;c,d")
```

Result: 
```powerquery
{"a", "b", "c,d"}
```


### Example #2 
Divida a entrada por vírgula e, em seguida, ponto e vírgula, tratando aspas como qualquer outro caractere e começando do final da entrada.
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
