---
title: List.ReplaceValue
---

# List.ReplaceValue


在列表中搜索指定的值并替换它。


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

在值列表 `list` 中搜索值 `oldValue`，每次找到后使用替换值 `newValue` 替换它。


## Examples

### Example #1
使用 "A" 替换列表 \{"a", "B", "a", "a"\} 中的所有 "a" 值。
```powerquery
List.ReplaceValue({"a", "B", "a", "a"}, "a", "A", Replacer.ReplaceText)
```

Result: 
```powerquery
{"A", "B", "A", "A"}
```




## Category
List.Transformation functions
