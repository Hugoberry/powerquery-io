---
title: Splitter.SplitTextByEachDelimiter
---

# Splitter.SplitTextByEachDelimiter


Returnerar en funktion som delar upp text i en lista med text vid varje angiven avgränsare i följd.


## Syntax

```powerquery
Splitter.SplitTextByEachDelimiter(
    delimiters as list,
    optional quoteStyle as QuoteStyle.Type,
    optional startAtEnd as logical
) as function
```


## Remarks

Returnerar en funktion som delar upp text i en lista med text vid varje angiven avgränsare i följd.


## Examples

### Example #1 
Dela indata med kommatecken och sedan semikolon, med början från början av indata.
```powerquery
Splitter.SplitTextByEachDelimiter({",", ";"})("a,b;c,d")
```

Result: 
```powerquery
{"a", "b", "c,d"}
```


### Example #2 
Dela indata med kommatecken, sedan semikolon, behandla citattecken som andra tecken och börja från slutet av indata.
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
