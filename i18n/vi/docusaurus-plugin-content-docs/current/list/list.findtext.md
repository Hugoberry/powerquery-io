---
title: List.FindText
---

# List.FindText


Trả về một danh sách giá trị (bao gồm các trường bản ghi) chứa văn bản được chỉ định.


## Syntax

```powerquery
List.FindText(
    list as list,
    text as text
) as list
```


## Remarks

Trả về một danh sách chứa các giá trị từ danh sách `list` đã chứa giá trị `text`.


## Examples

### Example #1
Tìm các giá trị văn bản trong danh sách \{"a", "b", "ab"\} khớp với "a".
```powerquery
List.FindText({"a", "b", "ab"}, "a")
```

Result: 
```powerquery
{"a", "ab"}
```




## Category
List.Selection
