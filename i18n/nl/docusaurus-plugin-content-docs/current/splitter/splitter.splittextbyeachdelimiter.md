---
title: Splitter.SplitTextByEachDelimiter
---

# Splitter.SplitTextByEachDelimiter


Retourneert een functie die bij elk opgegeven scheidingsteken in de reeks tekst splitst in een lijst met tekst.


## Syntax

```powerquery
Splitter.SplitTextByEachDelimiter(
    delimiters as list,
    optional quoteStyle as QuoteStyle.Type,
    optional startAtEnd as logical
) as function
```


## Remarks

Retourneert een functie die bij elk opgegeven scheidingsteken in de reeks tekst splitst in een lijst met tekst.


## Examples

### Example #1 
Splits de invoer door komma&#39;s en vervolgens een puntkomma, te beginnen bij het begin van de invoer.
```powerquery
Splitter.SplitTextByEachDelimiter({",", ";"})("a,b;c,d")
```

Result: 
```powerquery
{"a", "b", "c,d"}
```


### Example #2 
Splits de invoer op komma&#39;s en vervolgens op puntkomma&#39;s, waarbij aanhalingstekens worden behandeld zoals elk ander teken en beginnend vanaf het einde van de invoer.
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
