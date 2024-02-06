---
title: Splitter.SplitTextByDelimiter
---

# Splitter.SplitTextByDelimiter


Returnerar en funktion som delar upp text i en lista med text baserat på angiven avgränsare.


## Syntax

```powerquery
Splitter.SplitTextByDelimiter(
    delimiter as text,
    optional quoteStyle as QuoteStyle.Type
) as function
```


## Remarks

Returnerar en funktion som delar upp text i en lista med text baserat på angiven avgränsare.


## Examples

### Example #1 
Dela indata med kommatecken och ignorera citattecken.
```powerquery
Splitter.SplitTextByDelimiter(",", QuoteStyle.Csv)("a,""b,c"",d")
```

Result: 
```powerquery
{"a", "b,c", "d"}
```




## Category
Splitter
