---
title: List.ReplaceValue
---

# List.ReplaceValue


Ищет в списке указанное значение и заменяет его.


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

Ищет в списке значений `list` значение `oldValue` и заменяет каждое его вхождение значением `newValue`.


## Examples

### Example #1
Заменить все значения "a" в списке \{"a", "B", "a", "a"\} значением "A".
```powerquery
List.ReplaceValue({"a", "B", "a", "a"}, "a", "A", Replacer.ReplaceText)
```

Result: 
```powerquery
{"A", "B", "A", "A"}
```




## Category
List.Transformation functions
