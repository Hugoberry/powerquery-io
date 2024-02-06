---
title: Splitter.SplitTextByLengths
---

# Splitter.SplitTextByLengths


Zwraca funkcję dzielącą tekst na listę wartości tekstowych przy użyciu określonej długości.


## Syntax

```powerquery
Splitter.SplitTextByLengths(
    lengths as list,
    optional startAtEnd as logical
) as function
```


## Remarks

Zwraca funkcję dzielącą tekst na listę wartości tekstowych przy użyciu określonej długości.


## Examples

### Example #1 
Podziel dane wejściowe na pierwsze dwa znaki, po których następują następne trzy, zaczynając od początku danych wejściowych.
```powerquery
Splitter.SplitTextByLengths({2, 3})("AB123")
```

Result: 
```powerquery
{"AB", "123"}
```


### Example #2 
Podziel dane wejściowe na pierwsze trzy znaki, po których następują następne dwa, zaczynając od końca danych wejściowych.
```powerquery
let
    startAtEnd = true
in
    Splitter.SplitTextByLengths({5, 2}, startAtEnd)("RedmondWA98052")
```

Result: 
```powerquery
{"WA", "98052"}
```




## Category
Splitter
