---
title: Splitter.SplitTextByRanges
---

# Splitter.SplitTextByRanges


## Description

Returns a function that splits text into a list of text according to the specified offsets and lengths.


## Syntax

```powerquery
Splitter.SplitTextByRanges(
    ranges as list,
    optional startAtEnd as logical
) as function
```


## Details

Returns a function that splits text into a list of text according to the specified offsets and lengths. A null length indicates that all remaining input should be included.


## Examples

### Example #1 
Split the input by the specified position and length pairs, starting from the beginning of the input. Note that the ranges in this example overlap.
```powerquery
Splitter.SplitTextByRanges({{0, 4}, {2, 10}})("codelimiter")
```

Result: 
```powerquery
{"code", "delimiter"}
```


### Example #2 
Split the input by the specified position and length pairs, starting from the end of the input.
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
Split the input into a fixed-length postal code followed by a variable-length city name.
```powerquery
Splitter.SplitTextByRanges({{0, 5}, {5, null}})("98052Redmond")
```

Result: 
```powerquery
{"98052", "Redmond"}
```




## Category
Splitter
