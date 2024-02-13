---
title: Splitter.SplitTextByEachDelimiter
---

# Splitter.SplitTextByEachDelimiter


Zwraca funkcję dzielącą tekst na listę wartości tekstowych w miejscach występowania każdego określonego ogranicznika w sekwencji.


## Syntax

```powerquery
Splitter.SplitTextByEachDelimiter(
    delimiters as list,
    optional quoteStyle as QuoteStyle.Type,
    optional startAtEnd as logical
) as function
```


## Remarks

Zwraca funkcję dzielącą tekst na listę wartości tekstowych w miejscach występowania każdego określonego ogranicznika w sekwencji.


## Examples

### Example #1 
Podziel dane wejściowe według przecinka, a następnie średnika, zaczynając od początku danych wejściowych.
```powerquery
Splitter.SplitTextByEachDelimiter({",", ";"})("a,b;c,d")
```

Result: 
```powerquery
{"a", "b", "c,d"}
```


### Example #2 
Podziel dane wejściowe według przecinka, a następnie średnika, traktując cudzysłowy jak dowolny inny znak i zaczynając od końca danych wejściowych.
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
