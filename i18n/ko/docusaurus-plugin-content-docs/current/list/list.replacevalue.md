---
title: List.ReplaceValue
---

# List.ReplaceValue


목록에서 지정된 값을 검색하여 바꿉니다.


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

값 목록 `list`에서 `oldValue` 값을 검색하여 찾은 각 값을 대체 값 `newValue`(으)로 바꿉니다.


## Examples

### Example #1
\{"a", "B", "a", "a"\} 목록의 모든 "a" 값을 "A"로 바꿉니다.
```powerquery
List.ReplaceValue({"a", "B", "a", "a"}, "a", "A", Replacer.ReplaceText)
```

Result: 
```powerquery
{"A", "B", "A", "A"}
```




## Category
List.Transformation functions
