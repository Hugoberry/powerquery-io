---
title: Splitter.SplitTextByAnyDelimiter
---

# Splitter.SplitTextByAnyDelimiter


Returnerer en funktion, der opdeler tekst på en liste med tekst ved alle de angivne afgrænsere.


## Syntax

```powerquery
Splitter.SplitTextByAnyDelimiter(
    delimiters as list,
    optional quoteStyle as QuoteStyle.Type,
    optional startAtEnd as logical
) as function
```


## Remarks

Returnerer en funktion, der opdeler tekst på en liste med tekst ved alle de angivne afgrænsere.


## Examples

### Example #1 
Opdel input med komma eller semikolon, ignorer anførselstegn og citerede afgrænsere, og start fra begyndelsen af inputtet.
```powerquery
Splitter.SplitTextByAnyDelimiter({",", ";"}, QuoteStyle.Csv)("a,b;""c,d;e"",f")
```

Result: 
```powerquery
{"a", "b", "c,d;e", "f"}
```


### Example #2 
Opdel input med komma eller semikolon, ignorer anførselstegn og citerede afgrænsere, og start fra slutningen af inputtet.
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
