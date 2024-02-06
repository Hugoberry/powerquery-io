---
title: Combiner.CombineTextByPositions
---

# Combiner.CombineTextByPositions


Returns a function that combines a list of text using the specified output positions.


## Syntax

```powerquery
Combiner.CombineTextByPositions(
    positions as list,
    optional template as text
) as function
```


## Remarks

Returns a function that combines a list of text values into a single text value using the specified output positions.


## Examples

### Example #1 
Combine a list of text values by placing them in the output at the specified positions.
```powerquery
Combiner.CombineTextByPositions({0, 5, 10})({"abc", "def", "ghi"})
```

Result: 
```powerquery
"abc  def  ghi"
```




## Category
Combiner
