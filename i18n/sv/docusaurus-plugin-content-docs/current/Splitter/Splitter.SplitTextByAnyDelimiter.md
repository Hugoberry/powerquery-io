---
title: Splitter.SplitTextByAnyDelimiter
---

# Splitter.SplitTextByAnyDelimiter


## Description

Returnerar en funktion som delar upp text i en lista med text vid någon av de angivna avgränsarna.


## Syntax

```powerquery
Splitter.SplitTextByAnyDelimiter(
    delimiters as list,
    optional quoteStyle as QuoteStyle.Type,
    optional startAtEnd as logical
) as function
```


## Details

Returnerar en funktion som delar upp text i en lista med text vid någon av de angivna avgränsarna.


## Examples

### Example #1 
Dela indata med kommatecken eller semikolon, ignorera citattecken och avgränsare med citattecken och börja från starten av indata.
```powerquery
Splitter.SplitTextByAnyDelimiter({",", ";"}, QuoteStyle.Csv)("a,b;""c,d;e"",f")
```

Result: 
```powerquery
{"a", "b", "c,d;e", "f"}
```


### Example #2 
Dela indata med kommatecken eller semikolon, ignorera citattecken och avgränsare med citattecken och börja från slutet av indata.
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
