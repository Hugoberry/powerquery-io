---
title: Splitter.SplitTextByPositions
---

# Splitter.SplitTextByPositions


## Description

Vráti funkciu, ktorá rozdelí text do zoznamu textu v každej stanovenej pozícii.


## Syntax

```powerquery
Splitter.SplitTextByPositions(
    positions as list,
    optional startAtEnd as logical
) as function
```


## Details

Vráti funkciu, ktorá rozdelí text do zoznamu textu v každej stanovenej pozícii.


## Examples

### Example #1 
Rozdelí vstup na zadaných pozíciách počnúc od začiatku vstupu.
```powerquery
Splitter.SplitTextByPositions({0, 3, 4})("ABC|12345")
```

Result: 
```powerquery
{"ABC", "|", "12345"}
```


### Example #2 
Rozdelí vstup na zadaných pozíciách počnúc od konca vstupu.
```powerquery
let
    startAtEnd = true
in
    Splitter.SplitTextByPositions({0, 5}, startAtEnd)("Redmond98052")
```

Result: 
```powerquery
{"Redmond", "98052"}
```




## Category
Splitter
