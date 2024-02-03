---
title: Splitter.SplitTextByPositions
---

# Splitter.SplitTextByPositions


## Description

Vrátí funkci, která rozdělí text na seznam textových hodnot na základě jednotlivých zadaných pozic.


## Syntax

```powerquery
Splitter.SplitTextByPositions(
    positions as list,
    optional startAtEnd as logical
) as function
```


## Details

Vrátí funkci, která rozdělí text na seznam textových hodnot na základě jednotlivých zadaných pozic.


## Examples

### Example #1 
Rozdělte vstup na zadaných pozicích počínaje začátkem vstupu.
```powerquery
Splitter.SplitTextByPositions({0, 3, 4})("ABC|12345")
```

Result: 
```powerquery
{"ABC", "|", "12345"}
```


### Example #2 
Rozdělte vstup na zadaných pozicích počínaje koncem vstupu.
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
