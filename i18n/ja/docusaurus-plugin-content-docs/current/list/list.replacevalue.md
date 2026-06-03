---
title: List.ReplaceValue
---

# List.ReplaceValue


リスト内で指定された値を検索し、置き換えます。


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

値のリスト `list` 内で値 `oldValue` を検索し、それぞれの出現を置換値 `newValue` に置き換えます。


## Examples

### Example #1
リスト \{"a", "B", "a", "a"\} 内のすべての "a" 値を "A" に置き換えます。
```powerquery
List.ReplaceValue({"a", "B", "a", "a"}, "a", "A", Replacer.ReplaceText)
```

Result: 
```powerquery
{"A", "B", "A", "A"}
```




## Category
List.Transformation functions
