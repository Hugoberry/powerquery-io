---
title: Splitter.SplitTextByRanges
---

# Splitter.SplitTextByRanges


## Description

Returnerer en funktion, der opdeler tekst på en liste i overensstemmelse med de angivne forskydninger og længder.


## Syntax

```powerquery
Splitter.SplitTextByRanges(
    ranges as list,
    optional startAtEnd as logical
) as function
```


## Details

Returnerer en funktion, der opdeler tekst i en tekstliste i henhold til de angivne forskydninger og længder. En nullængde angiver, at alle resterende input skal inkluderes.


## Examples

### Example #1 
Opdel input efter de angivne positions- og længdepar, startende fra begyndelsen af input. Bemærk, at intervallerne i dette eksempel overlapper hinanden.
```powerquery
Splitter.SplitTextByRanges({{0, 4}, {2, 10}})("codelimiter")
```

Result: 
```powerquery
{"code", "delimiter"}
```


### Example #2 
Opdel input med de angivne positions- og længdepar, startende fra slutningen af input.
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
Opdel inputtet i et postnummer med fast længde efterfulgt af et bynavn med variabel længde.
```powerquery
Splitter.SplitTextByRanges({{0, 5}, {5, null}})("98052Redmond")
```

Result: 
```powerquery
{"98052", "Redmond"}
```




## Category
Splitter
