---
title: Splitter.SplitTextByLengths
---

# Splitter.SplitTextByLengths


Returnerar en funktion som delar upp text i en lista med text baserat på varje angiven längd.


## Syntax

```powerquery
Splitter.SplitTextByLengths(
    lengths as list,
    optional startAtEnd as logical
) as function
```


## Remarks

Returnerar en funktion som delar upp text i en lista med text baserat på varje angiven längd.


## Examples

### Example #1 
Dela indata i de två första tecknen följt av nästa tre, med början från början av indata.
```powerquery
Splitter.SplitTextByLengths({2, 3})("AB123")
```

Result: 
```powerquery
{"AB", "123"}
```


### Example #2 
Dela upp indata i de första tre tecknen följt av nästa två, med början från slutet av indata.
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
