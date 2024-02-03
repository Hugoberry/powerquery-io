---
title: Splitter.SplitTextByRanges
---

# Splitter.SplitTextByRanges


## Description

Vrátí funkci, která rozdělí text na seznam textových hodnot na základě zadaných odsazení a délek.


## Syntax

```powerquery
Splitter.SplitTextByRanges(
    ranges as list,
    optional startAtEnd as logical
) as function
```


## Details

Vrátí funkci, která rozdělí text na seznam textu podle zadaných posunů a délek. Délka null označuje, že by měly být zahrnuty všechny zbývající vstupy.


## Examples

### Example #1 
Rozdělte vstup podle zadaných párů pozice a délky počínaje začátkem vstupu. Všimněte si, že se rozsahy v tomto příkladu překrývají.
```powerquery
Splitter.SplitTextByRanges({{0, 4}, {2, 10}})("codelimiter")
```

Result: 
```powerquery
{"code", "delimiter"}
```


### Example #2 
Rozdělí vstup podle zadaných párů pozice a délky počínaje koncem vstupu.
```powerquery
let
    startAtEnd = true
in
    Splitter.SplitTextByRanges({{0, 5}, {6, 2}}, startAtEnd)("RedmondWA?98052")
```

Result: 
```powerquery
{"WA", "98052"}
```


### Example #3 
Rozdělte vstup na PSČ s pevnou délkou následovaný názvem města s proměnlivou délkou.
```powerquery
Splitter.SplitTextByRanges({{0, 5}, {5, null}})("98052Redmond")
```

Result: 
```powerquery
{"98052", "Redmond"}
```




## Category
Splitter
