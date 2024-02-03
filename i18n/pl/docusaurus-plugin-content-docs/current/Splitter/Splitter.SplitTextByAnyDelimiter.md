---
title: Splitter.SplitTextByAnyDelimiter
---

# Splitter.SplitTextByAnyDelimiter


## Description

Zwraca funkcję dzielącą tekst na listę wartości tekstowych w miejscach występowania dowolnego z określonych ograniczników.


## Syntax

```powerquery
Splitter.SplitTextByAnyDelimiter(
    delimiters as list,
    optional quoteStyle as QuoteStyle.Type,
    optional startAtEnd as logical
) as function
```


## Details

Zwraca funkcję dzielącą tekst na listę wartości tekstowych w miejscach występowania dowolnego z określonych ograniczników.


## Examples

### Example #1 
Podziel dane wejściowe według przecinka lub średnika, ignorując cudzysłowy i ograniczniki w cudzysłowach, i zaczynając od początku danych wejściowych.
```powerquery
Splitter.SplitTextByAnyDelimiter({",", ";"}, QuoteStyle.Csv)("a,b;""c,d;e"",f")
```

Result: 
```powerquery
{"a", "b", "c,d;e", "f"}
```


### Example #2 
Podziel dane wejściowe według przecinka lub średnika, ignorując cudzysłowy i ograniczniki w cudzysłowach, i zaczynając od końca danych wejściowych.
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
