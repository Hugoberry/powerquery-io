---
title: Combiner.CombineTextByRanges
---

# Combiner.CombineTextByRanges


Returns a function that combines a list of text using the specified positions and lengths.


## Syntax

```powerquery
Combiner.CombineTextByRanges(
    ranges as list,
    optional template as text
) as function
```


## Remarks

Returns a function that combines a list of text values into a single text value using the specified output positions and lengths. A null length indicates that the entire text value should be included.


## Examples

### Example #1 
Combine a list of text values using the specified output positions and lengths.
```powerquery
Combiner.CombineTextByRanges({{0, 1}, {3, 2}, {6, null}})({"abc", "def", "ghijkl"})
```

Result: 
```powerquery
"a  de ghijkl"
```




## Category
Combiner
