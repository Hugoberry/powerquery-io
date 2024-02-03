---
title: Splitter.SplitTextByAnyDelimiter
---

# Splitter.SplitTextByAnyDelimiter


## Description

Retourneert een functie die bij elk van de opgegeven scheidingstekens tekst splitst in een lijst met tekst.


## Syntax

```powerquery
Splitter.SplitTextByAnyDelimiter(
    delimiters as list,
    optional quoteStyle as QuoteStyle.Type,
    optional startAtEnd as logical
) as function
```


## Details

Retourneert een functie die bij elk van de opgegeven scheidingstekens tekst splitst in een lijst met tekst.


## Examples

### Example #1 
Splits de invoer door komma&#39;s of puntkomma&#39;s, waarbij aanhalingstekens en scheidingstekens tussen citaten worden genegeerd en beginnend vanaf het begin van de invoer.
```powerquery
Splitter.SplitTextByAnyDelimiter({",", ";"}, QuoteStyle.Csv)("a,b;""c,d;e"",f")
```

Result: 
```powerquery
{"a", "b", "c,d;e", "f"}
```


### Example #2 
Splits de invoer door komma&#39;s of puntkomma&#39;s, waarbij aanhalingstekens en scheidingstekens tussen citaten worden genegeerd en beginnend vanaf het einde van de invoer.
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
