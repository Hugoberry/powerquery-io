---
title: Splitter.SplitTextByAnyDelimiter
---

# Splitter.SplitTextByAnyDelimiter


## Description

Vrátí funkci, která rozdělí text na seznam textových hodnot na základě všech zadaných oddělovačů.


## Syntax

```powerquery
Splitter.SplitTextByAnyDelimiter(
    delimiters as list,
    optional quoteStyle as QuoteStyle.Type,
    optional startAtEnd as logical
) as function
```


## Details

Vrátí funkci, která rozdělí text na seznam textových hodnot na základě všech zadaných oddělovačů.


## Examples

### Example #1 
Rozdělte vstup čárkou nebo středníkem, přičemž uvozovky a oddělovače v uvozovkách se ignorují a začínají začátkem vstupu.
```powerquery
Splitter.SplitTextByAnyDelimiter({",", ";"}, QuoteStyle.Csv)("a,b;""c,d;e"",f")
```

Result: 
```powerquery
{"a", "b", "c,d;e", "f"}
```


### Example #2 
Rozdělte vstup čárkou nebo středníkem, přičemž uvozovky a oddělovače v uvozovkách se ignorují a začínají od konce vstupu.
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
