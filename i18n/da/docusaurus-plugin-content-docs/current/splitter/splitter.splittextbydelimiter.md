---
title: Splitter.SplitTextByDelimiter
---

# Splitter.SplitTextByDelimiter


Returnerer en funktion, der opdeler tekst på en liste i overensstemmelse med den angivne afgrænser.


## Syntax

```powerquery
Splitter.SplitTextByDelimiter(
    delimiter as text,
    optional quoteStyle as QuoteStyle.Type
) as function
```


## Remarks

Returnerer en funktion, der opdeler tekst på en liste i overensstemmelse med den angivne afgrænser.


## Examples

### Example #1 
Opdel input med komma, ignorer citerede kommaer.
```powerquery
Splitter.SplitTextByDelimiter(",", QuoteStyle.Csv)("a,""b,c"",d")
```

Result: 
```powerquery
{"a", "b,c", "d"}
```




## Category
Splitter
