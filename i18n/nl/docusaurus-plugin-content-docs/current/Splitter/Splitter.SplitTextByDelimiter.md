---
title: Splitter.SplitTextByDelimiter
---

# Splitter.SplitTextByDelimiter


Retourneert een functie die tekst splitst in een lijst met tekst conform het opgegeven scheidingsteken.


## Syntax

```powerquery
Splitter.SplitTextByDelimiter(
    delimiter as text,
    optional quoteStyle as QuoteStyle.Type
) as function
```


## Remarks

Retourneert een functie die tekst splitst in een lijst met tekst conform het opgegeven scheidingsteken.


## Examples

### Example #1 
Splits de invoer door komma&#39;s, waarbij komma&#39;s met aanhalingstekens worden genegeerd.
```powerquery
Splitter.SplitTextByDelimiter(",", QuoteStyle.Csv)("a,""b,c"",d")
```

Result: 
```powerquery
{"a", "b,c", "d"}
```




## Category
Splitter
