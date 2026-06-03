---
title: List.ReplaceValue
---

# List.ReplaceValue


Wyszukuje określoną wartość na liście i zamienia ją.


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

Wyszukuje na liście wartości `list` wartość `oldValue` i zamienia każde jej wystąpienie na wartość zastępczą `newValue`.


## Examples

### Example #1
Zamień wszystkie wartości "a" na liście \{"a", "B", "a", "a"\} na wartość "A".
```powerquery
List.ReplaceValue({"a", "B", "a", "a"}, "a", "A", Replacer.ReplaceText)
```

Result: 
```powerquery
{"A", "B", "A", "A"}
```




## Category
List.Transformation functions
