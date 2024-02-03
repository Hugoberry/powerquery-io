---
title: Splitter.SplitTextByAnyDelimiter
---

# Splitter.SplitTextByAnyDelimiter


## Description

Vraća funkciju koja deli tekst na listu teksta kod bilo kog navedenog znaka za razgraničavanje.


## Syntax

```powerquery
Splitter.SplitTextByAnyDelimiter(
    delimiters as list,
    optional quoteStyle as QuoteStyle.Type,
    optional startAtEnd as logical
) as function
```


## Details

Vraća funkciju koja deli tekst na listu teksta kod bilo kog navedenog znaka za razgraničavanje.


## Examples

### Example #1 
Podelite unos zarezom ili tačkom i zarezom, zanemarujući navodnike i citirane znakove za razgraničavanje i počevši od početka unosa.
```powerquery
Splitter.SplitTextByAnyDelimiter({",", ";"}, QuoteStyle.Csv)("a,b;""c,d;e"",f")
```

Result: 
```powerquery
{"a", "b", "c,d;e", "f"}
```


### Example #2 
Podelite unos zarezom ili tačkom i zarezom, zanemarujući navodnike i citirane znakove za razgraničavanje i počevši od kraja unosa.
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
