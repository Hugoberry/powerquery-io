---
title: Splitter.SplitTextByRanges
---

# Splitter.SplitTextByRanges


## Description

Zwraca funkcję dzielącą tekst na listę wartości tekstowych przy użyciu określonych przesunięć i długości.


## Syntax

```powerquery
Splitter.SplitTextByRanges(
    ranges as list,
    optional startAtEnd as logical
) as function
```


## Details

Zwraca funkcję dzielącą tekst na listę tekstu zgodnie z określonymi przesunięciami i długościami. Długość o wartości null wskazuje, że wszystkie pozostałe dane wejściowe powinny zostać uwzględnione.


## Examples

### Example #1 
Podziel dane wejściowe według określonych par położenia i długości, zaczynając od początku danych wejściowych. Pamiętaj, że zakresy w tym przykładzie nakładają się na siebie.
```powerquery
Splitter.SplitTextByRanges({{0, 4}, {2, 10}})("codelimiter")
```

Result: 
```powerquery
{"code", "delimiter"}
```


### Example #2 
Podziel dane wejściowe według określonych par położenia i długości, zaczynając od końca danych wejściowych.
```powerquery
let
    startAtEnd = true
in
    Splitter.SplitTextByRanges({{0, 5}, {6, 2}}, startAtEnd)("RedmondWA?98052")
```

Result: 
```powerquery
{"WA", "98052"}
```


### Example #3 
Podziel dane wejściowe na kod pocztowy o stałej długości, po którym następuje nazwa miejscowości o zmiennej długości.
```powerquery
Splitter.SplitTextByRanges({{0, 5}, {5, null}})("98052Redmond")
```

Result: 
```powerquery
{"98052", "Redmond"}
```




## Category
Splitter
