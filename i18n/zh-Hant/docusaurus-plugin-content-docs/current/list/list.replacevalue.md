---
title: List.ReplaceValue
---

# List.ReplaceValue


搜尋清單中指定的值並取代它。


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

搜尋值清單 `list` 中的值 `oldValue`，並將出現的每一次以取代值 `newValue` 取代。


## Examples

### Example #1
將清單 \{"a", "B", "a", "a"\} 中的所有 "a" 值以 "A" 取代。
```powerquery
List.ReplaceValue({"a", "B", "a", "a"}, "a", "A", Replacer.ReplaceText)
```

Result: 
```powerquery
{"A", "B", "A", "A"}
```




## Category
List.Transformation functions
