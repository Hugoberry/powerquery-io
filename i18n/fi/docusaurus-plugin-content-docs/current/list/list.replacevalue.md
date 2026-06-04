---
title: List.ReplaceValue
---

# List.ReplaceValue


Hakee luettelosta määritettyä arvoa ja korvaa sen.


## Syntax

```powerquery
List.ReplaceValue(
    list as list,
    oldValue as any,
    newValue as any,
    replacer as function
) as list
```


## Remarks

Hakee arvoluettelosta `list` arvoa `oldValue` ja korvaa kunkin esiintymän korvaavalla arvolla `newValue`.


## Examples

### Example #1
Korvaa kaikki "a"-arvot luettelossa \{"a", "B", "a", "a"\} "A"-arvolla.
```powerquery
List.ReplaceValue({"a", "B", "a", "a"}, "a", "A", Replacer.ReplaceText)
```

Result: 
```powerquery
{"A", "B", "A", "A"}
```




## Category
List.Transformation functions
