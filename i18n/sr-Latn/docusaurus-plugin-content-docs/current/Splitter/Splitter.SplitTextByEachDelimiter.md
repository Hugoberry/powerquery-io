---
title: Splitter.SplitTextByEachDelimiter
---

# Splitter.SplitTextByEachDelimiter


## Description

Vraća funkciju koja deli tekst na listu teksta kod svakog navedenog znaka za razgraničavanje u nizu.


## Syntax

```powerquery
Splitter.SplitTextByEachDelimiter(
    delimiters as list,
    optional quoteStyle as QuoteStyle.Type,
    optional startAtEnd as logical
) as function
```


## Details

Vraća funkciju koja deli tekst na listu teksta kod svakog navedenog znaka za razgraničavanje u nizu.


## Examples

### Example #1 
Razdelite unos zarezom, a zatim tačkom i zarezom, počevši od početka unosa.
```powerquery
Splitter.SplitTextByEachDelimiter({",", ";"})("a,b;c,d")
```

Result: 
```powerquery
{"a", "b", "c,d"}
```


### Example #2 
Razdelite unos zarezom, a zatim tačkom i zarezom, tretirajući navodnike kao bilo koji drugi znak i počevši od kraja unosa.
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
