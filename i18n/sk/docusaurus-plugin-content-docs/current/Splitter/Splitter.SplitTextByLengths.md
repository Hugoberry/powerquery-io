---
title: Splitter.SplitTextByLengths
---

# Splitter.SplitTextByLengths


## Description

Vráti funkciu, ktorá rozdelí text do zoznamu textu podľa každej stanovenej dĺžky.


## Syntax

```powerquery
Splitter.SplitTextByLengths(
    lengths as list,
    optional startAtEnd as logical
) as function
```


## Details

Vráti funkciu, ktorá rozdelí text do zoznamu textu podľa každej stanovenej dĺžky.


## Examples

### Example #1 
Rozdelí vstup na prvé dva znaky, za ktorými nasledujú ďalšie tri znaky, počnúc od začiatku vstupu.
```powerquery
Splitter.SplitTextByLengths({2, 3})("AB123")
```

Result: 
```powerquery
{"AB", "123"}
```


### Example #2 
Rozdelí vstup na prvé tri znaky, za ktorými nasledujú ďalšie dva znaky, počnúc od konca vstupu.
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
