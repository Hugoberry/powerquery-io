---
title: Splitter.SplitTextByEachDelimiter
---

# Splitter.SplitTextByEachDelimiter


## Description

Vráti funkciu, ktorá rozdelí text do zoznamu textu v každom stanovenom oddeľovači v rámci postupnosti.


## Syntax

```powerquery
Splitter.SplitTextByEachDelimiter(
    delimiters as list,
    optional quoteStyle as QuoteStyle.Type,
    optional startAtEnd as logical
) as function
```


## Details

Vráti funkciu, ktorá rozdelí text do zoznamu textu v každom stanovenom oddeľovači v rámci postupnosti.


## Examples

### Example #1 
Rozdelí vstup čiarkou a potom bodkočiarkou počnúc od začiatku vstupu.
```powerquery
Splitter.SplitTextByEachDelimiter({",", ";"})("a,b;c,d")
```

Result: 
```powerquery
{"a", "b", "c,d"}
```


### Example #2 
Rozdelí vstup čiarkou, potom bodkočiarkou a spracuje úvodzovky ako akýkoľvek iný znak, počnúc od konca vstupu.
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
