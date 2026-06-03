---
title: List.ReplaceValue
---

# List.ReplaceValue


Søger på en liste efter den angivne værdi og erstatter den.


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

Søger på en liste med værdier, `list`, efter værdien `oldValue` og erstatter hver forekomst med erstatningsværdien `newValue`.


## Examples

### Example #1
Erstat alle "a"-værdier på listen \{"a", "B", "a", "a"\} med "A".
```powerquery
List.ReplaceValue({"a", "B", "a", "a"}, "a", "A", Replacer.ReplaceText)
```

Result: 
```powerquery
{"A", "B", "A", "A"}
```




## Category
List.Transformation functions
