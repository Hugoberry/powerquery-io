---
title: Splitter.SplitTextByDelimiter
---

# Splitter.SplitTextByDelimiter


## Description

Vrátí funkci, která rozdělí text na seznam textových hodnot na základě zadaného oddělovače.


## Syntax

```powerquery
Splitter.SplitTextByDelimiter(
    delimiter as text,
    optional quoteStyle as QuoteStyle.Type
) as function
```


## Details

Vrátí funkci, která rozdělí text na seznam textových hodnot na základě zadaného oddělovače.


## Examples

### Example #1 
Rozdělte vstup čárkou a ignoruje čárky v uvozovkách.
```powerquery
Splitter.SplitTextByDelimiter(",", QuoteStyle.Csv)("a,""b,c"",d")
```

Result: 
```powerquery
{"a", "b,c", "d"}
```




## Category
Splitter
