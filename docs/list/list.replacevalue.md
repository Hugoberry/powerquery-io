---
title: List.ReplaceValue
---

# List.ReplaceValue


Searches a list for the specified value and replaces it.


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

Searches a list of values, `list`, for the value `oldValue` and replaces each occurrence with the replacement value `newValue`.


## Examples

### Example #1
Replace all the "a" values in the list \{"a", "B", "a", "a"\} with "A".
```powerquery
List.ReplaceValue({"a", "B", "a", "a"}, "a", "A", Replacer.ReplaceText)
```

Result: 
```powerquery
{"A", "B", "A", "A"}
```




## Category
List.Transformation functions
