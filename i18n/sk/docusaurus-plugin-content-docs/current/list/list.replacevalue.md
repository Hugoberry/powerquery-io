---
title: List.ReplaceValue
---

# List.ReplaceValue


V zozname vyhľadá stanovenú hodnotu a nahradí ju.


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

V zozname hodnôt `list` vyhľadá hodnotu `oldValue` a nahradí každý výskyt náhradnou hodnotou `newValue`.


## Examples

### Example #1
Nahraďte všetky hodnoty "a" v zozname \{"a", "B", "a", "a"\} hodnotou "A".
```powerquery
List.ReplaceValue({"a", "B", "a", "a"}, "a", "A", Replacer.ReplaceText)
```

Result: 
```powerquery
{"A", "B", "A", "A"}
```




## Category
List.Transformation functions
