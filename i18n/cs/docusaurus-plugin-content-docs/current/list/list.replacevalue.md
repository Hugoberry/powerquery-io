---
title: List.ReplaceValue
---

# List.ReplaceValue


Vyhledá v seznamu zadanou hodnotu a nahradí ji.


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

Vyhledá v seznamu hodnot `list` hodnotu `oldValue` a nahradí každý její výskyt nahrazující hodnotou `newValue`.


## Examples

### Example #1
Nahradí v seznamu \{"a", "B", "a", "a"\} všechny hodnoty a hodnotou A.
```powerquery
List.ReplaceValue({"a", "B", "a", "a"}, "a", "A", Replacer.ReplaceText)
```

Result: 
```powerquery
{"A", "B", "A", "A"}
```




## Category
List.Transformation functions
