---
title: List.ReplaceValue
---

# List.ReplaceValue


Tìm kiếm giá trị cụ thể trong một danh sách và thay thế giá trị đó.


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

Trong danh sách giá trị `list`, tìm giá trị `oldValue` và thay thế mỗi lần xuất hiện bằng giá trị thay thế `newValue`.


## Examples

### Example #1
Thay thế tất cả giá trị "a" trong danh sách \{"a", "B", "a", "a"\} bằng "A".
```powerquery
List.ReplaceValue({"a", "B", "a", "a"}, "a", "A", Replacer.ReplaceText)
```

Result: 
```powerquery
{"A", "B", "A", "A"}
```




## Category
List.Transformation functions
