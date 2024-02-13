---
title: Splitter.SplitTextByRanges
---

# Splitter.SplitTextByRanges


Returnerar en funktion som delar upp text i en lista med text baserat på angivna förskjutningar och längder.


## Syntax

```powerquery
Splitter.SplitTextByRanges(
    ranges as list,
    optional startAtEnd as logical
) as function
```


## Remarks

Returnerar en funktion som delar upp text i en lista med text enligt angivna förskjutningar och längder. En null-längd anger att alla återstående indata ska inkluderas.


## Examples

### Example #1 
Dela indata med angiven position och längdpar, med början från början av indata. Observera att intervallen i det här exemplet överlappar varandra.
```powerquery
Splitter.SplitTextByRanges({{0, 4}, {2, 10}})("codelimiter")
```

Result: 
```powerquery
{"code", "delimiter"}
```


### Example #2 
Dela indata med angiven position och längdpar, med början från slutet av indata.
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
Dela indata i ett postnummer med fast längd följt av ett ortnamn med variabel längd.
```powerquery
Splitter.SplitTextByRanges({{0, 5}, {5, null}})("98052Redmond")
```

Result: 
```powerquery
{"98052", "Redmond"}
```




## Category
Splitter
