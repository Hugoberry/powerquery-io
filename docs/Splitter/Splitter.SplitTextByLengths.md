---
title: Splitter.SplitTextByLengths
---

# Splitter.SplitTextByLengths


Returns a function that splits text into a list of text by each specified length.


## Syntax

```powerquery
Splitter.SplitTextByLengths(
    lengths as list,
    optional startAtEnd as logical
) as function
```


## Remarks

Returns a function that splits text into a list of text by each specified length.


## Examples

### Example #1 
Split the input into the first two characters followed by the next three, starting from the beginning of the input.
```powerquery
Splitter.SplitTextByLengths({2, 3})("AB123")
```

Result: 
```powerquery
{"AB", "123"}
```


### Example #2 
Split the input into the first three characters followed by the next two, starting from the end of the input.
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
