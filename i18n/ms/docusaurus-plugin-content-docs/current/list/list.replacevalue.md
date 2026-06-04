---
title: List.ReplaceValue
---

# List.ReplaceValue


Mencari senarai untuk nilai yang ditentukan dan menggantikannya.


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

Mencari senarai nilai, `list`, untuk nilai `oldValue` dan menggantikan setiap kejadian dengan nilai gantian `newValue`.


## Examples

### Example #1
Gantikan semua nilai "a" dalam senarai \{"a", "B", "a", "a"\} dengan "A".
```powerquery
List.ReplaceValue({"a", "B", "a", "a"}, "a", "A", Replacer.ReplaceText)
```

Result: 
```powerquery
{"A", "B", "A", "A"}
```




## Category
List.Transformation functions
