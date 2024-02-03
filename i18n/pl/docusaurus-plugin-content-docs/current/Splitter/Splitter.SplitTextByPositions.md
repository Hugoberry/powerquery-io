---
title: Splitter.SplitTextByPositions
---

# Splitter.SplitTextByPositions


## Description

Zwraca funkcję dzielącą tekst na listę wartości tekstowych przy użyciu określonej pozycji.


## Syntax

```powerquery
Splitter.SplitTextByPositions(
    positions as list,
    optional startAtEnd as logical
) as function
```


## Details

Zwraca funkcję dzielącą tekst na listę wartości tekstowych przy użyciu określonej pozycji.


## Examples

### Example #1 
Podziel dane wejściowe w określonych położeniach, zaczynając od początku danych wejściowych.
```powerquery
Splitter.SplitTextByPositions({0, 3, 4})("ABC|12345")
```

Result: 
```powerquery
{"ABC", "|", "12345"}
```


### Example #2 
Podziel dane wejściowe w określonych położeniach, zaczynając od końca danych wejściowych.
```powerquery
let
    startAtEnd = true
in
    Splitter.SplitTextByPositions({0, 5}, startAtEnd)("Redmond98052")
```

Result: 
```powerquery
{"Redmond", "98052"}
```




## Category
Splitter
