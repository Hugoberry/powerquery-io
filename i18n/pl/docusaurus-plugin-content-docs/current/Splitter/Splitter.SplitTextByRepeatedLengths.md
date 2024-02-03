---
title: Splitter.SplitTextByRepeatedLengths
---

# Splitter.SplitTextByRepeatedLengths


## Description

Zwraca funkcję dzielącą tekst na listę wartości tekstowych w sposób powtarzalny po określonej długości.


## Syntax

```powerquery
Splitter.SplitTextByRepeatedLengths(
    length as number,
    optional startAtEnd as logical
) as function
```


## Details

Zwraca funkcję dzielącą tekst na listę wartości tekstowych w sposób powtarzalny po określonej długości.


## Examples

### Example #1 
Podziel wielokrotnie dane wejściowe na fragmenty o trzech znakach, zaczynając od początku danych wejściowych.
```powerquery
Splitter.SplitTextByRepeatedLengths(3)("12345678")
```

Result: 
```powerquery
{"123", "456", "78"}
```


### Example #2 
Podziel wielokrotnie dane wejściowe na fragmenty składające się z trzech znaków, zaczynając od końca danych wejściowych.
```powerquery
let
    startAtEnd = true
in
    Splitter.SplitTextByRepeatedLengths(3, startAtEnd)("87654321")
```

Result: 
```powerquery
{"87", "654", "321"}
```




## Category
Splitter
