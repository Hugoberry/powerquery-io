---
title: List.ReplaceValue
---

# List.ReplaceValue


Cerca en una llista el valor especificat i el substitueix.


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

Cerca en una llista de valors, `list`, el valor `oldValue` i substitueix cada aparició pel valor de substitució `newValue`.


## Examples

### Example #1
Substitueix tots els valors "a" de la llista \{"a", "B", "a", "a"\} per "A".
```powerquery
List.ReplaceValue({"a", "B", "a", "a"}, "a", "A", Replacer.ReplaceText)
```

Result: 
```powerquery
{"A", "B", "A", "A"}
```




## Category
List.Transformation functions
