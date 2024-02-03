---
title: Splitter.SplitTextByLengths
---

# Splitter.SplitTextByLengths


## Description

Vrátí funkci, která rozdělí text na seznam textových hodnot na základě jednotlivých zadaných délek.


## Syntax

```powerquery
Splitter.SplitTextByLengths(
    lengths as list,
    optional startAtEnd as logical
) as function
```


## Details

Vrátí funkci, která rozdělí text na seznam textových hodnot na základě jednotlivých zadaných délek.


## Examples

### Example #1 
Rozdělte vstup na první dva znaky následované dalšími třemi znaky počínaje začátkem vstupu.
```powerquery
Splitter.SplitTextByLengths({2, 3})("AB123")
```

Result: 
```powerquery
{"AB", "123"}
```


### Example #2 
Rozdělte vstup na první tři znaky následované dalšími dvěma znaky počínaje koncem vstupu.
```powerquery
let
    startAtEnd = true
in
    Splitter.SplitTextByLengths({5, 2}, startAtEnd)("RedmondWA98052")
```

Result: 
```powerquery
{"WA", "98052"}
```




## Category
Splitter
