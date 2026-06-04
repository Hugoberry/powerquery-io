---
title: Splitter.SplitTextByDelimiter
---

# Splitter.SplitTextByDelimiter


Vraća funkciju koja deli tekst na listu teksta prema navedenom znaku za razgraničavanje.


## Syntax

```powerquery
Splitter.SplitTextByDelimiter(
    delimiter as text,
    optional quoteStyle as QuoteStyle.Type,
    optional csvStyle as CsvStyle.Type
) as function
```


## Remarks

Vraća funkciju koja deli tekst na listu teksta prema navedenom znaku za razgraničavanje.


## Examples

### Example #1
Razdelite unos zarezom, zanemarujući citirane zareze.
```powerquery
Splitter.SplitTextByDelimiter(",", QuoteStyle.Csv)("a,""b,c"",d")
```

Result: 
```powerquery
{"a", "b,c", "d"}
```




## Category
Splitter
