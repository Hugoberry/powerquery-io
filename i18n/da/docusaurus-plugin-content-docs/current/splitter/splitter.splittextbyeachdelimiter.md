---
title: Splitter.SplitTextByEachDelimiter
---

# Splitter.SplitTextByEachDelimiter


Returnerer en funktion, der opdeler tekst på en liste med tekst ved alle de angivne afgrænsere i rækkefølge.


## Syntax

```powerquery
Splitter.SplitTextByEachDelimiter(
    delimiters as list,
    optional quoteStyle as QuoteStyle.Type,
    optional startAtEnd as logical
) as function
```


## Remarks

Returnerer en funktion, der opdeler tekst på en liste med tekst ved alle de angivne afgrænsere i rækkefølge.


## Examples

### Example #1 
Opdel input med komma, derefter semikolon, startende fra begyndelsen af input.
```powerquery
Splitter.SplitTextByEachDelimiter({",", ";"})("a,b;c,d")
```

Result: 
```powerquery
{"a", "b", "c,d"}
```


### Example #2 
Opdel input med komma, derefter semikolon, hvor anførselstegn behandles som ethvert andet tegn, og start fra slutningen af input.
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
