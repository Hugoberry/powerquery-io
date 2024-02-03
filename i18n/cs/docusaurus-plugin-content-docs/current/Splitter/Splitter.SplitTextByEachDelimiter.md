---
title: Splitter.SplitTextByEachDelimiter
---

# Splitter.SplitTextByEachDelimiter


## Description

Vrátí funkci, která rozdělí text na seznam textových hodnot na základě jednotlivých oddělovačů zadaných v sekvenci.


## Syntax

```powerquery
Splitter.SplitTextByEachDelimiter(
    delimiters as list,
    optional quoteStyle as QuoteStyle.Type,
    optional startAtEnd as logical
) as function
```


## Details

Vrátí funkci, která rozdělí text na seznam textových hodnot na základě jednotlivých oddělovačů zadaných v sekvenci.


## Examples

### Example #1 
Rozdělte vstup čárkou a pak středníkem počínaje začátkem vstupu.
```powerquery
Splitter.SplitTextByEachDelimiter({",", ";"})("a,b;c,d")
```

Result: 
```powerquery
{"a", "b", "c,d"}
```


### Example #2 
Rozdělte vstup čárkou, pak středníkem, zpracovávat uvozovky jako jakýkoli jiný znak a od konce vstupu.
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
