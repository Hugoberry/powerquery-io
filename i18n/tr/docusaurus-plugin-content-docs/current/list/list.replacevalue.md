---
title: List.ReplaceValue
---

# List.ReplaceValue


Belirtilen değer için bir liste arar ve değiştirir.


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

`oldValue` değeri için bir `list` değer listesi arar ve her oluşumu `newValue` değiştirme değeri ile değiştirir.


## Examples

### Example #1
\{"a", "B", "a", "a"\} listesindeki tüm "a" değerlerini "A" ile değiştirir.
```powerquery
List.ReplaceValue({"a", "B", "a", "a"}, "a", "A", Replacer.ReplaceText)
```

Result: 
```powerquery
{"A", "B", "A", "A"}
```




## Category
List.Transformation functions
