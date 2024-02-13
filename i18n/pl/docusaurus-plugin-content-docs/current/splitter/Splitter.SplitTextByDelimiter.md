---
title: Splitter.SplitTextByDelimiter
---

# Splitter.SplitTextByDelimiter


Zwraca funkcję dzielącą tekst na listę wartości tekstowych w miejscach występowania określonego ogranicznika.


## Syntax

```powerquery
Splitter.SplitTextByDelimiter(
    delimiter as text,
    optional quoteStyle as QuoteStyle.Type
) as function
```


## Remarks

Zwraca funkcję dzielącą tekst na listę wartości tekstowych w miejscach występowania określonego ogranicznika.


## Examples

### Example #1 
Podziel dane wejściowe według przecinka, ignorując przecinki w cudzysłowach.
```powerquery
Splitter.SplitTextByDelimiter(",", QuoteStyle.Csv)("a,""b,c"",d")
```

Result: 
```powerquery
{"a", "b,c", "d"}
```




## Category
Splitter
