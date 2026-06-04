---
title: Splitter.SplitTextByDelimiter
---

# Splitter.SplitTextByDelimiter


Vráti funkciu, ktorá rozdelí text do zoznamu textu podľa stanoveného oddeľovača.


## Syntax

```powerquery
Splitter.SplitTextByDelimiter(
    delimiter as text,
    optional quoteStyle as QuoteStyle.Type,
    optional csvStyle as CsvStyle.Type
) as function
```


## Remarks

Vráti funkciu, ktorá rozdelí text do zoznamu textu podľa stanoveného oddeľovača.


## Examples

### Example #1
Rozdelí vstup čiarkou, pričom ignoruje čiarky v úvodzovkách.
```powerquery
Splitter.SplitTextByDelimiter(",", QuoteStyle.Csv)("a,""b,c"",d")
```

Result: 
```powerquery
{"a", "b,c", "d"}
```




## Category
Splitter
