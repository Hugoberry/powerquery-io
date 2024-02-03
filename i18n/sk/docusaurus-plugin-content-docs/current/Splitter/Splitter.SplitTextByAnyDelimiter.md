---
title: Splitter.SplitTextByAnyDelimiter
---

# Splitter.SplitTextByAnyDelimiter


## Description

Vráti funkciu, ktorá rozdelí text do zoznamu textu v ľubovoľnom zo stanovených oddeľovačov.


## Syntax

```powerquery
Splitter.SplitTextByAnyDelimiter(
    delimiters as list,
    optional quoteStyle as QuoteStyle.Type,
    optional startAtEnd as logical
) as function
```


## Details

Vráti funkciu, ktorá rozdelí text do zoznamu textu v ľubovoľnom zo stanovených oddeľovačov.


## Examples

### Example #1 
Rozdelí vstup čiarkou alebo bodkočiarkou, pričom ignoruje úvodzovky a oddeľovače v úvodzovkách, počnúc od začiatku vstupu.
```powerquery
Splitter.SplitTextByAnyDelimiter({",", ";"}, QuoteStyle.Csv)("a,b;""c,d;e"",f")
```

Result: 
```powerquery
{"a", "b", "c,d;e", "f"}
```


### Example #2 
Rozdelí vstup čiarkou alebo bodkočiarkou, pričom ignoruje úvodzovky a oddeľovače v úvodzovkách, počnúc od konca vstupu.
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
